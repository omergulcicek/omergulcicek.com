import { TanStackDevtools } from "@tanstack/react-devtools"
import type { QueryClient } from "@tanstack/react-query"
import { createRootRouteWithContext, HeadContent, Outlet, Scripts } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import geistMonoCss from "@fontsource-variable/geist-mono/index.css?url"
import geistLatinExt from "@fontsource-variable/geist/files/geist-latin-ext-wght-normal.woff2?url"
import geistLatin from "@fontsource-variable/geist/files/geist-latin-wght-normal.woff2?url"
import geistCss from "@fontsource-variable/geist/index.css?url"

import { seoHeadMeta } from "@/config/seo.config"

import appCss from "@/styles/tailwind.css?url"

import TanStackQueryDevtools from "@/providers/devtools"
import { Providers } from "@/providers/Providers"

import { DefaultCatchBoundary } from "@/components/shared/DefaultCatchBoundary"
import { NotFound } from "@/components/shared/NotFound"
import { SiteFooter } from "@/components/shared/SiteFooter"
import { SiteHeader } from "@/components/shared/SiteHeader"
import { SiteSidebar } from "@/components/shared/SiteSidebar"
import { getLocale } from "@/paraglide/runtime.js"

interface RouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContext>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      ...seoHeadMeta()
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      // Turkish text needs both files (ş, ğ, ı and İ live in latin-ext); preloading them keeps the swap from shifting the first paint.
      ...[geistLatin, geistLatinExt].map((href) => ({
        rel: "preload",
        href,
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous" as const
      })),
      { rel: "stylesheet", href: geistCss },
      // Mono only sets small dates and years, so it loads without a preload and never blocks the first paint.
      { rel: "stylesheet", href: geistMonoCss },
      { rel: "icon", href: "/logo.webp" },
      { rel: "apple-touch-icon", href: "/logo.webp" },
      { rel: "manifest", href: "/site.webmanifest" },
      // Feed readers find the RSS feeds from any page.
      { rel: "alternate", type: "application/rss+xml", title: "Blog", href: "/feed.xml" },
      { rel: "alternate", type: "application/rss+xml", title: "Notlar", href: "/notes/feed.xml" }
    ]
  }),
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
  component: RootComponent
})

function RootComponent() {
  return (
    <Providers>
      <SiteHeader />
      <div className="flex flex-1">
        <SiteSidebar />
        {/* The sidebar stays at the left edge; content centers in the space beside it. */}
        <div className="flex min-w-0 flex-1 flex-col">
          <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-5 py-10 md:px-10 md:py-12">
            <Outlet />
          </main>
          <SiteFooter />
        </div>
      </div>
    </Providers>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  const lang = getLocale()
  return (
    <html lang={lang} className="h-full" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="flex min-h-full flex-col font-sans antialiased" suppressHydrationWarning>
        {children}
        {import.meta.env.DEV ? (
          <TanStackDevtools
            config={{ position: "bottom-right", triggerHidden: true }}
            plugins={[
              {
                name: "TanStack Router",
                render: <TanStackRouterDevtoolsPanel />
              },
              TanStackQueryDevtools
            ]}
          />
        ) : null}
        <Scripts />
      </body>
    </html>
  )
}

import { useEffect } from "react"

import { TanStackDevtools } from "@tanstack/react-devtools"
import type { QueryClient } from "@tanstack/react-query"
import { createRootRouteWithContext, HeadContent, Outlet, Scripts } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import geistLatinExt from "@fontsource-variable/geist/files/geist-latin-ext-wght-normal.woff2?url"
import geistLatin from "@fontsource-variable/geist/files/geist-latin-wght-normal.woff2?url"

import { me } from "@/constants/me.constants"
import { seoHeadMeta } from "@/config/seo.config"

import appCss from "@/styles/tailwind.css?url"

import TanStackQueryDevtools from "@/providers/devtools"
import { Providers } from "@/providers/Providers"

import { DefaultCatchBoundary } from "@/components/shared/DefaultCatchBoundary"
import { GoogleAnalytics } from "@/components/shared/GoogleAnalytics"
import { NotFound } from "@/components/shared/NotFound"
import { SiteFooter } from "@/components/shared/SiteFooter"
import { SiteHeader } from "@/components/shared/SiteHeader"
import { SiteSidebar } from "@/components/shared/SiteSidebar"
import * as m from "@/paraglide/messages.js"
import { getLocale, localizeHref } from "@/paraglide/runtime.js"
import { SiteSearch } from "@/routes/-site-search"

/**
 * A route that threw notFound(), or, when no route matched the URL at all, the match the router
 * marks with `_notFound` (typed on RouteMatch, though underscored) to render the 404 in.
 */
function isNotFound(match: { status: string; _notFound?: boolean }) {
  return match.status === "notFound" || match._notFound === true
}

interface RouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContext>()({
  head: ({ matches }) => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      ...seoHeadMeta(),
      // A 404 gets its own title and stays out of the index; later entries win over the ones above.
      ...(matches.some(isNotFound)
        ? [
            { title: `${m.not_found_title()} · ${me.name}` },
            { name: "robots", content: "noindex, nofollow" }
          ]
        : [])
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
      { rel: "icon", href: "/logo.webp" },
      { rel: "apple-touch-icon", href: "/logo.webp" },
      { rel: "manifest", href: "/site.webmanifest" },
      // Feed readers find the RSS feeds from any page.
      {
        rel: "alternate",
        type: "application/rss+xml",
        title: m.blog_title(),
        href: localizeHref("/feed.xml")
      },
      {
        rel: "alternate",
        type: "application/rss+xml",
        title: m.notes_title(),
        href: "/notes/feed.xml"
      }
    ]
  }),
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
  component: RootComponent
})

function RootComponent() {
  // The page entrance (see tailwind.css) plays on the first load only; after that, pages that
  // open through client-side navigation appear at once.
  useEffect(() => {
    const timer = globalThis.setTimeout(() => {
      document.documentElement.dataset.entered = ""
    }, 800)
    return () => globalThis.clearTimeout(timer)
  }, [])

  return (
    <Providers>
      <GoogleAnalytics />
      <SiteHeader search={<SiteSearch />} />
      <div className="flex flex-1">
        <SiteSidebar />
        {/* The sidebar stays at the left edge; content centers in the space beside it. */}
        <div className="flex min-w-0 flex-1 flex-col">
          <main
            data-enter=""
            className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-5 py-10 md:px-10 md:py-12"
          >
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

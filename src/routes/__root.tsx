import type { ReactNode } from "react"

import {
	HeadContent,
	Outlet,
	ScriptOnce,
	Scripts,
	createRootRouteWithContext
} from "@tanstack/react-router"
import { NuqsAdapter } from "nuqs/adapters/tanstack-router"

import { GoogleAnalytics } from "@/components/shared/GoogleAnalytics"
import { GoogleAnalyticsPageTracker } from "@/components/shared/GoogleAnalyticsPageTracker"
import { NotFoundPage } from "@/components/shared/NotFoundPage"
import { SiteLayout } from "@/components/shared/SiteLayout"
import { WebVitalsReporter } from "@/components/shared/WebVitalsReporter"
import { SITE } from "@/constants/site.constants"
import type { RouterContext } from "@/router"
import { THEME_BOOT_SCRIPT } from "@/lib/theme/theme-boot-script"
import interLatinFontUrl from "@fontsource-variable/inter/files/inter-latin-wght-normal.woff2?url"

import "@/styles.css"

export const Route = createRootRouteWithContext<RouterContext>()({
	notFoundComponent: NotFoundPage,
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ name: "theme-color", content: "#3b82f6" },
			// Until the stylesheet loads, the browser paints the canvas in the OS theme.
			{ name: "color-scheme", content: "light dark" },
			{ name: "author", content: SITE.name },
			{
				name: "google-site-verification",
				content: SITE.googleSiteVerification
			}
		],
		links: [
			// Body text font: start it with the HTML instead of waiting for the stylesheet.
			{
				rel: "preload",
				href: interLatinFontUrl,
				as: "font",
				type: "font/woff2",
				crossOrigin: "anonymous"
			},
			{ rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
			{
				rel: "apple-touch-icon",
				href: "/apple-touch-icon.png",
				sizes: "180x180"
			},
			{
				rel: "icon",
				href: "/icon-192.png",
				type: "image/png",
				sizes: "192x192"
			},
			{ rel: "manifest", href: "/site.webmanifest" },
			{
				rel: "alternate",
				type: "application/rss+xml",
				title: `${SITE.name} Blog RSS`,
				href: SITE.feedPath
			}
		]
	}),
	component: RootComponent
})

function RootComponent() {
	return (
		<RootDocument>
			<NuqsAdapter>
				<SiteLayout>
					<Outlet />
				</SiteLayout>
			</NuqsAdapter>
		</RootDocument>
	)
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
	// The `dark` class is owned by THEME_BOOT_SCRIPT and useTheme, not React: prerendered
	// HTML cannot know the visitor's theme, so the script sets it before the first paint.
	return (
		<html lang="tr" suppressHydrationWarning>
			<head>
				<ScriptOnce>{THEME_BOOT_SCRIPT}</ScriptOnce>
				<HeadContent />
			</head>
			<body>
				{children}
				<Scripts />
				<GoogleAnalytics />
				<GoogleAnalyticsPageTracker />
				<WebVitalsReporter />
			</body>
		</html>
	)
}

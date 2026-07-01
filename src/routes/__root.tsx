import type { ReactNode } from "react"

import {
	HeadContent,
	Outlet,
	Scripts,
	createRootRoute
} from "@tanstack/react-router"
import { NuqsAdapter } from "nuqs/adapters/tanstack-router"

import {
	GoogleAnalytics,
	GoogleAnalyticsPageTracker
} from "@/components/shared/google-analytics"
import { NotFoundPage } from "@/components/shared/not-found-page"
import { SiteLayout } from "@/components/shared/SiteLayout"
import { WebVitalsReporter } from "@/components/shared/web-vitals-reporter"
import { SITE } from "@/constants/site.constants"
import { buildPageHead } from "@/lib/seo/build-page-head"
import { STATIC_PAGE_SEO } from "@/lib/seo/page-seo.constants"

import "@/styles.css"

const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"){document.documentElement.classList.add("dark");}}catch(e){}})();`

const rootSeo = buildPageHead({
	title: STATIC_PAGE_SEO.home.title,
	description: STATIC_PAGE_SEO.home.description,
	path: STATIC_PAGE_SEO.home.path,
	useTitleTemplate: false
})

export const Route = createRootRoute({
	notFoundComponent: NotFoundPage,
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ name: "theme-color", content: "#3b82f6" },
			{ name: "author", content: SITE.name },
			...rootSeo.meta
		],
		links: [
			{ rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
			{ rel: "manifest", href: "/site.webmanifest" },
			...rootSeo.links
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
	return (
		<html lang="tr" suppressHydrationWarning>
			<head>
				<script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
				<HeadContent />
			</head>
			<body>
				<GoogleAnalytics />
				<GoogleAnalyticsPageTracker />
				<WebVitalsReporter />
				{children}
				<Scripts />
			</body>
		</html>
	)
}

import type { ReactNode } from "react"

import {
	HeadContent,
	Outlet,
	Scripts,
	createRootRouteWithContext
} from "@tanstack/react-router"
import { NuqsAdapter } from "nuqs/adapters/tanstack-router"

import { blogPostsQueryOptions } from "@/features/blog/api/get-blog-posts.api"
import {
	GoogleAnalytics,
	GoogleAnalyticsPageTracker
} from "@/components/shared/google-analytics"
import { NotFoundPage } from "@/components/shared/not-found-page"
import { SiteLayout } from "@/components/shared/SiteLayout"
import { WebVitalsReporter } from "@/components/shared/web-vitals-reporter"
import { SITE } from "@/constants/site.constants"
import type { RouterContext } from "@/router"

import interLatinExtWoff2 from "@fontsource-variable/inter/files/inter-latin-ext-wght-normal.woff2?url"
import interLatinWoff2 from "@fontsource-variable/inter/files/inter-latin-wght-normal.woff2?url"

import "@/styles.css"

const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"){document.documentElement.classList.add("dark");}}catch(e){}})();`

export const Route = createRootRouteWithContext<RouterContext>()({
	notFoundComponent: NotFoundPage,
	loader: async ({ context }) => {
		await context.queryClient.ensureQueryData(blogPostsQueryOptions())
	},
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ name: "theme-color", content: "#3b82f6" },
			{ name: "author", content: SITE.name }
		],
		links: [
			{
				rel: "preload",
				href: interLatinWoff2,
				as: "font",
				type: "font/woff2",
				crossOrigin: "anonymous"
			},
			{
				rel: "preload",
				href: interLatinExtWoff2,
				as: "font",
				type: "font/woff2",
				crossOrigin: "anonymous"
			},
			{ rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
			{ rel: "manifest", href: "/site.webmanifest" },
			{
				rel: "alternate",
				type: "application/rss+xml",
				title: `${SITE.name} Blog RSS`,
				href: "/feed.xml"
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

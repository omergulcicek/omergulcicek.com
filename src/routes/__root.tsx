import type { ReactNode } from "react"

import {
	HeadContent,
	Outlet,
	Scripts,
	createRootRoute
} from "@tanstack/react-router"
import { NuqsAdapter } from "nuqs/adapters/tanstack-router"

import { SiteLayout } from "@/components/shared/SiteLayout"
import { SITE } from "@/constants/site.constants"

import "@/styles.css"

const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"){document.documentElement.classList.add("dark");}}catch(e){}})();`

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ title: SITE.title },
			{ name: "description", content: SITE.description }
		],
		links: [{ rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }]
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
				{children}
				<Scripts />
			</body>
		</html>
	)
}

import { useEffect } from "react"
import { useRouterState } from "@tanstack/react-router"

import { env } from "@/env"

const GA_SCRIPT_ID = "google-analytics-gtag"

function loadGoogleAnalytics(gaId: string) {
	if (document.getElementById(GA_SCRIPT_ID)) {
		return
	}

	window.dataLayer = window.dataLayer ?? []
	window.gtag = function gtag(...args: unknown[]) {
		window.dataLayer?.push(args)
	}
	window.gtag("js", new Date())
	window.gtag("config", gaId, { send_page_view: false })

	const script = document.createElement("script")
	script.id = GA_SCRIPT_ID
	script.async = true
	script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
	document.head.appendChild(script)
}

export function GoogleAnalytics() {
	const gaId = env.VITE_GA_ID

	useEffect(() => {
		if (!gaId) {
			return
		}

		loadGoogleAnalytics(gaId)
	}, [gaId])

	return null
}

export function GoogleAnalyticsPageTracker() {
	const gaId = env.VITE_GA_ID
	const pathname = useRouterState({ select: (state) => state.location.pathname })
	const search = useRouterState({ select: (state) => state.location.searchStr })

	useEffect(() => {
		if (!gaId || typeof window.gtag !== "function") {
			return
		}

		window.gtag("event", "page_view", {
			page_path: `${pathname}${search}`,
			page_location: window.location.href,
			page_title: document.title
		})
	}, [gaId, pathname, search])

	return null
}

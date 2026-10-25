import { useEffect } from "react"
import { useRouterState } from "@tanstack/react-router"
import { env } from "@/env"

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

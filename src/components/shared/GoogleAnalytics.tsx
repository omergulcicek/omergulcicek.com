import { useEffect } from "react"
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

		let cancelled = false

		const load = () => {
			if (!cancelled) {
				loadGoogleAnalytics(gaId)
			}
		}

		if ("requestIdleCallback" in window) {
			const idleId = window.requestIdleCallback(load, { timeout: 3000 })

			return () => {
				cancelled = true
				window.cancelIdleCallback(idleId)
			}
		}

		const timeoutId = globalThis.setTimeout(load, 2000)

		return () => {
			cancelled = true
			globalThis.clearTimeout(timeoutId)
		}
	}, [gaId])

	return null
}

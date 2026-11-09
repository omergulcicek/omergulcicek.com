import { useEffect } from "react"

import { useRouterState } from "@tanstack/react-router"

import { env } from "@/env"

const SCRIPT_ID = "google-analytics-gtag"

function sendPageView() {
  window.gtag?.("event", "page_view", {
    page_path: `${window.location.pathname}${window.location.search}`,
    page_location: window.location.href,
    page_title: document.title
  })
}

function loadGoogleAnalytics(gaId: string) {
  if (document.getElementById(SCRIPT_ID)) return

  window.dataLayer = window.dataLayer ?? []
  window.gtag = (...args: unknown[]) => {
    window.dataLayer?.push(args)
  }
  window.gtag("js", new Date())
  // Page views are sent by hand: this first one, then one per route change.
  window.gtag("config", gaId, { send_page_view: false })
  sendPageView()

  const script = document.createElement("script")
  script.id = SCRIPT_ID
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
  document.head.appendChild(script)
}

/**
 * Google Analytics 4 in production builds only. The script loads when the browser is idle, so it
 * never competes with the page; each client-side navigation sends its own page view.
 */
export function GoogleAnalytics() {
  const gaId = import.meta.env.PROD ? env.VITE_GA_ID : undefined
  const pathname = useRouterState({ select: (state) => state.location.pathname })
  const search = useRouterState({ select: (state) => state.location.searchStr })

  useEffect(() => {
    if (!gaId) return

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(() => loadGoogleAnalytics(gaId), { timeout: 3000 })
      return () => window.cancelIdleCallback(idleId)
    }

    const timeoutId = globalThis.setTimeout(() => loadGoogleAnalytics(gaId), 2000)
    return () => globalThis.clearTimeout(timeoutId)
  }, [gaId])

  // Before the script loads gtag is undefined, so the first render sends nothing here; the
  // loader sends that view itself. After that, every navigation sends one.
  useEffect(() => {
    if (gaId && window.gtag) sendPageView()
  }, [gaId, pathname, search])

  return null
}

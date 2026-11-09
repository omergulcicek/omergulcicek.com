// The gtag.js globals that GoogleAnalytics sets up before the script loads.
declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export {}

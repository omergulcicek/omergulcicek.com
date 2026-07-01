import { useEffect } from "react"

import { onCLS, onFCP, onINP, onLCP, onTTFB, type Metric } from "web-vitals"

function reportWebVital(metric: Metric) {
	if (typeof window === "undefined" || !window.gtag) {
		return
	}

	window.gtag("event", metric.name, {
		value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
		event_label: metric.id,
		non_interaction: true
	})
}

export function WebVitalsReporter() {
	useEffect(() => {
		onCLS(reportWebVital)
		onFCP(reportWebVital)
		onINP(reportWebVital)
		onLCP(reportWebVital)
		onTTFB(reportWebVital)
	}, [])

	return null
}

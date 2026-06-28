"use client"

import { useReportWebVitals } from "next/web-vitals"

type ReportWebVitalsCallback = Parameters<typeof useReportWebVitals>[0]

const handleWebVitals: ReportWebVitalsCallback = (metric) => {
	if (process.env.NODE_ENV === "development") {
	}

	if (typeof window !== "undefined" && window.gtag) {
		window.gtag("event", metric.name, {
			value: Math.round(
				metric.name === "CLS" ? metric.value * 1000 : metric.value
			),
			event_label: metric.id,
			non_interaction: true
		})
	}
}

export function WebVitals() {
	useReportWebVitals(handleWebVitals)

	return null
}

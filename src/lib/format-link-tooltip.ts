import type { ReactNode } from "react"

export function formatLinkTooltip(href: string) {
	if (href.startsWith("mailto:")) {
		return href.slice("mailto:".length)
	}

	return href.replace(/^https?:\/\//, "")
}

export function shouldShowLinkTooltip(href: string | undefined, label: ReactNode) {
	if (!href) {
		return false
	}

	if (!href.startsWith("http") && !href.startsWith("mailto:")) {
		return false
	}

	if (typeof label === "string" && label === formatLinkTooltip(href)) {
		return false
	}

	return true
}

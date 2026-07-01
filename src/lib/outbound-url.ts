import { SITE } from "@/constants/site.constants"

const OUTBOUND_UTM_SOURCE = "omergulcicek.com"
const OUTBOUND_UTM_MEDIUM = "referral"

function isOwnHostname(hostname: string) {
	const siteHost = new URL(SITE.url).hostname

	return hostname === siteHost || hostname.endsWith(`.${siteHost}`)
}

export function withOutboundUtm(url: string) {
	if (!url.startsWith("http://") && !url.startsWith("https://")) {
		return url
	}

	let parsed: URL

	try {
		parsed = new URL(url)
	} catch {
		return url
	}

	if (isOwnHostname(parsed.hostname)) {
		return url
	}

	if (!parsed.searchParams.has("utm_source")) {
		parsed.searchParams.set("utm_source", OUTBOUND_UTM_SOURCE)
	}

	if (!parsed.searchParams.has("utm_medium")) {
		parsed.searchParams.set("utm_medium", OUTBOUND_UTM_MEDIUM)
	}

	return parsed.toString()
}

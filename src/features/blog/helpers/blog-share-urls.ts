import { SITE } from "@/constants/site.constants"

export function buildShareUrl(path: string) {
	return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`
}

export function buildXShareUrl(url: string, title: string) {
	const params = new URLSearchParams({
		url,
		text: title
	})

	return `https://x.com/intent/tweet?${params.toString()}`
}

export function buildLinkedInShareUrl(url: string) {
	const params = new URLSearchParams({ url })

	return `https://www.linkedin.com/sharing/share-offsite/?${params.toString()}`
}

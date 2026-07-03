import { SITE } from "@/constants/site.constants"
import { getMediaUrl } from "@/lib/media/get-media-url"

export function resolveBlogImageSrc(src: string): string {
	if (
		src.startsWith("http://") ||
		src.startsWith("https://") ||
		src.startsWith("data:")
	) {
		return src
	}

	const path = src.startsWith("/") ? src.slice(1) : src

	return getMediaUrl(path)
}

export function resolveAbsoluteMediaUrl(path: string): string {
	const mediaUrl = getMediaUrl(path, { transform: { format: "origin" } })

	if (mediaUrl.startsWith("http://") || mediaUrl.startsWith("https://")) {
		return mediaUrl
	}

	return `${SITE.url}${mediaUrl.startsWith("/") ? mediaUrl : `/${mediaUrl}`}`
}

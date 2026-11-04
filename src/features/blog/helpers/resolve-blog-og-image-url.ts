import { SITE } from "@/constants/site.constants"

import { resolveAbsoluteMediaUrl } from "@/helpers/media/resolve-blog-media-url"

import { slugToRouteParam } from "@/features/blog/helpers/blog-helpers"

type ResolveBlogOgImageUrlOptions = {
	slug: string
	coverImage?: string
}

export function resolveBlogOgImageUrl({
	slug,
	coverImage
}: ResolveBlogOgImageUrlOptions): string {
	if (coverImage) {
		const path = coverImage.startsWith("/") ? coverImage.slice(1) : coverImage

		return resolveAbsoluteMediaUrl(path)
	}

	return `${SITE.url}/og/blog/${slugToRouteParam(slug)}`
}

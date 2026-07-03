import { SITE } from "@/constants/site.constants"
import { slugToRouteParam } from "@/features/blog/helpers/blog-helpers"
import { resolveAbsoluteMediaUrl } from "@/lib/media/resolve-blog-media-url"

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

import { createOgImageElement, OG_IMAGE_SIZE } from "@/lib/og/create-og-image-element"
import { resolveOgImageSitePath } from "@/lib/og/resolve-og-image-site-path"

type BlogOgImageContentProps = {
	title: string
	description: string
}

export function createBlogOgImageElement({
	title,
	description
}: BlogOgImageContentProps) {
	return createOgImageElement({
		title,
		description,
		sitePath: resolveOgImageSitePath("/blog")
	})
}

export const BLOG_OG_IMAGE_SIZE = OG_IMAGE_SIZE

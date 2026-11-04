import { createOgImageElement } from "@/helpers/og/create-og-image-element"
import { resolveOgImageSitePath } from "@/helpers/og/resolve-og-image-site-path"

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

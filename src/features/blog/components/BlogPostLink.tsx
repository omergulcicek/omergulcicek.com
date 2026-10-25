import type { ReactNode } from "react"
import { Link } from "@tanstack/react-router"

import { slugToRouteParam } from "@/features/blog/helpers/blog-helpers"
import type { BlogCategory } from "@/features/blog/types/blog.types"

type BlogPostLinkProps = {
	category: BlogCategory
	slug: string
	className?: string
	"aria-label"?: string
	children?: ReactNode
}

/** Links a post to /blog/$slug or /notlar/$slug depending on its category. */
export function BlogPostLink({ category, slug, ...props }: BlogPostLinkProps) {
	const params = { slug: slugToRouteParam(slug) }

	if (category === "personal") {
		return <Link to="/notlar/$slug" params={params} {...props} />
	}

	return <Link to="/blog/$slug" params={params} {...props} />
}

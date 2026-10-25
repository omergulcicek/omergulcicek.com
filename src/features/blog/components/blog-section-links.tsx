import { Link } from "@tanstack/react-router"
import type { ReactNode } from "react"

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

type BlogSectionLinkProps = {
	category: BlogCategory
	tag?: string
	className?: string
	children?: ReactNode
}

/** Links to the /blog or /notlar index, optionally filtered by a tag. */
export function BlogSectionLink({ category, tag, ...props }: BlogSectionLinkProps) {
	const search = tag ? { tag } : {}

	if (category === "personal") {
		return <Link to="/notlar" search={search} {...props} />
	}

	return <Link to="/blog" search={search} {...props} />
}

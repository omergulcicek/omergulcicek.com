import type { ReactNode } from "react"
import { Link } from "@tanstack/react-router"

import type { BlogCategory } from "@/features/blog/types/blog.types"

export type BlogSectionLinkProps = {
	category: BlogCategory
	tag?: string
	className?: string
	children?: ReactNode
}

/** Links to the /blog or /notlar index, optionally filtered by a tag. */
export function BlogSectionLink({
	category,
	tag,
	...props
}: BlogSectionLinkProps) {
	const search = tag ? { tag } : {}

	if (category === "personal") {
		return <Link to="/notlar" search={search} {...props} />
	}

	return <Link to="/blog" search={search} {...props} />
}

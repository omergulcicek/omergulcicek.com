import { FOOTER_NAV } from "@/constants/footer-nav.constants"
import { HEADER_NAV } from "@/constants/header-nav.constants"
import { getNavPageIcon } from "@/constants/nav-icons.constants"
import { EXTERNAL_LINKS } from "@/constants/site-content.constants"
import { MOCK_BLOG_POSTS } from "@/features/blog/constants/mock-blog-posts.constants"
import { getVisiblePosts, slugToRouteParam } from "@/features/blog/helpers/blog-helpers"
import { PROJECTS } from "@/features/projects/constants/projects.constants"
import { BOOKMARK_CATEGORIES } from "@/features/bookmarks/constants/bookmarks.constants"

import type { LucideIcon } from "lucide-react"

export type SearchPageItem = {
	label: string
	href: string
	icon: LucideIcon
	external?: boolean
}

export type SearchActionItem = {
	label: string
	href: string
	external?: boolean
}

const HEADER_HREFS = new Set<string>(HEADER_NAV.map((item) => item.href))

export const SEARCH_PAGES: SearchPageItem[] = [
	...HEADER_NAV.map((item) => ({
		label: item.label,
		href: item.href,
		icon: getNavPageIcon(item.href)
	})),
	...FOOTER_NAV.filter((item) => !HEADER_HREFS.has(item.href)).map((item) => ({
		label: item.label,
		href: item.href,
		icon: getNavPageIcon(item.href),
		external: item.external
	}))
]

export const SEARCH_ACTIONS: SearchActionItem[] = [
	{
		label: "E-posta gönder",
		href: EXTERNAL_LINKS.email,
		external: true
	},
	{
		label: "GitHub profilini aç",
		href: EXTERNAL_LINKS.github,
		external: true
	},
	{
		label: "ViraStack'i ziyaret et",
		href: EXTERNAL_LINKS.virastack,
		external: true
	}
]

export const SEARCH_BOOKMARK_CATEGORIES = BOOKMARK_CATEGORIES.map((category) => ({
	id: category.id,
	title: category.title,
	description: category.description,
	href: "/bookmarks"
}))

export const SEARCH_BLOG_POSTS = getVisiblePosts(
	MOCK_BLOG_POSTS,
	import.meta.env.DEV
).map((post) => ({
	slug: slugToRouteParam(post.slug),
	title: post.title,
	description: post.description,
	tags: post.tags
}))

export const SEARCH_PROJECTS = PROJECTS.map((project) => ({
	id: project.id,
	title: project.title,
	description: project.description,
	href: project.href
}))

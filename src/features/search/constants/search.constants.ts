import { Mail } from "lucide-react"
import type { ComponentType } from "react"

import { GitHubIcon } from "@/components/icons"
import { Virastack } from "@/components/ui/svgs/virastack"
import { FOOTER_NAV } from "@/constants/footer-nav.constants"
import { HEADER_NAV } from "@/constants/header-nav.constants"
import { getNavPageIcon } from "@/constants/nav-icons.constants"
import { EXTERNAL_LINKS } from "@/constants/site-content.constants"
import { BOOKMARK_CATEGORIES } from "@/features/bookmarks/constants/bookmarks.constants"
import { PROJECTS } from "@/features/projects/constants/projects.constants"

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
	icon: ComponentType<{ className?: string }>
	iconClassName: string
	external?: boolean
}

const HEADER_HREFS = new Set<string>(HEADER_NAV.map((item) => item.href))

const SEARCH_ACTION_ICON_CLASS = "size-3.5 shrink-0"

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
		icon: Mail,
		iconClassName: `${SEARCH_ACTION_ICON_CLASS} text-muted-foreground`,
		external: true
	},
	{
		label: "GitHub profilini aç",
		href: EXTERNAL_LINKS.github,
		icon: GitHubIcon,
		iconClassName: `${SEARCH_ACTION_ICON_CLASS} text-[#181717] dark:text-[#f0f6fc]`,
		external: true
	},
	{
		label: "ViraStack'i ziyaret et",
		href: EXTERNAL_LINKS.virastack,
		icon: Virastack,
		iconClassName: SEARCH_ACTION_ICON_CLASS,
		external: true
	}
]

export const SEARCH_BOOKMARK_CATEGORIES = BOOKMARK_CATEGORIES.map((category) => ({
	id: category.id,
	title: category.title,
	description: category.description,
	categoryId: category.id
}))

export const SEARCH_PROJECTS = PROJECTS.map((project) => ({
	id: project.id,
	title: project.title,
	description: project.description,
	href: project.href
}))

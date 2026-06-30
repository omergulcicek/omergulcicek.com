import {
	Bookmark,
	Component,
	GraduationCap,
	HatGlasses,
	Milestone,
	Quote,
	Sparkles,
	Wrench
} from "lucide-react"

import { FOOTER_NAV } from "@/constants/footer-nav.constants"
import { HEADER_NAV } from "@/constants/header-nav.constants"
import { EXTERNAL_LINKS } from "@/constants/site-content.constants"
import { PROJECTS } from "@/features/projects/constants/projects.constants"
import { BOOKMARK_CATEGORIES } from "@/features/bookmarks/constants/bookmarks.constants"

import type { LucideIcon } from "lucide-react"

export type SearchPageItem = {
	label: string
	href: string
	icon: LucideIcon
}

export type SearchActionItem = {
	label: string
	href: string
	external?: boolean
}

const PAGE_ICONS: Record<string, LucideIcon> = {
	"/": Sparkles,
	"/blog": Quote,
	"/projects": Component,
	"/about": HatGlasses,
	"/experiences": Milestone,
	"/services": Wrench,
	"/bookmarks": Bookmark,
	"/academy": GraduationCap
}

const HEADER_HREFS = new Set<string>(HEADER_NAV.map((item) => item.href))

export const SEARCH_PAGES: SearchPageItem[] = [
	...HEADER_NAV.map((item) => ({
		label: item.label,
		href: item.href,
		icon: PAGE_ICONS[item.href] ?? Sparkles
	})),
	...FOOTER_NAV.filter((item) => !HEADER_HREFS.has(item.href)).map((item) => ({
		label: item.label,
		href: item.href,
		icon: PAGE_ICONS[item.href] ?? Sparkles
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

export const SEARCH_PROJECTS = PROJECTS.map((project) => ({
	id: project.id,
	title: project.title,
	description: project.description,
	href: project.href
}))

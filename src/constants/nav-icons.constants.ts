import {
	Bookmark,
	Briefcase,
	Footprints,
	Handshake,
	Home,
	LayoutGrid,
	Monitor,
	Newspaper,
	Package,
	UserRound
} from "lucide-react"

import { EXTERNAL_LINKS } from "@/constants/site-content.constants"

import type { LucideIcon } from "lucide-react"

export const NAV_PAGE_ICONS: Record<string, LucideIcon> = {
	"/": Home,
	"/blog": Newspaper,
	"/projects": LayoutGrid,
	"/about": UserRound,
	"/experiences": Briefcase,
	"/journey": Footprints,
	"/workspace": Monitor,
	"/services": Handshake,
	"/bookmarks": Bookmark,
	[EXTERNAL_LINKS.virastack]: Package
}

export function getNavPageIcon(href: string): LucideIcon {
	return NAV_PAGE_ICONS[href] ?? Home
}

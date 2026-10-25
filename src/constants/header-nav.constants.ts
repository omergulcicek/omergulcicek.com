import { getNavPageIcon } from "@/constants/nav-icons.constants"

import type { LucideIcon } from "lucide-react"

export type NavItem = {
	label: string
	href: string
	exact?: boolean
}

export const HEADER_NAV: readonly NavItem[] = [
	{ label: "Ana Sayfa", href: "/", exact: true },
	{ label: "Blog", href: "/blog" },
	{ label: "Projeler", href: "/projects" },
	{ label: "Hakkımda", href: "/about" }
]

export const EXPLORE_NAV_LABEL = "Keşfet"

/** Secondary pages under Keşfet, always sorted alphabetically by their Turkish label. */
export const EXPLORE_NAV: readonly NavItem[] = [
	{ label: "Deneyimler", href: "/experiences" },
	{ label: "Kurulum", href: "/setup" },
	{ label: "Notlar", href: "/notlar" },
	{ label: "Yer İmleri", href: "/bookmarks" },
	{ label: "Yolculuk", href: "/journey" }
].sort((left, right) => left.label.localeCompare(right.label, "tr"))

export type MobileDrawerNavItem = NavItem & {
	icon: LucideIcon
}

export const MOBILE_DRAWER_NAV: MobileDrawerNavItem[] = [
	...HEADER_NAV,
	...EXPLORE_NAV
].map((item) => ({ ...item, icon: getNavPageIcon(item.href) }))

export const HEADER_BRAND = {
	href: "/",
	ariaLabel: "Ana sayfa"
} as const

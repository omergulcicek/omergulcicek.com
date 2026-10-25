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
	{ label: "Yer İmleri", href: "/bookmarks" }
]

export const EXPLORE_NAV_LABEL = "Keşfet"

export const EXPLORE_NAV: readonly NavItem[] = [
	{ label: "Hakkımda", href: "/about" },
	{ label: "Deneyimler", href: "/experiences" },
	{ label: "Yolculuk", href: "/journey" },
	{ label: "Kurulum", href: "/setup" }
]

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

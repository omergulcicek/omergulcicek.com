import { FOOTER_NAV } from "@/constants/footer-nav.constants"
import { getNavPageIcon } from "@/constants/nav-icons.constants"

import type { LucideIcon } from "lucide-react"

export const HEADER_NAV = [
	{ label: "Ana Sayfa", href: "/", exact: true },
	{ label: "Blog", href: "/blog" },
	{ label: "Projeler", href: "/projects" },
	{ label: "Hakkımda", href: "/about" }
] as const

export type MobileDrawerNavItem = {
	label: string
	href: string
	icon: LucideIcon
	exact?: boolean
	external?: boolean
}

const HEADER_HREFS = new Set<string>(HEADER_NAV.map((item) => item.href))

export const MOBILE_DRAWER_NAV: MobileDrawerNavItem[] = [
	...HEADER_NAV.map((item) => ({
		label: item.label,
		href: item.href,
		icon: getNavPageIcon(item.href),
		...("exact" in item ? { exact: item.exact } : {})
	})),
	...FOOTER_NAV.filter(
		(item) => !HEADER_HREFS.has(item.href) && !item.external
	).map((item) => ({
		label: item.label,
		href: item.href,
		icon: getNavPageIcon(item.href),
		external: item.external
	}))
]

export const HEADER_BRAND = {
	href: "/",
	ariaLabel: "Ana sayfa"
} as const

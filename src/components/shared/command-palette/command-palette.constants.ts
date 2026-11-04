import type { ComponentType } from "react"
import { Mail } from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { EXPLORE_NAV, HEADER_NAV } from "@/constants/header-nav.constants"
import { getNavPageIcon } from "@/constants/nav-icons.constants"
import { EXTERNAL_LINKS } from "@/constants/site-content.constants"

import { cn } from "@/lib/utils"

import { GitHubIcon } from "@/components/shared/icons/GitHubIcon"
import { Virastack } from "@/components/ui/svgs/virastack"

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

const SEARCH_ACTION_ICON_CLASS = "size-3.5 shrink-0"

export const SEARCH_PAGES: SearchPageItem[] = [
	...HEADER_NAV,
	...EXPLORE_NAV
].map((item) => ({
	label: item.label,
	href: item.href,
	icon: getNavPageIcon(item.href)
}))

export const SEARCH_ACTIONS: SearchActionItem[] = [
	{
		label: "E-posta gönder",
		href: EXTERNAL_LINKS.email,
		icon: Mail,
		iconClassName: cn(SEARCH_ACTION_ICON_CLASS, "text-muted-foreground"),
		external: true
	},
	{
		label: "GitHub profilini aç",
		href: EXTERNAL_LINKS.github,
		icon: GitHubIcon,
		iconClassName: cn(SEARCH_ACTION_ICON_CLASS, "text-brand-github"),
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

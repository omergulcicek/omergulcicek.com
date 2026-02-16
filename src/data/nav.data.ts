import {
	Bookmark,
	Component,
	HatGlasses,
	LucideIcon,
	Milestone,
	Quote,
	Sparkles
} from "lucide-react"

export interface NavItem {
	label: string
	href: string
	icon: LucideIcon
}

export const navItemsData: NavItem[] = [
	{
		label: "Ana Sayfa",
		href: "/",
		icon: Sparkles
	},
	{
		label: "Blog",
		href: "/blog",
		icon: Quote
	},
	{
		label: "Deneyimler",
		href: "/experiences",
		icon: Milestone
	},
	{
		label: "Projeler",
		href: "/projects",
		icon: Component
	},
	{
		label: "Yer İmleri",
		href: "/bookmarks",
		icon: Bookmark
	},
	{
		label: "Hakkımda",
		href: "/about",
		icon: HatGlasses
	}
]

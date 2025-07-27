import { Bookmark, LucideIcon, Newspaper, Sparkles, User } from "lucide-react"

export interface NavItem {
	label: string
	href: string
	icon: LucideIcon
}

export const NAV_ITEMS: NavItem[] = [
	{
		label: "Ana Sayfa",
		href: "/",
		icon: Sparkles
	},
	{
		label: "Blog",
		href: "/blog",
		icon: Newspaper
	},
	{
		label: "Yer İmleri",
		href: "/bookmarks",
		icon: Bookmark
	},
	{
		label: "Hakkımda",
		href: "/about",
		icon: User
	}
]

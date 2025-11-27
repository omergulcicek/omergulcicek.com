import {
	Book,
	Bookmark,
	Code,
	LucideIcon,
	Newspaper,
	Sparkles,
	User
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
		icon: Newspaper
	},
	{
		label: "Yer İmleri",
		href: "/bookmarks",
		icon: Bookmark
	},
	{
		label: "Akademi",
		href: "/academy",
		icon: Book
	},
	{
		label: "Hakkımda",
		href: "/about",
		icon: User
	}
]

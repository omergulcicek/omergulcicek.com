import {
	Bookmark,
	History,
	LayoutGrid,
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
	// {
	// 	label: "Akademi",
	// 	href: "/academy",
	// 	icon: Book
	// },
	{
		label: "Deneyimler",
		href: "/experiences",
		icon: History
	},
	{
		label: "Projeler",
		href: "/projects",
		icon: LayoutGrid
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

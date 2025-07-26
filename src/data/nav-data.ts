import { Bookmark, Newspaper, Sparkles, User } from "lucide-react"

export const NAV_ITEMS = [
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

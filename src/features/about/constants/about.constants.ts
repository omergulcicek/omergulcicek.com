export const ABOUT_CONTENT = {
	title: "Hakkımda",
	links: [
		{ label: "Deneyimlerim", href: "/experiences" },
		{ label: "Hizmetler", href: "/services" }
	] as const
} as const

export type Hobby = {
	id: string
	avatar: string
	title: string
	text: string
	href?: string
	linkIcon?: "instagram" | "chess"
	linkLabel?: string
}

export const HOBBIES: Hobby[] = [
	{
		id: "photography",
		avatar: "/avatars/photographer.webp",
		title: "Fotoğraf",
		text: "Gezdiğim yerleri paylaşmayı seviyorum.",
		href: "https://instagram.com/omerilekesfet",
		linkIcon: "instagram",
		linkLabel: "Instagram"
	},
	{
		id: "chess",
		avatar: "/avatars/chess.webp",
		title: "Satranç",
		text: "5+0 blitz oynuyorum.",
		href: "https://chess.com/member/omergulcicek",
		linkIcon: "chess",
		linkLabel: "Chess.com"
	},
	{
		id: "football",
		avatar: "/avatars/footballer.webp",
		title: "Futbol",
		text: "Halı sahada stoper."
	},
	{
		id: "walk",
		avatar: "/avatars/walk.webp",
		title: "Yürüyüş",
		text: "Bir şehri sokak sokak keşfetmeyi seviyorum."
	},
	{
		id: "book",
		avatar: "/avatars/book.webp",
		title: "Kitap",
		text: "Tarih ve tasavvuf okumaları."
	},
	{
		id: "draw",
		avatar: "/avatars/draw.webp",
		title: "Resim",
		text: "Karakalem ve geleneksel sanatlar."
	}
]

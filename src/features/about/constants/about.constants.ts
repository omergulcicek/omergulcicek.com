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
}

export const HOBBIES: Hobby[] = [
	{
		id: "photography",
		avatar: "/avatars/photographer.png",
		title: "Fotoğraf",
		text: "Gezdiğim yerleri paylaşmayı seviyorum.",
		href: "https://instagram.com/omerilekesfet"
	},
	{
		id: "chess",
		avatar: "/avatars/chess.png",
		title: "Satranç",
		text: "5+0 blitz oynuyorum.",
		href: "https://chess.com/member/omergulcicek"
	},
	{
		id: "football",
		avatar: "/avatars/footballer.png",
		title: "Futbol",
		text: "Halı sahada stoper."
	},
	{
		id: "walk",
		avatar: "/avatars/walk.png",
		title: "Yürüyüş",
		text: "Bir şehri sokak sokak keşfetmeyi seviyorum."
	},
	{
		id: "book",
		avatar: "/avatars/book.png",
		title: "Kitap",
		text: "Tarih ve tasavvuf okumaları."
	},
	{
		id: "draw",
		avatar: "/avatars/draw.png",
		title: "Resim",
		text: "Karakalem ve geleneksel sanatlar."
	}
]

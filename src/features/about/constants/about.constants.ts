export const ABOUT_CONTENT = {
	title: "Hakkımda",
	links: [
		{ label: "Deneyimlerim", href: "/experiences" },
		{ label: "Yolculuk", href: "/journey" },
		{ label: "Hizmetler", href: "/services" }
	] as const
} as const

export type Hobby = {
	id: string
	title: string
	text: string
	href?: string
}

export const HOBBIES: Hobby[] = [
	{
		id: "photography",
		title: "Fotoğraf",
		text: "Gezdiğim yerleri paylaşıyorum.",
		href: "https://instagram.com/omerilekesfet"
	},
	{
		id: "chess",
		title: "Satranç",
		text: "5+0 blitz oynuyorum.",
		href: "https://chess.com/member/omergulcicek"
	},
	{
		id: "walk",
		title: "Yürüyüş",
		text: "Şehirleri yürüyerek gezerim.",
		href: "/blog/google-maps-kisisel-listelerim"
	},
	{
		id: "book",
		title: "Kitap",
		text: "Osmanlı tarihi okumaları.",
		href: "/bookmarks?category=library&sort=title"
	}
]

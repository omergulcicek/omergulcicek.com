export type FavoriteItem = {
	id: string
	label: string
	value: string
	order: number
	href?: string
}

export const FAVORITES_ITEMS: FavoriteItem[] = [
	{
		id: "team",
		label: "En sevdiğim futbol kulübü.",
		value: "Barcelona",
		order: 1,
		href: "https://x.com/FCBarcelona"
	},
	{
		id: "game",
		label: "Her sezon yeni kariyer.",
		value: "Football Manager",
		order: 2,
		href: "https://store.steampowered.com/app/3551340/Football_Manager_26/"
	},
	{
		id: "musician",
		label: "En çok dinlediğim şarkıcı.",
		value: "Sagopa Kajmer",
		order: 3,
		href: "https://open.spotify.com/intl-tr/artist/1KXTegXtnCPKXjRaX1llcD"
	},
	{
		id: "movie",
		label: "Favori filmim.",
		value: "Yüzüklerin Efendisi",
		order: 4,
		href: "https://www.imdb.com/title/tt0167260/"
	},
	{
		id: "color",
		label: "En sevdiğim renk.",
		value: "Turkuaz",
		order: 5,
		href: "https://github.com/omergulcicek/turkuaz"
	}
]

export const FAVORITES_ITEMS_SORTED: FavoriteItem[] = [...FAVORITES_ITEMS].sort(
	(a, b) => a.order - b.order
)

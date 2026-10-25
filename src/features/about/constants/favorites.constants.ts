import { ME } from "@/constants/me.constants"

import type { MeFavorite } from "@/schemas/me.schema"

export type FavoriteItem = {
	id: string
	label: string
	value: string
	href?: string
}

function toFavoriteItem(favorite: MeFavorite): FavoriteItem {
	return {
		id: favorite.id,
		label: favorite.description,
		value: favorite.value,
		href: favorite.url
	}
}

export const FAVORITES_ITEMS_SORTED: FavoriteItem[] =
	ME.favorites.map(toFavoriteItem)

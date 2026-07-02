import type { BlogMediaType } from "@/features/blog/types/media-info.types"

export const BLOG_MEDIA_INFO_LABELS = {
	film: "Film",
	series: "Dizi",
	director: "Yönetmen",
	year: "Yıl",
	imdb: "IMDb",
	rating: "Puanım",
	favorite: "Favori"
} as const

export function getBlogMediaInfoKicker(type: BlogMediaType | undefined) {
	if (type === "Dizi") {
		return BLOG_MEDIA_INFO_LABELS.series
	}

	return BLOG_MEDIA_INFO_LABELS.film
}

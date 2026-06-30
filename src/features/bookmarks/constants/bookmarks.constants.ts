export type BookmarkCategory = {
	id: string
	sortOrder: number
	title: string
	description: string
	raindropSlug: string
	accent: string
}

export const BOOKMARK_CATEGORIES: BookmarkCategory[] = [
	{
		id: "blog",
		sortOrder: 1,
		title: "Blog",
		description: "Günlük takip ettiğim bloglar",
		raindropSlug: "takip-ettigim-bloglar-58171252",
		accent: "oklch(0.70 0.19 45)"
	},
	{
		id: "extension",
		sortOrder: 2,
		title: "Eklenti",
		description: "Chrome ve Cursor eklentilerim",
		raindropSlug: "uygulama-ve-eklentiler-53474205",
		accent: "oklch(0.70 0.17 155)"
	},
	{
		id: "frontend",
		sortOrder: 3,
		title: "Frontend",
		description: "npm paketleri ve kütüphaneler",
		raindropSlug: "frontend-55191450",
		accent: "oklch(0.62 0.19 300)"
	},
	{
		id: "library",
		sortOrder: 4,
		title: "Kitaplık",
		description: "Kitaplığım ve okuduğum kitaplar",
		raindropSlug: "kitapligim-53478275",
		accent: "oklch(0.75 0.15 85)"
	},
	{
		id: "personal",
		sortOrder: 5,
		title: "Kişisel",
		description: "Edebiyat, ekonomi, videolar",
		raindropSlug: "kisisel-58170823",
		accent: "oklch(0.65 0.20 15)"
	},
	{
		id: "article",
		sortOrder: 6,
		title: "Makale",
		description: "Okuyup beğendiğim yazılar",
		raindropSlug: "okunan-makaleler-58171316",
		accent: "oklch(0.75 0.18 130)"
	},
	{
		id: "technical",
		sortOrder: 7,
		title: "Teknik",
		description: "Kod, tasarım, tweetler",
		raindropSlug: "teknik-58171314",
		accent: "oklch(0.55 0.02 260)"
	}
]

export function getRaindropCollectionUrl(slug: string) {
	return `https://raindrop.io/omergulcicek/${slug}`
}

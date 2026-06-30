export type BlogCategory = "technical" | "personal"

export type BlogLocale = "tr" | "en"

export type BlogSort = "newest" | "oldest"

export type BlogPost = {
	slug: string
	title: string
	description: string
	category: BlogCategory
	tags: string[]
	locale: BlogLocale
	published: boolean
	publishedAt: string
	coverImage?: string
	readingTimeMinutes?: number
	canonicalUrl?: string
	featured?: boolean
	interactive?: boolean
	mediumUrl?: string
	translationOf?: string
	translatedTo?: string
	series?: string
	seriesOrder?: number
}

export type BlogCategoryFilter = BlogCategory | null

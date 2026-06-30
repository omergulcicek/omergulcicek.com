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
	featured?: boolean
	interactive?: boolean
	mediumUrl?: string
	translationOf?: string
	series?: string
}

export type BlogCategoryFilter = BlogCategory | null

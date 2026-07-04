export const BOOKMARK_CATEGORY_IDS = ["frontend", "library", "media"] as const

export type BookmarkCategoryId = (typeof BOOKMARK_CATEGORY_IDS)[number]

export type Bookmark = {
	id: string
	title: string
	subtitle?: string
	url: string
	description?: string
	author?: string
	translator?: string
	imageUrl?: string
	categoryId: BookmarkCategoryId
	tags: readonly string[]
}

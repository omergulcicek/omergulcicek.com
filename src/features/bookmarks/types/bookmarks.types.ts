export const BOOKMARK_CATEGORY_IDS = ["frontend", "library", "media"] as const

export type BookmarkCategoryId = (typeof BOOKMARK_CATEGORY_IDS)[number]

export const LIBRARY_BOOKMARK_SORTS = ["title", "author"] as const

export const MEDIA_RATING_BOOKMARK_SORTS = ["rating-desc", "rating-asc"] as const

export const BOOKMARK_SORTS = [
	...LIBRARY_BOOKMARK_SORTS,
	...MEDIA_RATING_BOOKMARK_SORTS
] as const

export type LibraryBookmarkSort = (typeof LIBRARY_BOOKMARK_SORTS)[number]

export type MediaRatingBookmarkSort = (typeof MEDIA_RATING_BOOKMARK_SORTS)[number]

export type BookmarkSort = (typeof BOOKMARK_SORTS)[number]

export type Bookmark = {
	id: string
	title: string
	subtitle?: string
	url: string
	description?: string
	author?: string
	translator?: string
	imageUrl?: string
	imdbRating?: string
	categoryId: BookmarkCategoryId
	tags: readonly string[]
}

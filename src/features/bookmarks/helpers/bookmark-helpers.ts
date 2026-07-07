import {
	BOOKMARK_CATEGORIES,
	DEFAULT_BOOKMARK_CATEGORY_ID,
	getBookmarkSortOptions
} from "@/features/bookmarks/constants/bookmarks.constants"
import type {
	Bookmark,
	BookmarkCategoryId,
	BookmarkSort
} from "@/features/bookmarks/types/bookmarks.types"
import {
	BOOKMARK_CATEGORY_IDS,
	BOOKMARK_SORTS
} from "@/features/bookmarks/types/bookmarks.types"

export function isBookmarkCategoryId(value: string): value is BookmarkCategoryId {
	return (BOOKMARK_CATEGORY_IDS as readonly string[]).includes(value)
}

export function resolveBookmarkCategoryId(
	category: string | null | undefined
): BookmarkCategoryId {
	if (category === "personal") {
		return "media"
	}

	if (category && isBookmarkCategoryId(category)) {
		return category
	}

	return DEFAULT_BOOKMARK_CATEGORY_ID
}

export function getBookmarksForCategory(
	bookmarks: readonly Bookmark[],
	categoryId: BookmarkCategoryId
) {
	return bookmarks.filter((bookmark) => bookmark.categoryId === categoryId)
}

export function getAvailableBookmarkTags(
	bookmarks: readonly Bookmark[],
	categoryId: BookmarkCategoryId
) {
	const tags = new Set<string>()

	for (const bookmark of getBookmarksForCategory(bookmarks, categoryId)) {
		for (const tag of bookmark.tags) {
			tags.add(tag)
		}
	}

	return sortBookmarkTags([...tags], categoryId)
}

const LIBRARY_BOOKMARK_TAG_ORDER = [
	"Dünya Tarihi",
	"İslam",
	"Osmanlı",
	"Cumhuriyet",
	"Edebiyat"
] as const

const BLOG_BOOKMARK_TAG_ORDER = ["Kişi", "Yayın", "Kurum"] as const

function sortBookmarkTags(tags: readonly string[], categoryId: BookmarkCategoryId) {
	if (categoryId === "library") {
		const order = new Map<string, number>(
			LIBRARY_BOOKMARK_TAG_ORDER.map((tag, index) => [tag, index] as const)
		)

		return [...tags].sort((left, right) => {
			const leftIndex = order.get(left)
			const rightIndex = order.get(right)

			if (leftIndex !== undefined && rightIndex !== undefined) {
				return leftIndex - rightIndex
			}

			if (leftIndex !== undefined) {
				return -1
			}

			if (rightIndex !== undefined) {
				return 1
			}

			return left.localeCompare(right, BOOKMARK_TAG_LOCALE)
		})
	}

	if (categoryId === "blog") {
		const order = new Map<string, number>(
			BLOG_BOOKMARK_TAG_ORDER.map((tag, index) => [tag, index] as const)
		)

		return [...tags].sort((left, right) => {
			const leftIndex = order.get(left)
			const rightIndex = order.get(right)

			if (leftIndex !== undefined && rightIndex !== undefined) {
				return leftIndex - rightIndex
			}

			if (leftIndex !== undefined) {
				return -1
			}

			if (rightIndex !== undefined) {
				return 1
			}

			return left.localeCompare(right, BOOKMARK_TAG_LOCALE)
		})
	}

	return [...tags].sort((left, right) =>
		left.localeCompare(right, BOOKMARK_TAG_LOCALE)
	)
}

const BOOKMARK_TAG_LOCALE = "tr"

function normalizeBookmarkTagValue(value: string) {
	return value
		.normalize("NFC")
		.replace(/\u0307/g, "")
		.toLocaleLowerCase(BOOKMARK_TAG_LOCALE)
}

export function resolveBookmarkTag(
	availableTags: readonly string[],
	tag: string | null | undefined
) {
	if (availableTags.length === 0) {
		return null
	}

	if (!tag) {
		return null
	}

	const normalizedTag = normalizeBookmarkTagValue(tag)
	const matchedTag = availableTags.find(
		(availableTag) => normalizeBookmarkTagValue(availableTag) === normalizedTag
	)

	return matchedTag ?? null
}

export function normalizeBookmarkTagUrlValue(value: string) {
	return normalizeBookmarkTagValue(value)
}

export function areBookmarkTagsEqual(
	left: string | null | undefined,
	right: string | null | undefined
) {
	if (!left || !right) {
		return false
	}

	return normalizeBookmarkTagValue(left) === normalizeBookmarkTagValue(right)
}

function compareBookmarksByTitle(left: Bookmark, right: Bookmark) {
	return left.title.localeCompare(right.title, BOOKMARK_TAG_LOCALE, {
		sensitivity: "base"
	})
}

function compareBookmarksByAuthor(left: Bookmark, right: Bookmark) {
	const leftAuthor = left.author ?? ""
	const rightAuthor = right.author ?? ""
	const authorCompare = leftAuthor.localeCompare(rightAuthor, BOOKMARK_TAG_LOCALE, {
		sensitivity: "base"
	})

	if (authorCompare !== 0) {
		return authorCompare
	}

	return compareBookmarksByTitle(left, right)
}

function parseBookmarkImdbRating(bookmark: Bookmark) {
	if (!bookmark.imdbRating) {
		return Number.NEGATIVE_INFINITY
	}

	const rating = Number.parseFloat(bookmark.imdbRating)

	return Number.isFinite(rating) ? rating : Number.NEGATIVE_INFINITY
}

function compareBookmarksByImdbRating(
	left: Bookmark,
	right: Bookmark,
	direction: "asc" | "desc"
) {
	const leftRating = parseBookmarkImdbRating(left)
	const rightRating = parseBookmarkImdbRating(right)
	const ratingCompare =
		direction === "desc" ? rightRating - leftRating : leftRating - rightRating

	if (ratingCompare !== 0) {
		return ratingCompare
	}

	return compareBookmarksByTitle(left, right)
}

export function isBookmarkSort(value: string): value is BookmarkSort {
	return (BOOKMARK_SORTS as readonly string[]).includes(value)
}

export function isBookmarkSortVisible(
	categoryId: BookmarkCategoryId,
	tag: string | null
) {
	return getBookmarkSortOptions(categoryId, tag).length > 0
}

export function getDefaultBookmarkSort(
	categoryId: BookmarkCategoryId,
	tag: string | null
): BookmarkSort {
	const options = getBookmarkSortOptions(categoryId, tag)

	if (options.length === 0) {
		return "title"
	}

	return options[0]
}

export function resolveBookmarkSort(
	sort: BookmarkSort | null | undefined,
	categoryId: BookmarkCategoryId,
	tag: string | null
): BookmarkSort | null {
	if (!isBookmarkSortVisible(categoryId, tag)) {
		return null
	}

	const options = getBookmarkSortOptions(categoryId, tag)

	if (sort && options.includes(sort)) {
		return sort
	}

	return getDefaultBookmarkSort(categoryId, tag)
}

function sortBookmarks(bookmarks: readonly Bookmark[], sort: BookmarkSort | null) {
	if (!sort) {
		return [...bookmarks].sort(compareBookmarksByTitle)
	}

	return [...bookmarks].sort((left, right) => {
		switch (sort) {
			case "title":
				return compareBookmarksByTitle(left, right)
			case "author":
				return compareBookmarksByAuthor(left, right)
			case "rating-desc":
				return compareBookmarksByImdbRating(left, right, "desc")
			case "rating-asc":
				return compareBookmarksByImdbRating(left, right, "asc")
		}
	})
}

export function applyBookmarkFilters(
	bookmarks: readonly Bookmark[],
	{
		categoryId,
		tag,
		sort
	}: {
		categoryId: BookmarkCategoryId
		tag: string | null
		sort?: BookmarkSort | null
	}
) {
	const filtered = getBookmarksForCategory(bookmarks, categoryId).filter((bookmark) => {
		if (!tag) {
			return true
		}

		return bookmark.tags.includes(tag)
	})

	const resolvedSort = resolveBookmarkSort(sort, categoryId, tag)

	return sortBookmarks(filtered, resolvedSort)
}

export function getBookmarkCategoryById(categoryId: BookmarkCategoryId) {
	return BOOKMARK_CATEGORIES.find((category) => category.id === categoryId)
}

const BOOKMARK_TAG_LABELS: Record<string, string> = {
	Türkçe: "🇹🇷 Türkçe",
	İngilizce: "🇬🇧 İngilizce"
}

export function getBookmarkTagLabel(tag: string) {
	return BOOKMARK_TAG_LABELS[tag] ?? tag
}

export function getBookmarkAllTagLabel(categoryId: BookmarkCategoryId) {
	const category = getBookmarkCategoryById(categoryId)

	if (!category) {
		return "Tümü"
	}

	return `Tüm ${category.title.toLocaleLowerCase(BOOKMARK_TAG_LOCALE)}`
}

export function getBookmarkDisplayTitle(bookmark: Bookmark) {
	if (bookmark.subtitle) {
		return `${bookmark.title} • ${bookmark.subtitle}`
	}

	return bookmark.title
}

export function getBookmarkAuthorCredit(bookmark: Bookmark) {
	if (bookmark.author) {
		if (bookmark.translator) {
			return `${bookmark.author} (Çevirmen: ${bookmark.translator})`
		}

		return bookmark.author
	}

	return bookmark.description ?? null
}

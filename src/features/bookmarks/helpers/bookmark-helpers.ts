import {
	BOOKMARK_CATEGORIES,
	BOOKMARK_UI,
	DEFAULT_BOOKMARK_CATEGORY_ID,
	YOUTUBE_BOOKMARK_SUBTAG_BY_ID,
	YOUTUBE_BOOKMARK_SUBTAGS,
	YOUTUBE_BOOKMARK_TAG,
	getBookmarkSortOptions
} from "@/features/bookmarks/constants/bookmarks.constants"
import {
	LIBRARY_BOOKMARK_TAG_ORDER,
	LIBRARY_CATEGORY_LABELS,
	LIBRARY_SUBCATEGORY_LABELS,
	getLibrarySubcategoryLabelsForCategory,
	getLibraryBookCategoryIdByLabel,
	libraryCategoryHasVisibleGenres
} from "@/features/bookmarks/constants/library-bookmarks.constants"
import type {
	Bookmark,
	BookmarkCategoryId,
	BookmarkSort
} from "@/features/bookmarks/types/bookmarks.types"
import {
	BOOKMARK_CATEGORY_IDS,
	BOOKMARK_SORTS
} from "@/features/bookmarks/types/bookmarks.types"

const BOOKMARK_TAG_LOCALE = "tr"

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
	const counts = getBookmarkTagCounts(bookmarks, categoryId)

	return sortBookmarkTags([...counts.keys()], categoryId)
}

export function getBookmarkTagCounts(
	bookmarks: readonly Bookmark[],
	categoryId: BookmarkCategoryId
): ReadonlyMap<string, number> {
	const counts = new Map<string, number>()

	for (const bookmark of getBookmarksForCategory(bookmarks, categoryId)) {
		for (const tag of bookmark.tags) {
			counts.set(tag, (counts.get(tag) ?? 0) + 1)
		}
	}

	return counts
}

function getScopedBookmarksForSubtags(
	bookmarks: readonly Bookmark[],
	categoryId: BookmarkCategoryId,
	tag: string | null,
	genre: string | null = null
) {
	return getBookmarksForCategory(bookmarks, categoryId).filter((bookmark) => {
		if (tag && !bookmark.tags.includes(tag)) {
			return false
		}

		if (genre && bookmark.genre !== genre) {
			return false
		}

		return true
	})
}

export function getYoutubeBookmarkSubtag(bookmark: Bookmark) {
	return YOUTUBE_BOOKMARK_SUBTAG_BY_ID[bookmark.id] ?? null
}

const BOOKMARK_AUTHOR_SEPARATOR = /\s*[·,;/]\s*|\s+ve\s+/

function splitBookmarkAuthorValue(author: string): string[] {
	return author
		.split(BOOKMARK_AUTHOR_SEPARATOR)
		.map((item) => item.trim())
		.filter(Boolean)
}

export function getBookmarkAuthors(bookmark: Bookmark): string[] {
	const author = bookmark.author

	if (!author) {
		return []
	}

	if (typeof author === "string") {
		return splitBookmarkAuthorValue(author)
	}

	return author.flatMap((name) => splitBookmarkAuthorValue(name))
}

export function formatBookmarkAuthors(bookmark: Bookmark): string | null {
	const authors = getBookmarkAuthors(bookmark)

	if (authors.length === 0) {
		return null
	}

	return authors.join(" · ")
}

function getBookmarkSubtagValues(
	bookmark: Bookmark,
	categoryId: BookmarkCategoryId
): string[] {
	if (categoryId === "library") {
		return getBookmarkAuthors(bookmark)
	}

	if (categoryId === "media") {
		const subtag = getYoutubeBookmarkSubtag(bookmark)

		return subtag ? [subtag] : []
	}

	return []
}

export function getBookmarkGenreCounts(
	bookmarks: readonly Bookmark[],
	categoryId: BookmarkCategoryId,
	tag: string | null
): ReadonlyMap<string, number> {
	if (categoryId !== "library" || !tag || !libraryCategoryHasVisibleGenres(tag)) {
		return new Map()
	}

	const counts = new Map<string, number>()

	for (const bookmark of getScopedBookmarksForSubtags(bookmarks, categoryId, tag)) {
		if (!bookmark.genre) {
			continue
		}

		counts.set(bookmark.genre, (counts.get(bookmark.genre) ?? 0) + 1)
	}

	return counts
}

function sortLibraryGenres(genres: readonly string[], tag: string) {
	const categoryId = getLibraryBookCategoryIdByLabel(tag)
	const order = new Map<string, number>(
		(categoryId ? getLibrarySubcategoryLabelsForCategory(categoryId) : []).map(
			(genre, index) => [genre, index]
		)
	)

	return [...genres].sort((left, right) => {
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

export function getAvailableBookmarkGenres(
	bookmarks: readonly Bookmark[],
	categoryId: BookmarkCategoryId,
	tag: string | null
) {
	if (!tag) {
		return []
	}

	return sortLibraryGenres([...getBookmarkGenreCounts(bookmarks, categoryId, tag).keys()], tag)
}

export function getBookmarkSubtagCounts(
	bookmarks: readonly Bookmark[],
	categoryId: BookmarkCategoryId,
	tag: string | null,
	genre: string | null = null
): ReadonlyMap<string, number> {
	if (categoryId !== "library" && !(categoryId === "media" && tag === YOUTUBE_BOOKMARK_TAG)) {
		return new Map()
	}

	const counts = new Map<string, number>()

	for (const bookmark of getScopedBookmarksForSubtags(bookmarks, categoryId, tag, genre)) {
		for (const subtag of getBookmarkSubtagValues(bookmark, categoryId)) {
			counts.set(subtag, (counts.get(subtag) ?? 0) + 1)
		}
	}

	return counts
}

function sortBookmarkSubtags(
	subtags: readonly string[],
	categoryId: BookmarkCategoryId,
	tag: string | null
) {
	if (categoryId === "library") {
		return [...subtags].sort((left, right) =>
			left.localeCompare(right, BOOKMARK_TAG_LOCALE, { sensitivity: "base" })
		)
	}

	if (categoryId === "media" && tag === YOUTUBE_BOOKMARK_TAG) {
		const order = new Map<string, number>(
			YOUTUBE_BOOKMARK_SUBTAGS.map((subtag, index) => [subtag, index])
		)

		return [...subtags].sort((left, right) => {
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

	return [...subtags]
}

export function getAvailableBookmarkSubtags(
	bookmarks: readonly Bookmark[],
	categoryId: BookmarkCategoryId,
	tag: string | null,
	genre: string | null = null
) {
	return sortBookmarkSubtags(
		[...getBookmarkSubtagCounts(bookmarks, categoryId, tag, genre).keys()],
		categoryId,
		tag
	)
}

export function getBookmarkSubtagAriaLabel(
	categoryId: BookmarkCategoryId,
	tag: string | null
) {
	if (categoryId === "library") {
		return BOOKMARK_UI.authorAriaLabel
	}

	if (categoryId === "media" && tag === YOUTUBE_BOOKMARK_TAG) {
		return BOOKMARK_UI.youtubeSubtagAriaLabel
	}

	return BOOKMARK_UI.tagAriaLabel
}

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

function normalizeBookmarkTagValue(value: string) {
	return value
		.normalize("NFC")
		.replace(/\u0307/g, "")
		.toLocaleLowerCase(BOOKMARK_TAG_LOCALE)
}

const LEGACY_BOOKMARK_CATEGORY_TAG_ALIASES = new Map<string, string>([
	[normalizeBookmarkTagValue("Tarih ve Kültür"), "Tarih"],
	[normalizeBookmarkTagValue("Türk Edebiyatı"), "Diğerleri"],
	[normalizeBookmarkTagValue("Dünya Edebiyatı"), "Diğerleri"],
	[normalizeBookmarkTagValue("Edebiyat"), "Diğerleri"],
	[normalizeBookmarkTagValue("Felsefe ve Düşünce"), "Diğerleri"],
	[normalizeBookmarkTagValue("Bilim"), "Diğerleri"],
	[normalizeBookmarkTagValue("Anı ve Biyografi"), "Diğerleri"],
	[normalizeBookmarkTagValue("Kişisel Gelişim"), "Diğerleri"],
	[normalizeBookmarkTagValue("Kişisel gelişim"), "Diğerleri"],
	[normalizeBookmarkTagValue("Siyaset ve toplum"), "Siyaset ve Toplum"]
])

const LIBRARY_CATEGORY_SLUG_ALIASES = new Map<string, string>(
	Object.entries(LIBRARY_CATEGORY_LABELS).map(([slug, label]) => [
		normalizeBookmarkTagValue(slug),
		label
	])
)

const LIBRARY_GENRE_SLUG_ALIASES = new Map<string, string>([
	...Object.entries(LIBRARY_SUBCATEGORY_LABELS).map(
		([slug, label]) => [normalizeBookmarkTagValue(slug), label] as const
	),
	[normalizeBookmarkTagValue("dusunce"), "İslam Düşüncesi"],
	[normalizeBookmarkTagValue("Düşünce"), "İslam Düşüncesi"],
	[normalizeBookmarkTagValue("tasavvuf"), "Tasavvuf"],
	[normalizeBookmarkTagValue("Tasavvuf"), "Tasavvuf"],
	[normalizeBookmarkTagValue("Ahlak / Tasavvuf"), "Tasavvuf"],
	[normalizeBookmarkTagValue("ahlak-tasavvuf"), "Tasavvuf"],
	[normalizeBookmarkTagValue("siyer"), "Siyer"],
	[normalizeBookmarkTagValue("Siyer"), "Siyer"],
	[normalizeBookmarkTagValue("ilmihal-ve-dua"), "Akaid ve İlmihal"],
	[normalizeBookmarkTagValue("İlmihal ve Dua"), "Akaid ve İlmihal"],
	[normalizeBookmarkTagValue("Kur'an, İlmihal ve Dua"), "Akaid ve İlmihal"],
	[normalizeBookmarkTagValue("Kur'an-ı Kerim"), "Kur'an-ı Kerim ve Meal"],
	[normalizeBookmarkTagValue("Meal"), "Kur'an-ı Kerim ve Meal"],
	[normalizeBookmarkTagValue("Akaid"), "Akaid ve İlmihal"],
	[normalizeBookmarkTagValue("İlmihal"), "Akaid ve İlmihal"],
	[normalizeBookmarkTagValue("İslam Düşüncesi / Fikriyat"), "İslam Düşüncesi"],
	[normalizeBookmarkTagValue("Hadis / Edep-Ahlak"), "Hadis ve Sünnet"],
	[normalizeBookmarkTagValue("kuran-i-kerim"), "Kur'an-ı Kerim ve Meal"],
	[normalizeBookmarkTagValue("meal"), "Kur'an-ı Kerim ve Meal"],
	[normalizeBookmarkTagValue("akaid"), "Akaid ve İlmihal"],
	[normalizeBookmarkTagValue("ilmihal"), "Akaid ve İlmihal"],
	[normalizeBookmarkTagValue("hadis-edep-ahlak"), "Hadis ve Sünnet"],
	[normalizeBookmarkTagValue("islam-dusuncesi-fikriyat"), "İslam Düşüncesi"],
	[normalizeBookmarkTagValue("tarih"), "Genel Türk Tarihi"],
	[normalizeBookmarkTagValue("Tarih"), "Genel Türk Tarihi"],
	[normalizeBookmarkTagValue("osmanli"), "Osmanlı Tarihi"],
	[normalizeBookmarkTagValue("Osmanlı"), "Osmanlı Tarihi"],
	[normalizeBookmarkTagValue("cumhuriyet"), "Cumhuriyet"],
	[normalizeBookmarkTagValue("Cumhuriyet"), "Cumhuriyet"],
	[normalizeBookmarkTagValue("cumhuriyet-ve-yakin-tarih"), "Cumhuriyet"],
	[normalizeBookmarkTagValue("Cumhuriyet ve Yakın Tarih"), "Cumhuriyet"],
	[normalizeBookmarkTagValue("roma"), "Roma"],
	[normalizeBookmarkTagValue("Roma"), "Roma"],
	[normalizeBookmarkTagValue("roma-ve-bizans"), "Roma"],
	[normalizeBookmarkTagValue("Roma ve Bizans"), "Roma"],
	[normalizeBookmarkTagValue("kultur"), "Kültür, Mitoloji ve Dünya Medeniyetleri"],
	[normalizeBookmarkTagValue("Kültür"), "Kültür, Mitoloji ve Dünya Medeniyetleri"]
])

function resolveLegacyBookmarkCategoryTag(tag: string) {
	return LEGACY_BOOKMARK_CATEGORY_TAG_ALIASES.get(normalizeBookmarkTagValue(tag)) ?? tag
}

function resolveLibraryCategorySlug(tag: string) {
	return LIBRARY_CATEGORY_SLUG_ALIASES.get(normalizeBookmarkTagValue(tag)) ?? null
}

function resolveLibraryGenreSlug(tag: string) {
	return LIBRARY_GENRE_SLUG_ALIASES.get(normalizeBookmarkTagValue(tag)) ?? null
}

export type ResolveBookmarkTagScope = "category" | "genre" | "default"

export function resolveBookmarkTag(
	availableTags: readonly string[],
	tag: string | null | undefined,
	scope: ResolveBookmarkTagScope = "default"
) {
	if (availableTags.length === 0) {
		return null
	}

	if (!tag) {
		return null
	}

	let resolvedTag = tag

	if (scope === "category") {
		resolvedTag = resolveLegacyBookmarkCategoryTag(resolvedTag)
		resolvedTag = resolveLibraryCategorySlug(resolvedTag) ?? resolvedTag
	} else if (scope === "genre") {
		resolvedTag = resolveLibraryGenreSlug(resolvedTag) ?? resolvedTag
	}

	const normalizedTag = normalizeBookmarkTagValue(resolvedTag)
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
	const leftAuthor = formatBookmarkAuthors(left) ?? ""
	const rightAuthor = formatBookmarkAuthors(right) ?? ""
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
		genre,
		subtag,
		sort
	}: {
		categoryId: BookmarkCategoryId
		tag: string | null
		genre?: string | null
		subtag?: string | null
		sort?: BookmarkSort | null
	}
) {
	const filtered = getBookmarksForCategory(bookmarks, categoryId).filter((bookmark) => {
		if (tag && !bookmark.tags.includes(tag)) {
			return false
		}

		if (genre && bookmark.genre !== genre) {
			return false
		}

		if (!subtag) {
			return true
		}

		return getBookmarkSubtagValues(bookmark, categoryId).some(
			(bookmarkSubtag) => bookmarkSubtag === subtag
		)
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

export function getBookmarkAllTagLabel() {
	return BOOKMARK_UI.allFilterLabel
}

export function getBookmarkDisplayTitle(bookmark: Bookmark) {
	if (bookmark.subtitle) {
		return `${bookmark.title} • ${bookmark.subtitle}`
	}

	return bookmark.title
}

const BOOKMARK_TITLE_INITIAL_SKIP_WORDS = new Set([
	"a",
	"an",
	"and",
	"da",
	"de",
	"ile",
	"of",
	"the",
	"ve",
	"veya",
	"ya"
])

const BOOKMARK_TITLE_INITIALS_MAX_LENGTH = 3

export function getBookmarkTitleInitials(title: string) {
	const words = title
		.split(/\s+/)
		.map((word) => word.replace(/[^\p{L}\p{N}]+/gu, ""))
		.filter((word) => {
			if (!word) {
				return false
			}

			const normalized = word.toLocaleLowerCase(BOOKMARK_TAG_LOCALE)

			if (BOOKMARK_TITLE_INITIAL_SKIP_WORDS.has(normalized)) {
				return false
			}

			return !/^[ivxlcdm]+$/i.test(word)
		})

	if (words.length === 0) {
		return title.slice(0, 1).toLocaleUpperCase(BOOKMARK_TAG_LOCALE)
	}

	return words
		.map((word) => word.slice(0, 1).toLocaleUpperCase(BOOKMARK_TAG_LOCALE))
		.join("")
		.slice(0, BOOKMARK_TITLE_INITIALS_MAX_LENGTH)
}

export function getBookmarkAuthorCredit(bookmark: Bookmark) {
	const authors = formatBookmarkAuthors(bookmark)

	if (authors) {
		if (bookmark.translator) {
			return `${authors} (Çevirmen: ${bookmark.translator})`
		}

		return authors
	}

	return bookmark.description ?? null
}

export function getLibraryBookmarkTaxonomyLabel(bookmark: Bookmark) {
	if (bookmark.categoryId !== "library") {
		return null
	}

	const category = bookmark.tags[0] ?? null
	const genre = bookmark.genre ?? null

	if (category && genre && !areBookmarkTagsEqual(category, genre)) {
		return `${category} · ${genre}`
	}

	return category ?? genre
}

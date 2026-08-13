import { useCallback, useEffect } from "react"
import { createParser, parseAsStringLiteral, useQueryStates } from "nuqs"

import { DEFAULT_BOOKMARK_CATEGORY_ID } from "@/features/bookmarks/constants/bookmarks.constants"
import {
	areBookmarkTagsEqual,
	isBookmarkSort,
	isBookmarkSortVisible,
	normalizeBookmarkTagUrlValue,
	resolveBookmarkSort
} from "@/features/bookmarks/helpers/bookmark-helpers"
import type {
	BookmarkCategoryId,
	BookmarkSort
} from "@/features/bookmarks/types/bookmarks.types"
import {
	BOOKMARK_CATEGORY_IDS,
	BOOKMARK_SORTS
} from "@/features/bookmarks/types/bookmarks.types"

const bookmarkCategoryParser = parseAsStringLiteral(BOOKMARK_CATEGORY_IDS).withDefault(
	DEFAULT_BOOKMARK_CATEGORY_ID
)

const bookmarkTagParser = createParser({
	parse: (value) => normalizeBookmarkTagUrlValue(value),
	serialize: (value) => normalizeBookmarkTagUrlValue(value)
})

const bookmarkSortParser = parseAsStringLiteral(BOOKMARK_SORTS)

const bookmarkFilterHistory = { history: "push" as const }

const bookmarkTagReset = { history: "replace" as const }

const bookmarkSortReset = { history: "replace" as const }

export const bookmarksSearchParamsParsers = {
	category: bookmarkCategoryParser,
	tag: bookmarkTagParser,
	subtag: bookmarkTagParser,
	sort: bookmarkSortParser
} as const

export function useBookmarksSearchParams() {
	const [params, setParams] = useQueryStates(bookmarksSearchParamsParsers)
	const category = params.category as BookmarkCategoryId
	const tag = params.tag ?? null
	const subtag = params.subtag ?? null
	const rawSort = params.sort && isBookmarkSort(params.sort) ? params.sort : null
	const resolvedSort = resolveBookmarkSort(rawSort, category, tag)

	const clearInvalidSort = useCallback(() => {
		if (params.sort === null) {
			return
		}

		setParams({ sort: null }, bookmarkSortReset)
	}, [params.sort, setParams])

	useEffect(() => {
		if (!isBookmarkSortVisible(category, tag)) {
			clearInvalidSort()
			return
		}

		if (rawSort === null || rawSort === resolvedSort) {
			return
		}

		setParams({ sort: resolvedSort }, bookmarkSortReset)
	}, [category, clearInvalidSort, rawSort, resolvedSort, setParams, tag])

	const setFilters = useCallback(
		(nextCategory: BookmarkCategoryId, nextTag: string | null) => {
			const categoryChanged = nextCategory !== category
			const tagChanged = !areBookmarkTagsEqual(nextTag, tag)

			if (!categoryChanged && !tagChanged) {
				return
			}

			const nextSort = isBookmarkSortVisible(nextCategory, nextTag)
				? resolveBookmarkSort(null, nextCategory, nextTag)
				: null

			setParams(
				{
					category: nextCategory,
					tag: nextTag,
					subtag: null,
					sort: nextSort
				},
				bookmarkFilterHistory
			)
		},
		[category, setParams, tag]
	)

	const setTag = useCallback(
		(nextTag: string | null) => {
			if (nextTag === null) {
				if (tag === null) {
					return
				}

				const nextSort = isBookmarkSortVisible(category, null)
					? resolveBookmarkSort(null, category, null)
					: null

				setParams({ tag: null, subtag: null, sort: nextSort }, bookmarkFilterHistory)
				return
			}

			if (areBookmarkTagsEqual(nextTag, tag)) {
				return
			}

			const nextSort = isBookmarkSortVisible(category, nextTag)
				? resolveBookmarkSort(null, category, nextTag)
				: null

			setParams({ tag: nextTag, subtag: null, sort: nextSort }, bookmarkFilterHistory)
		},
		[category, setParams, tag]
	)

	const setSubtag = useCallback(
		(nextSubtag: string | null) => {
			if (nextSubtag === null) {
				if (subtag === null) {
					return
				}

				setParams({ subtag: null }, bookmarkFilterHistory)
				return
			}

			if (areBookmarkTagsEqual(nextSubtag, subtag)) {
				return
			}

			setParams({ subtag: nextSubtag }, bookmarkFilterHistory)
		},
		[setParams, subtag]
	)

	const setSort = useCallback(
		(nextSort: BookmarkSort) => {
			if (!isBookmarkSortVisible(category, tag)) {
				return
			}

			if (params.sort === nextSort) {
				return
			}

			setParams({ sort: nextSort }, bookmarkFilterHistory)
		},
		[category, params.sort, setParams, tag]
	)

	const ensureTag = useCallback(
		(nextTag: string | null) => {
			if (nextTag === null) {
				if (tag !== null) {
					setParams({ tag: null }, bookmarkTagReset)
				}

				return
			}

			if (areBookmarkTagsEqual(nextTag, tag)) {
				return
			}

			setParams({ tag: nextTag }, bookmarkTagReset)
		},
		[setParams, tag]
	)

	const ensureSubtag = useCallback(
		(nextSubtag: string | null) => {
			if (nextSubtag === null) {
				if (subtag !== null) {
					setParams({ subtag: null }, bookmarkTagReset)
				}

				return
			}

			if (areBookmarkTagsEqual(nextSubtag, subtag)) {
				return
			}

			setParams({ subtag: nextSubtag }, bookmarkTagReset)
		},
		[setParams, subtag]
	)

	return {
		category,
		tag,
		subtag,
		sort: resolvedSort,
		setFilters,
		setTag,
		setSubtag,
		setSort,
		ensureTag,
		ensureSubtag
	}
}

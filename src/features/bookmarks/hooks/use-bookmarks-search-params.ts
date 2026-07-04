import { useCallback } from "react"
import { createParser, parseAsStringLiteral, useQueryStates } from "nuqs"

import { DEFAULT_BOOKMARK_CATEGORY_ID } from "@/features/bookmarks/constants/bookmarks.constants"
import {
	areBookmarkTagsEqual,
	normalizeBookmarkTagUrlValue
} from "@/features/bookmarks/helpers/bookmark-helpers"
import type { BookmarkCategoryId } from "@/features/bookmarks/types/bookmarks.types"
import { BOOKMARK_CATEGORY_IDS } from "@/features/bookmarks/types/bookmarks.types"

const bookmarkCategoryParser = parseAsStringLiteral(BOOKMARK_CATEGORY_IDS).withDefault(
	DEFAULT_BOOKMARK_CATEGORY_ID
)

const bookmarkTagParser = createParser({
	parse: (value) => normalizeBookmarkTagUrlValue(value),
	serialize: (value) => normalizeBookmarkTagUrlValue(value)
})

const bookmarkFilterHistory = { history: "push" as const }

const bookmarkTagReset = { history: "replace" as const }

const bookmarkSearchClear = { history: "replace" as const }

export const bookmarksSearchParamsParsers = {
	category: bookmarkCategoryParser,
	tag: bookmarkTagParser
} as const

export function useBookmarksSearchParams() {
	const [params, setParams] = useQueryStates(bookmarksSearchParamsParsers)
	const category = params.category as BookmarkCategoryId
	const tag = params.tag ?? null

	const setFilters = useCallback(
		(nextCategory: BookmarkCategoryId, nextTag: string | null) => {
			const categoryChanged = nextCategory !== category
			const tagChanged = !areBookmarkTagsEqual(nextTag, tag)

			if (!categoryChanged && !tagChanged) {
				return
			}

			setParams({ category: nextCategory, tag: nextTag }, bookmarkFilterHistory)
		},
		[category, setParams, tag]
	)

	const setTag = useCallback(
		(nextTag: string | null) => {
			if (nextTag === null) {
				if (tag === null) {
					return
				}

				setParams({ tag: null }, bookmarkFilterHistory)
				return
			}

			if (areBookmarkTagsEqual(nextTag, tag)) {
				return
			}

			setParams({ tag: nextTag }, bookmarkFilterHistory)
		},
		[setParams, tag]
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

	const clearSearch = useCallback(() => {
		setParams(null, bookmarkSearchClear)
	}, [setParams])

	return {
		category,
		tag,
		setFilters,
		setTag,
		ensureTag,
		clearSearch
	}
}

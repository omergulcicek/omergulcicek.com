import { createParser, parseAsStringLiteral } from "nuqs"

import { normalizeBookmarkTagValue } from "@/features/bookmarks/helpers/normalize-bookmark-tag"
import type { BookmarkCategoryId } from "@/features/bookmarks/types/bookmarks.types"
import {
	BOOKMARK_CATEGORY_IDS,
	BOOKMARK_SORTS
} from "@/features/bookmarks/types/bookmarks.types"

export const DEFAULT_BOOKMARK_CATEGORY_ID = "blog" satisfies BookmarkCategoryId

const bookmarkTagParser = createParser({
	parse: (value) => normalizeBookmarkTagValue(value),
	serialize: (value) => normalizeBookmarkTagValue(value)
})

/**
 * URL parsers for /bookmarks. Kept apart from the bookmark data because route
 * `validateSearch` stays in the entry bundle, which would otherwise ship every bookmark.
 */
export const bookmarksSearchParamsParsers = {
	category: parseAsStringLiteral(BOOKMARK_CATEGORY_IDS).withDefault(
		DEFAULT_BOOKMARK_CATEGORY_ID
	),
	tag: bookmarkTagParser,
	genre: bookmarkTagParser,
	subtag: bookmarkTagParser,
	sort: parseAsStringLiteral(BOOKMARK_SORTS)
} as const

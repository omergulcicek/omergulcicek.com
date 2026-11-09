import data from "@/features/bookmarks/constants/bookmarks.json"
import type { Bookmark } from "@/features/bookmarks/schemas/bookmark.schema"

/** Validated against bookmarksSchema in tests, not at runtime. */
export const bookmarks: Bookmark[] = data

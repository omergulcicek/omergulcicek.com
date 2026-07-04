import { useCallback, useEffect, useRef } from "react"

import { bleedSectionClass, pageStackGapClass } from "@/components/shared/prose.styles"
import { Container } from "@/components/shared/Container"
import { BookmarkListRow } from "@/features/bookmarks/components/bookmark-list-row"
import { BookmarksEmptyState } from "@/features/bookmarks/components/bookmarks-empty-state"
import { BookmarksListFilters } from "@/features/bookmarks/components/bookmarks-list-filters"
import { BOOKMARK_UI } from "@/features/bookmarks/constants/bookmarks.constants"
import {
	applyBookmarkFilters,
	areBookmarkTagsEqual,
	getAvailableBookmarkTags,
	resolveBookmarkTag
} from "@/features/bookmarks/helpers/bookmark-helpers"
import { useBookmarksSearchParams } from "@/features/bookmarks/hooks/use-bookmarks-search-params"
import type {
	Bookmark,
	BookmarkCategoryId
} from "@/features/bookmarks/types/bookmarks.types"
import { cn } from "@/lib/utils"

type BookmarksListProps = {
	bookmarks: readonly Bookmark[]
	className?: string
}

export function BookmarksList({ bookmarks, className }: BookmarksListProps) {
	const { category, tag, setFilters, setTag, ensureTag, clearSearch } =
		useBookmarksSearchParams()
	const availableTags = getAvailableBookmarkTags(bookmarks, category)
	const selectedTag = resolveBookmarkTag(availableTags, tag)
	const clearSearchRef = useRef(clearSearch)
	clearSearchRef.current = clearSearch

	useEffect(() => {
		return () => {
			clearSearchRef.current()
		}
	}, [])

	useEffect(() => {
		if (selectedTag === null) {
			if (tag !== null) {
				ensureTag(null)
			}

			return
		}

		if (!tag || !areBookmarkTagsEqual(tag, selectedTag)) {
			ensureTag(selectedTag)
		}
	}, [ensureTag, selectedTag, tag])

	const handleCategoryChange = useCallback(
		(nextCategory: BookmarkCategoryId) => {
			setFilters(nextCategory, null)
		},
		[setFilters]
	)

	const filteredBookmarks = applyBookmarkFilters(bookmarks, {
		categoryId: category,
		tag: selectedTag
	})

	return (
		<div className={cn("flex flex-col", pageStackGapClass, className)}>
			<Container>
				<BookmarksListFilters
					categoryId={category}
					tags={availableTags}
					selectedTag={selectedTag}
					onCategoryChange={handleCategoryChange}
					onTagSelect={setTag}
				/>
			</Container>

			<div className={bleedSectionClass}>
				{filteredBookmarks.length === 0 ? (
					<BookmarksEmptyState />
				) : (
					<div
						className="grid grid-cols-2 gap-x-4 gap-y-6 overflow-visible md:grid-cols-5 md:gap-x-4 md:gap-y-5"
						aria-label={BOOKMARK_UI.listAriaLabel}
					>
						{filteredBookmarks.map((bookmark) => (
							<BookmarkListRow key={bookmark.id} bookmark={bookmark} />
						))}
					</div>
				)}
			</div>
		</div>
	)
}

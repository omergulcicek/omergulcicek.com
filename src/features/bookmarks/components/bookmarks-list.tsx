import { useCallback, useEffect, useRef } from "react"

import { bleedSectionClass, pageStackGapClass } from "@/components/shared/prose.styles"
import { Container } from "@/components/shared/Container"
import { BookmarksListGrid } from "@/features/bookmarks/components/bookmarks-list-grid.client"
import { BookmarksListFilters } from "@/features/bookmarks/components/bookmarks-list-filters"
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
	const { category, tag, sort, setFilters, setTag, setSort, ensureTag, clearSearch } =
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
		tag: selectedTag,
		sort
	})

	return (
		<div className={cn("flex flex-col", pageStackGapClass, className)}>
			<Container>
				<BookmarksListFilters
					categoryId={category}
					tags={availableTags}
					selectedTag={selectedTag}
					sort={sort}
					onCategoryChange={handleCategoryChange}
					onTagSelect={setTag}
					onSortChange={setSort}
				/>
			</Container>

			<div className={bleedSectionClass}>
				<BookmarksListGrid
					bookmarks={filteredBookmarks}
					filterKey={`${category}-${selectedTag ?? "all"}-${sort ?? "default"}`}
				/>
			</div>
		</div>
	)
}

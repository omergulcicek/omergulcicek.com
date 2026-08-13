import { useCallback, useEffect } from "react"

import { bleedSectionClass, pageStackGapClass } from "@/components/shared/prose.styles"
import { Container } from "@/components/shared/Container"
import { BookmarksListGrid } from "@/features/bookmarks/components/bookmarks-list-grid"
import { BookmarksListFilters } from "@/features/bookmarks/components/bookmarks-list-filters"
import {
	applyBookmarkFilters,
	areBookmarkTagsEqual,
	getAvailableBookmarkSubtags,
	getAvailableBookmarkTags,
	getBookmarkSubtagCounts,
	getBookmarkTagCounts,
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
	const {
		category,
		tag,
		subtag,
		sort,
		setFilters,
		setTag,
		setSubtag,
		setSort,
		ensureTag,
		ensureSubtag
	} = useBookmarksSearchParams()
	const availableTags = getAvailableBookmarkTags(bookmarks, category)
	const selectedTag = resolveBookmarkTag(availableTags, tag)
	const availableSubtags = getAvailableBookmarkSubtags(bookmarks, category, selectedTag)
	const selectedSubtag = resolveBookmarkTag(availableSubtags, subtag)

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

	useEffect(() => {
		if (selectedSubtag === null) {
			if (subtag !== null) {
				ensureSubtag(null)
			}

			return
		}

		if (!subtag || !areBookmarkTagsEqual(subtag, selectedSubtag)) {
			ensureSubtag(selectedSubtag)
		}
	}, [ensureSubtag, selectedSubtag, subtag])

	const handleCategoryChange = useCallback(
		(nextCategory: BookmarkCategoryId) => {
			setFilters(nextCategory, null)
		},
		[setFilters]
	)

	const filteredBookmarks = applyBookmarkFilters(bookmarks, {
		categoryId: category,
		tag: selectedTag,
		subtag: selectedSubtag,
		sort
	})

	return (
		<div className={cn("flex flex-col", pageStackGapClass, className)}>
			<Container>
				<BookmarksListFilters
					categoryId={category}
					tags={availableTags}
					tagCounts={getBookmarkTagCounts(bookmarks, category)}
					selectedTag={selectedTag}
					subtags={availableSubtags}
					subtagCounts={getBookmarkSubtagCounts(bookmarks, category, selectedTag)}
					selectedSubtag={selectedSubtag}
					sort={sort}
					onCategoryChange={handleCategoryChange}
					onTagSelect={setTag}
					onSubtagSelect={setSubtag}
					onSortChange={setSort}
				/>
			</Container>

			<div className={bleedSectionClass}>
				<BookmarksListGrid
					bookmarks={filteredBookmarks}
					filterKey={`${category}-${selectedTag ?? "all"}-${selectedSubtag ?? "all"}-${sort ?? "default"}`}
				/>
			</div>
		</div>
	)
}

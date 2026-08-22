import { useCallback, useEffect } from "react"

import { bleedSectionClass, pageStackGapClass } from "@/components/shared/prose.styles"
import { Container } from "@/components/shared/Container"
import { BookmarksListGrid } from "@/features/bookmarks/components/bookmarks-list-grid"
import { BookmarksListFilters } from "@/features/bookmarks/components/bookmarks-list-filters"
import { BOOKMARK_UI } from "@/features/bookmarks/constants/bookmarks.constants"
import {
	applyBookmarkFilters,
	areBookmarkTagsEqual,
	getAvailableBookmarkGenres,
	getAvailableBookmarkSubtags,
	getAvailableBookmarkTags,
	getBookmarkGenreCounts,
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
		genre,
		subtag,
		sort,
		setFilters,
		setTag,
		setGenre,
		setSubtag,
		setSort,
		ensureTag,
		ensureGenre,
		ensureSubtag
	} = useBookmarksSearchParams()
	const availableTags = getAvailableBookmarkTags(bookmarks, category)
	const selectedTag = resolveBookmarkTag(availableTags, tag, "category")
	const availableGenres = getAvailableBookmarkGenres(bookmarks, category, selectedTag)
	const selectedGenre = resolveBookmarkTag(availableGenres, genre, "genre")
	const availableSubtags = getAvailableBookmarkSubtags(
		bookmarks,
		category,
		selectedTag,
		selectedGenre
	)
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
		if (selectedGenre === null) {
			if (genre !== null) {
				ensureGenre(null)
			}

			return
		}

		if (!genre || !areBookmarkTagsEqual(genre, selectedGenre)) {
			ensureGenre(selectedGenre)
		}
	}, [ensureGenre, genre, selectedGenre])

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
		genre: selectedGenre,
		subtag: selectedSubtag,
		sort
	})

	return (
		<div className={cn("flex flex-col", pageStackGapClass, className)}>
			<Container
				className={cn(
					"transition-[max-width] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none",
					category === "library" ? "max-w-5xl" : "max-w-2xl"
				)}
			>
				<BookmarksListFilters
					categoryId={category}
					tags={availableTags}
					tagCounts={getBookmarkTagCounts(bookmarks, category)}
					selectedTag={selectedTag}
					genres={availableGenres}
					genreCounts={getBookmarkGenreCounts(bookmarks, category, selectedTag)}
					selectedGenre={selectedGenre}
					subtags={availableSubtags}
					subtagCounts={getBookmarkSubtagCounts(
						bookmarks,
						category,
						selectedTag,
						selectedGenre
					)}
					selectedSubtag={selectedSubtag}
					sort={sort}
					onCategoryChange={handleCategoryChange}
					onTagSelect={setTag}
					onGenreSelect={setGenre}
					onSubtagSelect={setSubtag}
					onSortChange={setSort}
				/>
			</Container>

			<div className={cn(bleedSectionClass, "flex flex-col gap-6")}>
				<BookmarksListGrid
					bookmarks={filteredBookmarks}
					filterKey={`${category}-${selectedTag ?? "all"}-${selectedGenre ?? "all"}-${selectedSubtag ?? "all"}-${sort ?? "default"}`}
				/>
				{category === "library" && filteredBookmarks.length > 0 ? (
					<div className="text-muted-foreground flex flex-col gap-1 text-center text-xs italic">
						<p>{BOOKMARK_UI.libraryCoverAttribution}</p>
						<p>{BOOKMARK_UI.libraryAICategorizationAttribution}</p>
					</div>
				) : null}
			</div>
		</div>
	)
}

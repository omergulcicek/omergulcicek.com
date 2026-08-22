import { useEffect, useRef, useState, type ReactNode, type RefObject } from "react"
import { ChevronDown } from "lucide-react"

import { Separator } from "@/components/ui/separator"
import { surfacePanelClass } from "@/components/shared/interactive-card.styles"
import { BookmarkCategoryChips } from "@/features/bookmarks/components/bookmark-category-chips"
import { BookmarkSortControl } from "@/features/bookmarks/components/bookmark-sort-control"
import { BookmarkTagChips } from "@/features/bookmarks/components/bookmark-tag-chips"
import {
	BOOKMARK_UI,
	getBookmarkSortOptions
} from "@/features/bookmarks/constants/bookmarks.constants"
import { getLibraryCategoryChipClassName } from "@/features/bookmarks/constants/library-bookmarks.constants"
import {
	blogFilterTagsCollapsedClass,
	blogFilterTagsContainerClass,
	blogFilterTagsExpandedClass,
	listFilterPanelClass
} from "@/features/blog/constants/blog-filter-chip.styles"
import { getBookmarkSubtagAriaLabel } from "@/features/bookmarks/helpers/bookmark-helpers"
import type {
	BookmarkCategoryId,
	BookmarkSort
} from "@/features/bookmarks/types/bookmarks.types"
import { cn } from "@/lib/utils"

type BookmarksListFiltersProps = {
	categoryId: BookmarkCategoryId
	tags: readonly string[]
	tagCounts: ReadonlyMap<string, number>
	selectedTag: string | null
	genres: readonly string[]
	genreCounts: ReadonlyMap<string, number>
	selectedGenre: string | null
	subtags: readonly string[]
	subtagCounts: ReadonlyMap<string, number>
	selectedSubtag: string | null
	sort: BookmarkSort | null
	onCategoryChange: (categoryId: BookmarkCategoryId) => void
	onTagSelect: (tag: string | null) => void
	onGenreSelect: (genre: string | null) => void
	onSubtagSelect: (subtag: string | null) => void
	onSortChange: (sort: BookmarkSort) => void
	className?: string
}

type FilterChipRowProps = {
	expanded: boolean
	rowRef: RefObject<HTMLDivElement | null>
	children: ReactNode
}

function FilterChipRow({ expanded, rowRef, children }: FilterChipRowProps) {
	return (
		<div
			ref={rowRef}
			className={cn(
				blogFilterTagsContainerClass,
				expanded ? blogFilterTagsExpandedClass : blogFilterTagsCollapsedClass
			)}
		>
			{children}
		</div>
	)
}

function rowHasOverflow(row: HTMLDivElement | null) {
	if (!row) {
		return false
	}

	return row.scrollHeight > row.clientHeight + 1
}

export function BookmarksListFilters({
	categoryId,
	tags,
	tagCounts,
	selectedTag,
	genres,
	genreCounts,
	selectedGenre,
	subtags,
	subtagCounts,
	selectedSubtag,
	sort,
	onCategoryChange,
	onTagSelect,
	onGenreSelect,
	onSubtagSelect,
	onSortChange,
	className
}: BookmarksListFiltersProps) {
	const [tagsExpanded, setTagsExpanded] = useState(false)
	const [collapsedHasOverflow, setCollapsedHasOverflow] = useState(false)
	const tagsRowRef = useRef<HTMLDivElement>(null)
	const genresRowRef = useRef<HTMLDivElement>(null)
	const subtagsRowRef = useRef<HTMLDivElement>(null)
	const hasTags = tags.length > 0
	const hasGenres = genres.length > 0
	const hasSubtags = subtags.length > 0
	const hasFilterChips = hasTags || hasGenres || hasSubtags
	const showTagsToggle = collapsedHasOverflow
	const sortOptions = getBookmarkSortOptions(categoryId, selectedTag)
	const showSort = sortOptions.length > 0 && sort !== null
	const isLibrary = categoryId === "library"
	const tagAllLabel = isLibrary
		? BOOKMARK_UI.allCategoriesLabel
		: BOOKMARK_UI.allFilterLabel
	const subtagAllLabel = isLibrary
		? BOOKMARK_UI.allAuthorsLabel
		: BOOKMARK_UI.allFilterLabel

	useEffect(() => {
		setTagsExpanded(false)
	}, [categoryId, tags, genres, subtags])

	useEffect(() => {
		if (!hasFilterChips) {
			setCollapsedHasOverflow(false)
			return
		}

		const updateOverflow = () => {
			if (tagsExpanded) {
				return
			}

			setCollapsedHasOverflow(
				[tagsRowRef.current, genresRowRef.current, subtagsRowRef.current].some(
					rowHasOverflow
				)
			)
		}

		updateOverflow()

		const resizeObserver = new ResizeObserver(updateOverflow)
		const rows = [tagsRowRef.current, genresRowRef.current, subtagsRowRef.current]

		for (const row of rows) {
			if (row) {
				resizeObserver.observe(row)
			}
		}

		return () => {
			resizeObserver.disconnect()
		}
	}, [genres, hasFilterChips, subtags, tags, tagsExpanded])

	return (
		<section
			className={cn(
				surfacePanelClass,
				listFilterPanelClass,
				hasFilterChips ? "gap-2 md:gap-3" : "gap-0",
				className
			)}
			aria-label={BOOKMARK_UI.filtersAriaLabel}
		>
			<div className="flex min-h-8 flex-nowrap items-center justify-between md:min-h-0 md:gap-2">
				<BookmarkCategoryChips
					className="gap-1.5 md:gap-2"
					value={categoryId}
					onChange={onCategoryChange}
				/>
				{showSort ? (
					<>
						<Separator
							orientation="vertical"
							className="mx-0.5 h-5 shrink-0 self-center md:hidden data-[orientation=vertical]:h-5"
						/>
						<BookmarkSortControl
							className="gap-1.5 md:gap-2"
							options={sortOptions}
							value={sort}
							onChange={onSortChange}
						/>
					</>
				) : null}
			</div>
			{hasFilterChips ? (
				<div className="flex flex-col gap-2">
					{hasTags ? (
						<FilterChipRow expanded={tagsExpanded} rowRef={tagsRowRef}>
							<BookmarkTagChips
								tags={tags}
								counts={tagCounts}
								selectedTag={selectedTag}
								ariaLabel={BOOKMARK_UI.tagAriaLabel}
								allLabel={tagAllLabel}
								getChipClassName={
									isLibrary ? getLibraryCategoryChipClassName : undefined
								}
								onSelect={onTagSelect}
							/>
						</FilterChipRow>
					) : null}
					{hasGenres ? (
						<>
							<Separator />
							<FilterChipRow expanded={tagsExpanded} rowRef={genresRowRef}>
								<BookmarkTagChips
									tags={genres}
									counts={genreCounts}
									selectedTag={selectedGenre}
									ariaLabel={BOOKMARK_UI.genreAriaLabel}
									allLabel={BOOKMARK_UI.allGenresLabel}
									showIcon={false}
									onSelect={onGenreSelect}
								/>
							</FilterChipRow>
						</>
					) : null}
					{hasSubtags ? (
						<>
							{hasTags || hasGenres ? <Separator /> : null}
							<FilterChipRow expanded={tagsExpanded} rowRef={subtagsRowRef}>
								<BookmarkTagChips
									tags={subtags}
									counts={subtagCounts}
									selectedTag={selectedSubtag}
									ariaLabel={getBookmarkSubtagAriaLabel(categoryId, selectedTag)}
									allLabel={subtagAllLabel}
									onSelect={onSubtagSelect}
								/>
							</FilterChipRow>
						</>
					) : null}
					{showTagsToggle ? (
						<button
							type="button"
							aria-expanded={tagsExpanded}
							aria-label={BOOKMARK_UI.tagsToggleAriaLabel}
							className="focus-link text-muted-foreground hover:text-foreground inline-flex w-fit items-center gap-1 text-xs underline-offset-4 transition-[color,transform] duration-150 ease-out hover:underline active:scale-[0.96] motion-reduce:transition-none motion-reduce:active:scale-100"
							onClick={() => setTagsExpanded((expanded) => !expanded)}
						>
							<ChevronDown
								className={cn(
									"size-3 shrink-0 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none",
									tagsExpanded ? "rotate-180" : undefined
								)}
								aria-hidden
							/>
							{tagsExpanded ? BOOKMARK_UI.hideTags : BOOKMARK_UI.showTags}
						</button>
					) : null}
				</div>
			) : null}
		</section>
	)
}

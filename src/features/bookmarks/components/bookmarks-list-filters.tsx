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

function FilterExpandToggle({
	expanded,
	onToggle
}: {
	expanded: boolean
	onToggle: () => void
}) {
	return (
		<button
			type="button"
			aria-expanded={expanded}
			aria-label={BOOKMARK_UI.tagsToggleAriaLabel}
			className="focus-link text-muted-foreground hover:text-foreground inline-flex w-fit items-center gap-1 text-xs underline-offset-4 transition-[color,transform] duration-150 ease-out hover:underline active:scale-[0.96] motion-reduce:transition-none motion-reduce:active:scale-100"
			onClick={onToggle}
		>
			<ChevronDown
				className={cn(
					"size-3 shrink-0 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none",
					expanded ? "rotate-180" : undefined
				)}
				aria-hidden
			/>
			{expanded ? BOOKMARK_UI.hideTags : BOOKMARK_UI.showTags}
		</button>
	)
}

function rowHasOverflow(row: HTMLDivElement | null) {
	if (!row) {
		return false
	}

	return row.scrollHeight > row.clientHeight + 1
}

function useCollapsedRowOverflow(
	rowRef: RefObject<HTMLDivElement | null>,
	expanded: boolean,
	items: readonly string[]
) {
	const [hasOverflow, setHasOverflow] = useState(false)
	const itemsKey = items.join("\u0000")

	useEffect(() => {
		const row = rowRef.current

		if (!row) {
			setHasOverflow(false)
			return
		}

		const updateOverflow = () => {
			if (expanded) {
				return
			}

			setHasOverflow(rowHasOverflow(row))
		}

		updateOverflow()

		const resizeObserver = new ResizeObserver(updateOverflow)
		resizeObserver.observe(row)

		return () => {
			resizeObserver.disconnect()
		}
	}, [expanded, itemsKey, rowRef])

	return hasOverflow
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
	const [genresExpanded, setGenresExpanded] = useState(false)
	const [subtagsExpanded, setSubtagsExpanded] = useState(false)
	const tagsRowRef = useRef<HTMLDivElement>(null)
	const genresRowRef = useRef<HTMLDivElement>(null)
	const subtagsRowRef = useRef<HTMLDivElement>(null)
	const hasTags = tags.length > 0
	const hasGenres = genres.length > 0
	const hasSubtags = subtags.length > 0
	const hasFilterChips = hasTags || hasGenres || hasSubtags
	const tagsHaveOverflow = useCollapsedRowOverflow(tagsRowRef, tagsExpanded, tags)
	const genresHaveOverflow = useCollapsedRowOverflow(genresRowRef, genresExpanded, genres)
	const subtagsHaveOverflow = useCollapsedRowOverflow(
		subtagsRowRef,
		subtagsExpanded,
		subtags
	)
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
		setGenresExpanded(false)
		setSubtagsExpanded(false)
	}, [categoryId, tags, genres, subtags])

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
						<div className="flex flex-col gap-2">
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
							{tagsHaveOverflow ? (
								<FilterExpandToggle
									expanded={tagsExpanded}
									onToggle={() => setTagsExpanded((expanded) => !expanded)}
								/>
							) : null}
						</div>
					) : null}
					{hasGenres ? (
						<>
							<Separator />
							<div className="flex flex-col gap-2">
								<FilterChipRow expanded={genresExpanded} rowRef={genresRowRef}>
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
								{genresHaveOverflow ? (
									<FilterExpandToggle
										expanded={genresExpanded}
										onToggle={() => setGenresExpanded((expanded) => !expanded)}
									/>
								) : null}
							</div>
						</>
					) : null}
					{hasSubtags ? (
						<>
							{hasTags || hasGenres ? <Separator /> : null}
							<div className="flex flex-col gap-2">
								<FilterChipRow expanded={subtagsExpanded} rowRef={subtagsRowRef}>
									<BookmarkTagChips
										tags={subtags}
										counts={subtagCounts}
										selectedTag={selectedSubtag}
										ariaLabel={getBookmarkSubtagAriaLabel(categoryId, selectedTag)}
										allLabel={subtagAllLabel}
										onSelect={onSubtagSelect}
									/>
								</FilterChipRow>
								{subtagsHaveOverflow ? (
									<FilterExpandToggle
										expanded={subtagsExpanded}
										onToggle={() => setSubtagsExpanded((expanded) => !expanded)}
									/>
								) : null}
							</div>
						</>
					) : null}
				</div>
			) : null}
		</section>
	)
}

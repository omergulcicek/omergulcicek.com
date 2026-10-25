import { cn } from "@/lib/utils"

import { listFilterPanelClass } from "@/components/shared/filter-chip.styles"
import { surfacePanelClass } from "@/components/shared/interactive-card.styles"
import { Separator } from "@/components/ui/separator"
import { BookmarkCategoryChips } from "@/features/bookmarks/components/BookmarkCategoryChips"
import { BookmarkSortControl } from "@/features/bookmarks/components/BookmarkSortControl"
import { BookmarkTagChips } from "@/features/bookmarks/components/BookmarkTagChips"
import { CollapsibleChipRow } from "@/features/bookmarks/components/CollapsibleChipRow"
import {
	BOOKMARK_UI,
	getBookmarkSortOptions
} from "@/features/bookmarks/constants/bookmarks.constants"
import { getLibraryCategoryChipClassName } from "@/features/bookmarks/constants/library-bookmarks.constants"
import { getBookmarkSubtagAriaLabel } from "@/features/bookmarks/helpers/bookmark-helpers"
import type {
	BookmarkCategoryId,
	BookmarkSort
} from "@/features/bookmarks/types/bookmarks.types"

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
	const resetKey = [categoryId, ...tags, "|", ...genres, "|", ...subtags].join(
		","
	)
	const hasTags = tags.length > 0
	const hasGenres = genres.length > 0
	const hasSubtags = subtags.length > 0
	const hasFilterChips = hasTags || hasGenres || hasSubtags
	const sortOptions = getBookmarkSortOptions(categoryId, selectedTag)
	const showSort = sortOptions.length > 0 && sort !== null
	const isLibrary = categoryId === "library"
	const tagAllLabel = isLibrary
		? BOOKMARK_UI.allCategoriesLabel
		: BOOKMARK_UI.allFilterLabel
	const subtagAllLabel = isLibrary
		? BOOKMARK_UI.allAuthorsLabel
		: BOOKMARK_UI.allFilterLabel

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
						<CollapsibleChipRow items={tags} resetKey={resetKey}>
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
						</CollapsibleChipRow>
					) : null}
					{hasGenres ? (
						<>
							<Separator />
							<CollapsibleChipRow items={genres} resetKey={resetKey}>
								<BookmarkTagChips
									tags={genres}
									counts={genreCounts}
									selectedTag={selectedGenre}
									ariaLabel={BOOKMARK_UI.genreAriaLabel}
									allLabel={BOOKMARK_UI.allGenresLabel}
									showIcon={false}
									onSelect={onGenreSelect}
								/>
							</CollapsibleChipRow>
						</>
					) : null}
					{hasSubtags ? (
						<>
							{hasTags || hasGenres ? <Separator /> : null}
							<CollapsibleChipRow items={subtags} resetKey={resetKey}>
								<BookmarkTagChips
									tags={subtags}
									counts={subtagCounts}
									selectedTag={selectedSubtag}
									ariaLabel={getBookmarkSubtagAriaLabel(
										categoryId,
										selectedTag
									)}
									allLabel={subtagAllLabel}
									onSelect={onSubtagSelect}
								/>
							</CollapsibleChipRow>
						</>
					) : null}
				</div>
			) : null}
		</section>
	)
}

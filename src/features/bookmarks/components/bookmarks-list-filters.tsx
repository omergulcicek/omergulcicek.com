import { useEffect, useRef, useState } from "react"
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
import {
	blogFilterTagsCollapsedClass,
	blogFilterTagsCollapsedWithSubtagsClass,
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
	subtags: readonly string[]
	subtagCounts: ReadonlyMap<string, number>
	selectedSubtag: string | null
	sort: BookmarkSort | null
	onCategoryChange: (categoryId: BookmarkCategoryId) => void
	onTagSelect: (tag: string | null) => void
	onSubtagSelect: (subtag: string | null) => void
	onSortChange: (sort: BookmarkSort) => void
	className?: string
}

export function BookmarksListFilters({
	categoryId,
	tags,
	tagCounts,
	selectedTag,
	subtags,
	subtagCounts,
	selectedSubtag,
	sort,
	onCategoryChange,
	onTagSelect,
	onSubtagSelect,
	onSortChange,
	className
}: BookmarksListFiltersProps) {
	const [tagsExpanded, setTagsExpanded] = useState(false)
	const [collapsedHasOverflow, setCollapsedHasOverflow] = useState(false)
	const tagsContainerRef = useRef<HTMLDivElement>(null)
	const hasTags = tags.length > 0
	const hasSubtags = subtags.length > 0
	const hasFilterChips = hasTags || hasSubtags
	const showTagsToggle = collapsedHasOverflow
	const sortOptions = getBookmarkSortOptions(categoryId, selectedTag)
	const showSort = sortOptions.length > 0 && sort !== null
	const collapsedTagsClass = hasSubtags
		? blogFilterTagsCollapsedWithSubtagsClass
		: blogFilterTagsCollapsedClass

	useEffect(() => {
		setTagsExpanded(false)
	}, [categoryId, tags, subtags])

	useEffect(() => {
		const container = tagsContainerRef.current

		if (!container || !hasFilterChips) {
			setCollapsedHasOverflow(false)
			return
		}

		const updateOverflow = () => {
			if (tagsExpanded) {
				return
			}

			setCollapsedHasOverflow(container.scrollHeight > container.clientHeight + 1)
		}

		updateOverflow()

		const resizeObserver = new ResizeObserver(updateOverflow)
		resizeObserver.observe(container)

		return () => {
			resizeObserver.disconnect()
		}
	}, [hasFilterChips, tags, subtags, tagsExpanded])

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
					<div
						ref={tagsContainerRef}
						className={cn(
							blogFilterTagsContainerClass,
							tagsExpanded ? blogFilterTagsExpandedClass : collapsedTagsClass
						)}
					>
						<div className="flex flex-col gap-2">
							{hasTags ? (
								<BookmarkTagChips
									tags={tags}
									counts={tagCounts}
									selectedTag={selectedTag}
									ariaLabel={BOOKMARK_UI.tagAriaLabel}
									onSelect={onTagSelect}
								/>
							) : null}
							{hasSubtags ? (
								<BookmarkTagChips
									tags={subtags}
									counts={subtagCounts}
									selectedTag={selectedSubtag}
									ariaLabel={getBookmarkSubtagAriaLabel(categoryId, selectedTag)}
									onSelect={onSubtagSelect}
								/>
							) : null}
						</div>
					</div>
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

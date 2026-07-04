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
	blogFilterTagsContainerClass,
	blogFilterTagsExpandedClass,
	listFilterPanelClass
} from "@/features/blog/constants/blog-filter-chip.styles"
import type {
	BookmarkCategoryId,
	BookmarkSort
} from "@/features/bookmarks/types/bookmarks.types"
import { cn } from "@/lib/utils"

type BookmarksListFiltersProps = {
	categoryId: BookmarkCategoryId
	tags: readonly string[]
	selectedTag: string | null
	sort: BookmarkSort | null
	onCategoryChange: (categoryId: BookmarkCategoryId) => void
	onTagSelect: (tag: string | null) => void
	onSortChange: (sort: BookmarkSort) => void
	className?: string
}

export function BookmarksListFilters({
	categoryId,
	tags,
	selectedTag,
	sort,
	onCategoryChange,
	onTagSelect,
	onSortChange,
	className
}: BookmarksListFiltersProps) {
	const [tagsExpanded, setTagsExpanded] = useState(false)
	const [collapsedHasOverflow, setCollapsedHasOverflow] = useState(false)
	const tagsContainerRef = useRef<HTMLDivElement>(null)
	const hasTags = tags.length > 0
	const showTagsToggle = collapsedHasOverflow
	const sortOptions = getBookmarkSortOptions(categoryId, selectedTag)
	const showSort = sortOptions.length > 0 && sort !== null

	useEffect(() => {
		setTagsExpanded(false)
	}, [categoryId, tags])

	useEffect(() => {
		const container = tagsContainerRef.current

		if (!container || !hasTags) {
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
	}, [hasTags, tags, tagsExpanded])

	return (
		<section
			className={cn(
				surfacePanelClass,
				listFilterPanelClass,
				hasTags ? "gap-2 md:gap-3" : "gap-0",
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
			{hasTags ? (
				<div className="flex flex-col gap-2">
					<div
						ref={tagsContainerRef}
						className={cn(
							blogFilterTagsContainerClass,
							tagsExpanded ? blogFilterTagsExpandedClass : blogFilterTagsCollapsedClass
						)}
					>
						<BookmarkTagChips
							categoryId={categoryId}
							tags={tags}
							selectedTag={selectedTag}
							onSelect={onTagSelect}
						/>
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

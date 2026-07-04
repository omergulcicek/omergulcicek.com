import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

import { surfacePanelClass } from "@/components/shared/interactive-card.styles"
import { BookmarkCategoryChips } from "@/features/bookmarks/components/bookmark-category-chips"
import { BookmarkTagChips } from "@/features/bookmarks/components/bookmark-tag-chips"
import { BOOKMARK_UI } from "@/features/bookmarks/constants/bookmarks.constants"
import { blogFilterTagsCollapsedClass, listFilterPanelClass } from "@/features/blog/constants/blog-filter-chip.styles"
import type { BookmarkCategoryId } from "@/features/bookmarks/types/bookmarks.types"
import { cn } from "@/lib/utils"

type BookmarksListFiltersProps = {
	categoryId: BookmarkCategoryId
	tags: readonly string[]
	selectedTag: string | null
	onCategoryChange: (categoryId: BookmarkCategoryId) => void
	onTagSelect: (tag: string | null) => void
	className?: string
}

export function BookmarksListFilters({
	categoryId,
	tags,
	selectedTag,
	onCategoryChange,
	onTagSelect,
	className
}: BookmarksListFiltersProps) {
	const [tagsExpanded, setTagsExpanded] = useState(false)
	const [hasTagOverflow, setHasTagOverflow] = useState(false)
	const tagsContainerRef = useRef<HTMLDivElement>(null)
	const hasTags = tags.length > 0
	const showTagsToggle = tagsExpanded || hasTagOverflow

	useEffect(() => {
		const container = tagsContainerRef.current

		if (!container || !hasTags) {
			setHasTagOverflow(false)
			return
		}

		const updateOverflow = () => {
			setHasTagOverflow(container.scrollHeight > container.clientHeight + 1)
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
			<BookmarkCategoryChips value={categoryId} onChange={onCategoryChange} />
			{hasTags ? (
				<div className="flex flex-col gap-2">
					<div
						ref={tagsContainerRef}
						className={cn(!tagsExpanded && blogFilterTagsCollapsedClass)}
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
							className="focus-link text-muted-foreground hover:text-foreground inline-flex w-fit items-center gap-1 text-xs underline-offset-4 transition-colors hover:underline"
							onClick={() => setTagsExpanded((expanded) => !expanded)}
						>
							<ChevronDown
								className={cn(
									"size-3 shrink-0 transition-transform duration-200",
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

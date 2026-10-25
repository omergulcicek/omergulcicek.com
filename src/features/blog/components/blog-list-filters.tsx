import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

import { surfacePanelClass } from "@/components/shared/interactive-card.styles"
import { BlogSortControl } from "@/features/blog/components/blog-sort-control"
import { BlogTagChips } from "@/features/blog/components/blog-tag-chips"
import { BLOG_UI } from "@/features/blog/constants/blog.constants"
import {
	blogFilterPanelClass,
	blogFilterTagsContainerClass,
	blogTagsCollapsedClass,
	blogTagsExpandedClass
} from "@/features/blog/constants/blog-filter-chip.styles"
import type { BlogSort } from "@/features/blog/types/blog.types"
import { cn } from "@/lib/utils"

type BlogListFiltersProps = {
	tags: readonly string[]
	tagCounts: ReadonlyMap<string, number>
	featuredCount: number
	isFeaturedActive: boolean
	onFeaturedToggle: () => void
	selectedTag: string | null
	sort: BlogSort
	showClearFilters: boolean
	onTagSelect: (tag: string) => void
	onSortChange: (sort: BlogSort) => void
	onClearFilters: () => void
	className?: string
}

export function BlogListFilters({
	tags,
	tagCounts,
	featuredCount,
	isFeaturedActive,
	onFeaturedToggle,
	selectedTag,
	sort,
	showClearFilters,
	onTagSelect,
	onSortChange,
	onClearFilters,
	className
}: BlogListFiltersProps) {
	const [tagsExpanded, setTagsExpanded] = useState(false)
	const [collapsedHasOverflow, setCollapsedHasOverflow] = useState(false)
	const tagsContainerRef = useRef<HTMLDivElement>(null)
	const hasTags = tags.length > 0
	const showTagsToggle = collapsedHasOverflow

	useEffect(() => {
		setTagsExpanded(false)
	}, [tags])

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
			className={cn(surfacePanelClass, blogFilterPanelClass, "gap-2", className)}
			aria-label={BLOG_UI.filtersAriaLabel}
		>
			<div className="flex items-start gap-2">
				<div
					ref={tagsContainerRef}
					className={cn(
						"min-w-0 flex-1",
						blogFilterTagsContainerClass,
						tagsExpanded ? blogTagsExpandedClass : blogTagsCollapsedClass
					)}
				>
					<BlogTagChips
						tags={tags}
						tagCounts={tagCounts}
						featuredCount={featuredCount}
						isFeaturedActive={isFeaturedActive}
						onFeaturedToggle={onFeaturedToggle}
						selectedTag={selectedTag}
						onSelect={onTagSelect}
					/>
				</div>
				<BlogSortControl
					className="-my-1"
					value={sort}
					onChange={onSortChange}
				/>
			</div>
			{showTagsToggle || showClearFilters ? (
				<div className="flex items-center gap-4">
					{showTagsToggle ? (
						<button
							type="button"
							aria-expanded={tagsExpanded}
							aria-label={BLOG_UI.tagsToggleAriaLabel}
							className="focus-link text-muted-foreground hover:text-foreground inline-flex w-fit items-center gap-1 text-xs underline-offset-4 transition-colors hover:underline"
							onClick={() => setTagsExpanded((expanded) => !expanded)}
						>
							<ChevronDown
								className={cn(
									"size-3 shrink-0 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none",
									tagsExpanded ? "rotate-180" : undefined
								)}
								aria-hidden
							/>
							{tagsExpanded ? BLOG_UI.hideTags : BLOG_UI.showTags}
						</button>
					) : null}
					{showClearFilters ? (
						<button
							type="button"
							className="focus-link text-muted-foreground hover:text-foreground text-xs underline-offset-4 transition-[color,transform] duration-150 ease-out hover:underline active:scale-[0.96] motion-reduce:transition-none motion-reduce:active:scale-100"
							onClick={onClearFilters}
						>
							{BLOG_UI.clearFilters}
						</button>
					) : null}
				</div>
			) : null}
		</section>
	)
}

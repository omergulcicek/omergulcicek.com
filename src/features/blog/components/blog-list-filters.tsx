import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

import { Separator } from "@/components/ui/separator"
import { surfacePanelClass } from "@/components/shared/interactive-card.styles"
import { BlogCategoryPills } from "@/features/blog/components/blog-category-pills"
import { BlogSortControl } from "@/features/blog/components/blog-sort-control"
import { BlogTagChips } from "@/features/blog/components/blog-tag-chips"
import { BLOG_UI } from "@/features/blog/constants/blog.constants"
import {
	blogFilterTagsCollapsedClass,
	blogFilterTagsContainerClass,
	blogFilterTagsExpandedClass,
	listFilterPanelClass
} from "@/features/blog/constants/blog-filter-chip.styles"
import type { BlogCategory, BlogSort } from "@/features/blog/types/blog.types"
import { cn } from "@/lib/utils"

type BlogListFiltersProps = {
	category: BlogCategory | null
	tags: readonly string[]
	selectedTag: string | null
	sort: BlogSort
	showClearFilters: boolean
	onCategoryChange: (category: BlogCategory | null) => void
	onTagSelect: (tag: string) => void
	onSortChange: (sort: BlogSort) => void
	onClearFilters: () => void
	className?: string
}

export function BlogListFilters({
	category,
	tags,
	selectedTag,
	sort,
	showClearFilters,
	onCategoryChange,
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
	}, [category, tags])

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
			aria-label={BLOG_UI.filtersAriaLabel}
		>
			<div className="flex min-h-8 flex-nowrap items-center justify-between md:min-h-0 md:gap-2">
				<div className="flex flex-wrap items-center gap-1.5 md:gap-2">
					<BlogCategoryPills
						className="gap-1.5 md:gap-2"
						value={category}
						onChange={onCategoryChange}
					/>
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
				<Separator
					orientation="vertical"
					className="mx-0.5 h-5 shrink-0 self-center md:hidden data-[orientation=vertical]:h-5"
				/>
				<BlogSortControl
					className="gap-1.5 md:gap-2"
					value={sort}
					onChange={onSortChange}
				/>
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
						<BlogTagChips
							tags={tags}
							selectedTag={selectedTag}
							onSelect={onTagSelect}
						/>
					</div>
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
				</div>
			) : null}
		</section>
	)
}

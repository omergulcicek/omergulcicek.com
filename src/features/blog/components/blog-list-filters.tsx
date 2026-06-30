import { BlogCategoryPills } from "@/features/blog/components/blog-category-pills"
import { BlogSortControl } from "@/features/blog/components/blog-sort-control"
import { BlogTagChips } from "@/features/blog/components/blog-tag-chips"
import { BLOG_UI } from "@/features/blog/constants/blog.constants"
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
	return (
		<section
			className={cn(
				"sticky top-[calc(3.5rem+8px)] z-20 -mx-1 flex flex-col gap-4 rounded-xl border border-border/60 bg-background/95 p-4 shadow-sm supports-backdrop-filter:bg-background/60 backdrop-blur",
				className
			)}
			aria-label={BLOG_UI.filtersAriaLabel}
		>
			<div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
				<div className="flex flex-wrap items-center gap-2">
					<BlogCategoryPills value={category} onChange={onCategoryChange} />
					{showClearFilters ? (
						<button
							type="button"
							className="focus-link text-muted-foreground hover:text-foreground text-xs underline-offset-4 transition-colors hover:underline"
							onClick={onClearFilters}
						>
							{BLOG_UI.clearFilters}
						</button>
					) : null}
				</div>
				<BlogSortControl value={sort} onChange={onSortChange} />
			</div>
			<BlogTagChips
				tags={tags}
				selectedTag={selectedTag}
				onSelect={onTagSelect}
			/>
		</section>
	)
}

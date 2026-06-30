import { BlogCategoryPills } from "@/features/blog/components/blog-category-pills"
import { BlogSortControl } from "@/features/blog/components/blog-sort-control"
import { BlogTagChips } from "@/features/blog/components/blog-tag-chips"
import { BLOG_UI } from "@/features/blog/constants/blog.constants"
import type { BlogCategory, BlogSort } from "@/features/blog/types/blog.types"
import { cn } from "@/lib/utils"

type BlogListFiltersProps = {
	category: BlogCategory | null
	tags: readonly string[]
	selectedTags: string[]
	sort: BlogSort
	onCategoryChange: (category: BlogCategory | null) => void
	onTagToggle: (tag: string) => void
	onSortChange: (sort: BlogSort) => void
	className?: string
}

export function BlogListFilters({
	category,
	tags,
	selectedTags,
	sort,
	onCategoryChange,
	onTagToggle,
	onSortChange,
	className
}: BlogListFiltersProps) {
	return (
		<section
			className={cn("flex flex-col gap-4", className)}
			aria-label={BLOG_UI.filtersAriaLabel}
		>
			<div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
				<BlogCategoryPills value={category} onChange={onCategoryChange} />
				<BlogSortControl value={sort} onChange={onSortChange} />
			</div>
			<BlogTagChips
				tags={tags}
				selectedTags={selectedTags}
				onToggle={onTagToggle}
			/>
		</section>
	)
}

import { slugifyHeading } from "@/lib/slugify-heading"
import { cn } from "@/lib/utils"

import { pageStackGapClass } from "@/components/shared/prose.styles"
import { Button } from "@/components/ui/button"
import { BlogEmptyState } from "@/features/blog/components/BlogEmptyState"
import { BlogListFilters } from "@/features/blog/components/BlogListFilters"
import { BlogPostGroup } from "@/features/blog/components/BlogPostGroup"
import { BLOG_UI } from "@/features/blog/constants/blog.constants"
import type { BlogSection } from "@/features/blog/constants/blog.constants"
import { useBlogListView } from "@/features/blog/hooks/use-blog-list-view"
import type { BlogPost } from "@/features/blog/types/blog.types"

type BlogListProps = {
	section: BlogSection
	posts: BlogPost[]
	isDev?: boolean
	className?: string
}

export function BlogList({
	section,
	posts,
	isDev = false,
	className
}: BlogListProps) {
	const view = useBlogListView(section, posts)
	const showDrafts = isDev && view.drafts.length > 0

	return (
		<div className={cn("flex flex-col", pageStackGapClass, className)}>
			<BlogListFilters
				tags={view.availableTags}
				tagCounts={view.tagCounts}
				featuredCount={view.featuredSlugs.size}
				isFeaturedActive={view.featured}
				onFeaturedToggle={view.toggleFeatured}
				selectedTag={view.tag}
				sort={view.sort}
				showClearFilters={view.showClearFilters}
				onTagSelect={view.selectTag}
				onSortChange={view.setSort}
				onClearFilters={view.clearFilters}
			/>

			{view.hasPosts ? (
				<div
					className={cn("flex flex-col", pageStackGapClass)}
					aria-label={BLOG_UI.listAriaLabel}
				>
					{showDrafts ? (
						<BlogPostGroup
							id={slugifyHeading(BLOG_UI.draftsHeading)}
							heading={BLOG_UI.draftsHeading}
							posts={view.drafts}
							showDraftBadge
						/>
					) : null}

					{view.visibleYearEntries.map(({ year, posts: yearPosts }) => (
						<BlogPostGroup
							key={year}
							id={year}
							heading={year}
							posts={yearPosts}
							featuredSlugs={view.featuredSlugs}
							headingClassName="scroll-mt-24 font-mono tabular-nums md:scroll-mt-52"
						/>
					))}

					{view.hasMorePosts ? (
						<div className="flex justify-center pt-2">
							<Button
								type="button"
								variant="outline"
								size="sm"
								onClick={view.showMorePosts}
							>
								{BLOG_UI.loadMorePostsLabel}
							</Button>
						</div>
					) : null}
				</div>
			) : (
				<BlogEmptyState onClearFilters={view.clearFilters} />
			)}
		</div>
	)
}

import { BlogListFilters } from "@/features/blog/components/blog-list-filters"
import { BlogListPostRow } from "@/features/blog/components/blog-list-post-row"
import { BLOG_TAG_POOL, BLOG_UI } from "@/features/blog/constants/blog.constants"
import {
	applyBlogFilters,
	getAvailableTags,
	getSortedYearEntries,
	partitionDraftPosts
} from "@/features/blog/helpers/blog-helpers"
import { useBlogSearchParams } from "@/features/blog/hooks/use-blog-search-params"
import type { BlogPost } from "@/features/blog/types/blog.types"
import { cn } from "@/lib/utils"

type BlogListProps = {
	posts: BlogPost[]
	isDev?: boolean
	className?: string
}

export function BlogList({ posts, isDev = false, className }: BlogListProps) {
	const {
		category,
		tags,
		sort,
		setCategory,
		setSort,
		toggleTag
	} = useBlogSearchParams()

	const availableTags = getAvailableTags(posts, BLOG_TAG_POOL)
	const filteredPosts = applyBlogFilters(posts, { category, tags, sort })
	const { drafts, published } = partitionDraftPosts(filteredPosts)
	const yearEntries = getSortedYearEntries(published, sort)
	const showDrafts = isDev && drafts.length > 0

	return (
		<div className={cn("flex flex-col gap-10", className)}>
			<BlogListFilters
				category={category}
				tags={availableTags}
				selectedTags={tags}
				sort={sort}
				onCategoryChange={setCategory}
				onTagToggle={toggleTag}
				onSortChange={setSort}
			/>

			{filteredPosts.length === 0 ? (
				<p className="text-muted-foreground text-sm">{BLOG_UI.emptyState}</p>
			) : (
				<div
					className="flex flex-col gap-10"
					aria-label={BLOG_UI.listAriaLabel}
				>
					{showDrafts ? (
						<section className="flex flex-col gap-6">
							{drafts.map((post) => (
								<BlogListPostRow
									key={post.slug}
									post={post}
									showDraftBadge
								/>
							))}
						</section>
					) : null}

					{yearEntries.map(([year, yearPosts]) => (
						<section key={year} className="flex flex-col gap-6">
							<h2 className="text-muted-foreground text-sm font-medium tabular-nums">
								{year}
							</h2>
							<div className="flex flex-col gap-6">
								{yearPosts.map((post) => (
									<BlogListPostRow key={post.slug} post={post} />
								))}
							</div>
						</section>
					))}
				</div>
			)}
		</div>
	)
}

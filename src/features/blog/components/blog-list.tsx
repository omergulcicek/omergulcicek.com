import { useEffect } from "react"
import { BlogEmptyState } from "@/features/blog/components/blog-empty-state"
import { BlogListFilters } from "@/features/blog/components/blog-list-filters"
import { BlogListPostRow } from "@/features/blog/components/blog-list-post-row"
import { BLOG_TAG_POOL, BLOG_UI } from "@/features/blog/constants/blog.constants"
import {
	applyBlogFilters,
	canClearBlogFilters,
	getAvailableTags,
	getSortedYearEntries,
	hasActiveBlogFilters,
	partitionDraftPosts,
	partitionFeaturedPosts
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
		tag,
		sort,
		query,
		setCategory,
		setSort,
		selectTag,
		clearFilters,
		clearSubFilters
	} = useBlogSearchParams()

	const availableTags = getAvailableTags(posts, BLOG_TAG_POOL, {
		category,
		query
	})

	useEffect(() => {
		if (tag && !availableTags.includes(tag)) {
			void clearSubFilters()
		}
	}, [availableTags, clearSubFilters, tag])
	const filteredPosts = applyBlogFilters(posts, {
		category,
		tag,
		query,
		sort
	})
	const filtersActive = hasActiveBlogFilters({ category, tag, query })
	const showClearFilters = canClearBlogFilters({ category, tag, query, sort })
	const showFeaturedSection = !filtersActive && sort === "newest"
	const { drafts, published } = partitionDraftPosts(filteredPosts)
	const { featured, regular } = partitionFeaturedPosts(published)
	const listPosts = showFeaturedSection ? regular : published
	const yearEntries = getSortedYearEntries(listPosts, sort)
	const showDrafts = isDev && drafts.length > 0
	const hasLeadSection =
		showDrafts || (showFeaturedSection && featured.length > 0)

	return (
		<div className={cn("flex flex-col gap-10", className)}>
			<BlogListFilters
				category={category}
				tags={availableTags}
				selectedTag={tag}
				sort={sort}
				showClearFilters={showClearFilters}
				onCategoryChange={setCategory}
				onTagSelect={selectTag}
				onSortChange={setSort}
				onClearFilters={clearFilters}
			/>

			{filteredPosts.length === 0 ? (
				<BlogEmptyState onClearFilters={clearFilters} />
			) : (
				<div
					className="flex flex-col gap-10"
					aria-label={BLOG_UI.listAriaLabel}
				>
					{showDrafts ? (
						<section className="flex flex-col gap-6">
							<h2 className="text-muted-foreground text-sm font-medium">
								{BLOG_UI.draftsHeading}
							</h2>
							<div className="flex flex-col gap-3">
								{drafts.map((post) => (
									<BlogListPostRow
										key={post.slug}
										post={post}
										showDraftBadge
									/>
								))}
							</div>
						</section>
					) : null}

					{showFeaturedSection && featured.length > 0 ? (
						<section className="flex flex-col gap-6">
							<h2 className="text-muted-foreground text-sm font-medium">
								{BLOG_UI.featuredHeading}
							</h2>
							<div className="flex flex-col gap-3">
								{featured.map((post) => (
									<BlogListPostRow key={post.slug} post={post} />
								))}
							</div>
						</section>
					) : null}

					{yearEntries.map(([year, yearPosts], index) => (
						<section
							key={year}
							className={cn(
								"flex flex-col gap-6",
								hasLeadSection || index > 0
									? "border-t border-border/60 pt-10"
									: undefined
							)}
						>
							<h2 className="text-muted-foreground text-sm font-medium tabular-nums">
								{year}
							</h2>
							<div className="flex flex-col gap-3">
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

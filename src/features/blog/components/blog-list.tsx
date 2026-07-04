import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { BlogEmptyState } from "@/features/blog/components/blog-empty-state"
import { BlogListFilters } from "@/features/blog/components/blog-list-filters"
import { BlogListPostRow } from "@/features/blog/components/blog-list-post-row"
import { BLOG_TAG_POOL, BLOG_UI } from "@/features/blog/constants/blog.constants"
import {
	applyBlogFilters,
	canClearBlogFilters,
	getAvailableTags,
	getSortedYearEntries,
	partitionDraftPosts
} from "@/features/blog/helpers/blog-helpers"
import { useBlogSearchParams } from "@/features/blog/hooks/use-blog-search-params"
import { AnchoredHeading } from "@/components/shared/anchored-heading"
import { pageSectionClass, pageStackGapClass } from "@/components/shared/prose.styles"
import type { BlogPost } from "@/features/blog/types/blog.types"
import { slugifyHeading } from "@/lib/slugify-heading"
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
	const showClearFilters = canClearBlogFilters({ category, tag, query, sort })
	const { drafts, published } = partitionDraftPosts(filteredPosts)
	const yearEntries = getSortedYearEntries(published, sort)
	const flatPublished = useMemo(
		() => yearEntries.flatMap(([, yearPosts]) => yearPosts),
		[yearEntries]
	)
	const [visiblePostCount, setVisiblePostCount] = useState<number>(
		BLOG_UI.initialVisiblePosts
	)

	useEffect(() => {
		setVisiblePostCount(BLOG_UI.initialVisiblePosts)
	}, [category, tag, query, sort])

	const visiblePublishedSlugs = useMemo(
		() => new Set(flatPublished.slice(0, visiblePostCount).map((post) => post.slug)),
		[flatPublished, visiblePostCount]
	)
	const hasMorePosts = flatPublished.length > visiblePostCount
	const showDrafts = isDev && drafts.length > 0
	const hasLeadSection = showDrafts

	return (
		<div className={cn("flex flex-col", pageStackGapClass, className)}>
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
					className={cn("flex flex-col", pageStackGapClass)}
					aria-label={BLOG_UI.listAriaLabel}
				>
					{showDrafts ? (
						<section className={pageSectionClass}>
							<AnchoredHeading
								as="h2"
								id={slugifyHeading(BLOG_UI.draftsHeading)}
								anchorLabel={`${BLOG_UI.draftsHeading} bölümüne git`}
								className="text-muted-foreground text-sm font-medium"
							>
								{BLOG_UI.draftsHeading}
							</AnchoredHeading>
							<div className="flex flex-col gap-3 overflow-visible">
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

					{yearEntries.map(([year, yearPosts], index) => {
						const visibleYearPosts = yearPosts.filter((post) =>
							visiblePublishedSlugs.has(post.slug)
						)

						if (visibleYearPosts.length === 0) {
							return null
						}

						return (
						<section
							key={year}
							className={cn(
								pageSectionClass,
								hasLeadSection || index > 0
									? "border-t border-border/60 pt-10"
									: undefined
							)}
						>
							<AnchoredHeading
								as="h2"
								id={year}
								anchorLabel={`${year} bölümüne git`}
								className="text-muted-foreground text-sm font-medium tabular-nums"
							>
								{year}
							</AnchoredHeading>
							<div className="flex flex-col gap-3 overflow-visible">
								{visibleYearPosts.map((post) => (
									<BlogListPostRow key={post.slug} post={post} />
								))}
							</div>
						</section>
						)
					})}

					{hasMorePosts ? (
						<div className="flex justify-center pt-2">
							<Button
								type="button"
								variant="outline"
								size="sm"
								onClick={() =>
									setVisiblePostCount(
										(count) => count + BLOG_UI.loadMorePosts
									)
								}
							>
								{BLOG_UI.loadMorePostsLabel}
							</Button>
						</div>
					) : null}
				</div>
			)}
		</div>
	)
}

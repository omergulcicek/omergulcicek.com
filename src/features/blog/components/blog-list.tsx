import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { BlogEmptyState } from "@/features/blog/components/blog-empty-state"
import { BlogListFilters } from "@/features/blog/components/blog-list-filters"
import { BlogListPostRow } from "@/features/blog/components/blog-list-post-row"
import { BLOG_UI } from "@/features/blog/constants/blog.constants"
import type { BlogSection } from "@/features/blog/constants/blog.constants"
import {
	applyBlogFilters,
	canClearBlogFilters,
	getAvailableTags,
	getFeaturedPosts,
	getSortedYearEntries,
	getTagCounts,
	partitionDraftPosts
} from "@/features/blog/helpers/blog-helpers"
import { useBlogSearchParams } from "@/features/blog/hooks/use-blog-search-params"
import { AnchoredHeading } from "@/components/shared/anchored-heading"
import { pageSectionClass, pageStackGapClass } from "@/components/shared/prose.styles"
import type { BlogPost } from "@/features/blog/types/blog.types"
import { slugifyHeading } from "@/lib/slugify-heading"
import { cn } from "@/lib/utils"

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
	const {
		tag,
		featured,
		sort,
		query,
		setSort,
		selectTag,
		toggleFeatured,
		clearFilters,
		clearTag
	} = useBlogSearchParams()
	const { category } = section

	const availableTags = getAvailableTags(posts, section.tagPool, {
		category,
		query
	})
	const tagCounts = getTagCounts(posts, { category, query })
	const featuredSlugs = new Set(
		getFeaturedPosts(posts, section.featuredSlugs).map((post) => post.slug)
	)

	useEffect(() => {
		if (tag && !availableTags.includes(tag)) {
			void clearTag()
		}
	}, [availableTags, clearTag, tag])
	const sectionFilteredPosts = applyBlogFilters(posts, {
		category,
		tag,
		query,
		sort
	})
	const filteredPosts = featured
		? sectionFilteredPosts.filter((post) => featuredSlugs.has(post.slug))
		: sectionFilteredPosts
	const showClearFilters =
		featured || canClearBlogFilters({ category: null, tag, query, sort })
	const { drafts, published } = partitionDraftPosts(filteredPosts)
	const yearEntries = getSortedYearEntries(published, sort)
	const flatPublished = useMemo(
		() => yearEntries.flatMap(([, yearPosts]) => yearPosts),
		[yearEntries]
	)
	const [visiblePostCount, setVisiblePostCount] = useState<number>(
		BLOG_UI.initialVisiblePosts
	)
	const [pendingYear, setPendingYear] = useState<string | null>(null)

	useEffect(() => {
		setVisiblePostCount(BLOG_UI.initialVisiblePosts)
	}, [tag, featured, query, sort])

	const visiblePublishedSlugs = useMemo(
		() => new Set(flatPublished.slice(0, visiblePostCount).map((post) => post.slug)),
		[flatPublished, visiblePostCount]
	)
	const hasMorePosts = flatPublished.length > visiblePostCount

	const jumpToYear = (year: string) => {
		const lastIndexOfYear = flatPublished.reduce(
			(lastIndex, post, index) =>
				post.publishedAt.startsWith(year) ? index : lastIndex,
			-1
		)

		setVisiblePostCount((count) => Math.max(count, lastIndexOfYear + 1))
		setPendingYear(year)
	}

	useEffect(() => {
		if (!pendingYear) {
			return
		}

		document.getElementById(pendingYear)?.scrollIntoView({ block: "start" })
		setPendingYear(null)
	}, [pendingYear, visiblePostCount])
	const showDrafts = isDev && drafts.length > 0

	return (
		<div className={cn("flex flex-col", pageStackGapClass, className)}>
			<BlogListFilters
				tags={availableTags}
				tagCounts={tagCounts}
				featuredCount={featuredSlugs.size}
				isFeaturedActive={featured}
				onFeaturedToggle={toggleFeatured}
				selectedTag={tag}
				sort={sort}
				showClearFilters={showClearFilters}
				onTagSelect={selectTag}
				onSortChange={setSort}
				onClearFilters={clearFilters}
			/>

			{yearEntries.length > 1 ? (
				<nav
					aria-label={BLOG_UI.yearNavAriaLabel}
					className="text-muted-foreground -mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs tabular-nums md:-mt-6"
				>
					{yearEntries.map(([year]) => (
						<button
							key={year}
							type="button"
							className="focus-link hover:text-foreground underline-offset-4 transition-colors hover:underline"
							onClick={() => jumpToYear(year)}
						>
							{year}
						</button>
					))}
				</nav>
			) : null}

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

					{yearEntries.map(([year, yearPosts]) => {
						const visibleYearPosts = yearPosts.filter((post) =>
							visiblePublishedSlugs.has(post.slug)
						)

						if (visibleYearPosts.length === 0) {
							return null
						}

						return (
						<section key={year} className={pageSectionClass}>
							<AnchoredHeading
								as="h2"
								id={year}
								anchorLabel={`${year} bölümüne git`}
								className="text-muted-foreground scroll-mt-24 font-mono text-sm font-medium tabular-nums md:scroll-mt-52"
							>
								{year}
							</AnchoredHeading>
							<div className="flex flex-col gap-3 overflow-visible">
								{visibleYearPosts.map((post) => (
									<BlogListPostRow
										key={post.slug}
										post={post}
										isFeatured={featuredSlugs.has(post.slug)}
									/>
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

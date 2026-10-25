import { useEffect } from "react"

import { useResettableState } from "@/hooks/use-resettable-state"

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
import type { BlogPost } from "@/features/blog/types/blog.types"

/**
 * Filtering, year grouping, "load more" paging and year jumps for a blog section list.
 * Filters live in the URL; the visible count resets whenever a filter changes.
 */
export function useBlogListView(section: BlogSection, posts: BlogPost[]) {
	const searchParams = useBlogSearchParams()
	const { tag, featured, sort, query, clearTag } = searchParams
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

	const sectionPosts = applyBlogFilters(posts, { category, tag, query, sort })
	const filteredPosts = featured
		? sectionPosts.filter((post) => featuredSlugs.has(post.slug))
		: sectionPosts
	const { drafts, published } = partitionDraftPosts(filteredPosts)
	const yearEntries = getSortedYearEntries(published, sort)
	const flatPublished = yearEntries.flatMap(([, yearPosts]) => yearPosts)

	const [visiblePostCount, setVisiblePostCount] = useResettableState<number>(
		BLOG_UI.initialVisiblePosts,
		[tag, featured, query, sort].join("|")
	)
	const visibleSlugs = new Set(
		flatPublished.slice(0, visiblePostCount).map((post) => post.slug)
	)
	const visibleYearEntries = yearEntries
		.map(([year, yearPosts]) => ({
			year,
			posts: yearPosts.filter((post) => visibleSlugs.has(post.slug))
		}))
		.filter((entry) => entry.posts.length > 0)

	return {
		...searchParams,
		availableTags,
		tagCounts,
		featuredSlugs,
		hasPosts: filteredPosts.length > 0,
		drafts,
		visibleYearEntries,
		hasMorePosts: flatPublished.length > visiblePostCount,
		showMorePosts: () =>
			setVisiblePostCount((count) => count + BLOG_UI.loadMorePosts),
		showClearFilters:
			featured || canClearBlogFilters({ category: null, tag, query, sort })
	}
}

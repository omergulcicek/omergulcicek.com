import type {
	BlogCategory,
	BlogCategoryFilter,
	BlogLocale,
	BlogPost,
	BlogSort
} from "@/features/blog/types/blog.types"
import { normalizeBlogSlug } from "@/features/blog/helpers/blog-slug"
import {
	BLOG_CATEGORY_LABELS,
	BLOG_SECTIONS
} from "@/features/blog/constants/blog.constants"
import type { BlogSection } from "@/features/blog/constants/blog.constants"

export function formatBlogDate(
	value: string,
	options?: { includeYear?: boolean }
) {
	const date = new Date(`${value}T12:00:00`)

	return new Intl.DateTimeFormat("tr-TR", {
		day: "numeric",
		month: "long",
		...(options?.includeYear ? { year: "numeric" } : {})
	}).format(date)
}

export function slugToRouteParam(slug: string) {
	return slug.replace(/^\//, "")
}

export function getBlogSection(category: BlogCategory): BlogSection {
	return BLOG_SECTIONS[category]
}

/** Technical posts resolve to /blog/{slug}, personal posts to /notlar/{slug}. */
export function getBlogPostPath(slug: string, category: BlogCategory): string {
	return `${BLOG_SECTIONS[category].path}/${slugToRouteParam(slug)}`
}

/** Markdown copy of a post for AI agents and readers (`/blog/<slug>.md`). */
export function getBlogPostMarkdownPath(slug: string, category: BlogCategory): string {
	return `${getBlogPostPath(slug, category)}.md`
}

/**
 * `lang` for post text that is not in the site's language (Turkish), so screen readers
 * switch pronunciation (WCAG 3.1.2). Turkish posts inherit `<html lang="tr">`.
 */
export function getBlogContentLang(locale: BlogLocale): BlogLocale | undefined {
	return locale === "tr" ? undefined : locale
}

export function getVisiblePosts(posts: BlogPost[], isDev: boolean) {
	if (isDev) {
		return posts
	}

	return posts.filter((post) => post.published)
}

export function partitionDraftPosts(posts: BlogPost[]) {
	const drafts = posts.filter((post) => !post.published)
	const published = posts.filter((post) => post.published)

	return { drafts, published }
}

export function filterPostsByCategory(
	posts: BlogPost[],
	category: BlogCategoryFilter
) {
	if (!category) {
		return posts
	}

	return posts.filter((post) => post.category === category)
}

export function filterPostsByTag(posts: BlogPost[], tag: string | null) {
	if (!tag) {
		return posts
	}

	return posts.filter((post) => post.tags.includes(tag))
}

export function filterPostsByQuery(posts: BlogPost[], query: string | null) {
	const normalizedQuery = query?.trim().toLowerCase()

	if (!normalizedQuery) {
		return posts
	}

	return posts.filter((post) => {
		const haystack = [
			post.title,
			post.description,
			...post.tags,
			BLOG_CATEGORY_LABELS[post.category]
		]
			.join(" ")
			.toLowerCase()

		return haystack.includes(normalizedQuery)
	})
}

export function hasActiveBlogFilters({
	category,
	tag,
	query
}: {
	category: BlogCategoryFilter
	tag: string | null
	query: string | null
}) {
	return (
		category !== null ||
		tag !== null ||
		(query?.trim().length ?? 0) > 0
	)
}

export function canClearBlogFilters({
	category,
	tag,
	query,
	sort
}: {
	category: BlogCategoryFilter
	tag: string | null
	query: string | null
	sort: BlogSort
}) {
	return hasActiveBlogFilters({ category, tag, query }) || sort !== "newest"
}

export function sortBlogPosts(posts: BlogPost[], sort: BlogSort) {
	const copy = [...posts]

	return copy.sort((left, right) => {
		const leftTime = new Date(left.publishedAt).getTime()
		const rightTime = new Date(right.publishedAt).getTime()

		return sort === "oldest" ? leftTime - rightTime : rightTime - leftTime
	})
}

export function groupPostsByYear(posts: BlogPost[]) {
	return posts.reduce<Record<string, BlogPost[]>>((groups, post) => {
		const year = post.publishedAt.slice(0, 4)
		const existing = groups[year] ?? []
		groups[year] = [...existing, post]
		return groups
	}, {})
}

export function getSortedYearEntries(
	posts: BlogPost[],
	sort: BlogSort
): [string, BlogPost[]][] {
	const groups = groupPostsByYear(posts)
	const years = Object.keys(groups).sort((left, right) =>
		sort === "oldest"
			? Number(left) - Number(right)
			: Number(right) - Number(left)
	)

	return years.flatMap((year): [string, BlogPost[]][] => {
		const yearPosts = groups[year]
		return yearPosts ? [[year, yearPosts]] : []
	})
}

function getTagUsageCounts(posts: BlogPost[]) {
	return posts.reduce<Map<string, number>>((counts, post) => {
		for (const tag of post.tags) {
			counts.set(tag, (counts.get(tag) ?? 0) + 1)
		}

		return counts
	}, new Map())
}

/** Returns published posts matching `slugs`, in the order the slugs are listed; unknown slugs are skipped. */
export function getFeaturedPosts(
	posts: BlogPost[],
	slugs: readonly string[]
): BlogPost[] {
	const postBySlug = new Map(
		posts.filter((post) => post.published).map((post) => [post.slug, post])
	)

	return slugs.flatMap((slug) => {
		const post = postBySlug.get(slug)
		return post ? [post] : []
	})
}

/** Tag usage counts within the current category and search query. */
export function getTagCounts(
	posts: BlogPost[],
	{
		category,
		query
	}: {
		category: BlogCategoryFilter
		query: string | null
	}
): Map<string, number> {
	return getTagUsageCounts(
		filterPostsByQuery(filterPostsByCategory(posts, category), query)
	)
}

/**
 * Orders a post's tags by their position in the category's tag pool, so the first tag a
 * reader sees does not depend on the order stored in the database. Tags outside the pool
 * keep their stored order after the pooled ones.
 */
export function sortTagsByPool(
	tags: readonly string[],
	tagPool: readonly string[]
) {
	const rank = (tag: string) => {
		const index = tagPool.indexOf(tag)

		return index === -1 ? tagPool.length : index
	}

	return [...tags].sort((left, right) => rank(left) - rank(right))
}

export function getAvailableTags(
	posts: BlogPost[],
	tagPool: readonly string[],
	{
		category,
		query
	}: {
		category: BlogCategoryFilter
		query: string | null
	}
) {
	const contextualPosts = filterPostsByQuery(
		filterPostsByCategory(posts, category),
		query
	)
	const tagUsageCounts = getTagUsageCounts(contextualPosts)
	const tagPoolOrder = new Map(tagPool.map((tag, index) => [tag, index]))

	return tagPool
		.filter((tag) => tagUsageCounts.has(tag))
		.sort((left, right) => {
			const countDifference =
				(tagUsageCounts.get(right) ?? 0) - (tagUsageCounts.get(left) ?? 0)

			if (countDifference !== 0) {
				return countDifference
			}

			return (tagPoolOrder.get(left) ?? 0) - (tagPoolOrder.get(right) ?? 0)
		})
}

export function applyBlogFilters(
	posts: BlogPost[],
	{
		category,
		tag,
		query,
		sort
	}: {
		category: BlogCategoryFilter
		tag: string | null
		query: string | null
		sort: BlogSort
	}
) {
	const filtered = filterPostsByQuery(
		filterPostsByTag(filterPostsByCategory(posts, category), tag),
		query
	)

	return sortBlogPosts(filtered, sort)
}

export type BlogNeighbour = Pick<BlogPost, "slug" | "title">

function toBlogNeighbour(post: BlogPost | undefined): BlogNeighbour | null {
	return post ? { slug: post.slug, title: post.title } : null
}

export function findBlogNeighbours(posts: BlogPost[], slug: string) {
	const normalizedSlug = normalizeBlogSlug(slug)
	const index = posts.findIndex((post) => post.slug === normalizedSlug)

	if (index === -1) {
		return { previous: null, next: null }
	}

	return {
		previous:
			toBlogNeighbour(posts[index - 1]),
		next:
			toBlogNeighbour(posts[index + 1])
	}
}

export function getSeriesPosts(posts: BlogPost[], series: string) {
	return posts
		.filter((post) => post.series === series)
		.sort((left, right) => (left.seriesOrder ?? 0) - (right.seriesOrder ?? 0))
}

export type BlogSeriesContext = {
	label: string
	previous: BlogNeighbour | null
	next: BlogNeighbour | null
	index: number
	total: number
}

export function findSeriesContext(
	posts: BlogPost[],
	post: BlogPost,
	seriesLabels: Record<string, string>
): BlogSeriesContext | null {
	if (!post.series) {
		return null
	}

	const seriesPosts = getSeriesPosts(posts, post.series)
	const index = seriesPosts.findIndex((entry) => entry.slug === post.slug)

	if (index === -1) {
		return null
	}

	return {
		label: seriesLabels[post.series] ?? post.series,
		previous:
			toBlogNeighbour(seriesPosts[index - 1]),
		next:
			toBlogNeighbour(seriesPosts[index + 1]),
		index: index + 1,
		total: seriesPosts.length
	}
}

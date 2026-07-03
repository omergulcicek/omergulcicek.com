import type {
	BlogCategoryFilter,
	BlogPost,
	BlogSort
} from "@/features/blog/types/blog.types"
import { normalizeBlogSlug } from "@/features/blog/helpers/blog-slug"
import { BLOG_CATEGORY_LABELS } from "@/features/blog/constants/blog.constants"

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

	return years.map((year) => [year, groups[year]])
}

function getTagUsageCounts(posts: BlogPost[]) {
	return posts.reduce<Map<string, number>>((counts, post) => {
		for (const tag of post.tags) {
			counts.set(tag, (counts.get(tag) ?? 0) + 1)
		}

		return counts
	}, new Map())
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

export function findBlogNeighbours(posts: BlogPost[], slug: string) {
	const normalizedSlug = normalizeBlogSlug(slug)
	const index = posts.findIndex((post) => post.slug === normalizedSlug)

	if (index === -1) {
		return { previous: null, next: null }
	}

	return {
		previous:
			index > 0
				? ({
						slug: posts[index - 1].slug,
						title: posts[index - 1].title
					} satisfies BlogNeighbour)
				: null,
		next:
			index < posts.length - 1
				? ({
						slug: posts[index + 1].slug,
						title: posts[index + 1].title
					} satisfies BlogNeighbour)
				: null
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
			index > 0
				? ({
						slug: seriesPosts[index - 1].slug,
						title: seriesPosts[index - 1].title
					} satisfies BlogNeighbour)
				: null,
		next:
			index < seriesPosts.length - 1
				? ({
						slug: seriesPosts[index + 1].slug,
						title: seriesPosts[index + 1].title
					} satisfies BlogNeighbour)
				: null,
		index: index + 1,
		total: seriesPosts.length
	}
}

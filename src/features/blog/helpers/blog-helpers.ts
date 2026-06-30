import type {
	BlogCategoryFilter,
	BlogPost,
	BlogSort
} from "@/features/blog/types/blog.types"

export function formatBlogDate(value: string) {
	const [year, month, day] = value.split("-")
	return `${day}/${month}/${year.slice(2)}`
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

export function filterPostsByTags(posts: BlogPost[], tags: string[]) {
	if (tags.length === 0) {
		return posts
	}

	return posts.filter((post) => tags.every((tag) => post.tags.includes(tag)))
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

export function getAvailableTags(posts: BlogPost[], tagPool: readonly string[]) {
	const usedTags = new Set(posts.flatMap((post) => post.tags))

	return tagPool.filter((tag) => usedTags.has(tag))
}

export function applyBlogFilters(
	posts: BlogPost[],
	{
		category,
		tags,
		sort
	}: {
		category: BlogCategoryFilter
		tags: string[]
		sort: BlogSort
	}
) {
	const filtered = filterPostsByTags(
		filterPostsByCategory(posts, category),
		tags
	)

	return sortBlogPosts(filtered, sort)
}

import type { BlogPost } from "@/types/blog-type"
import type { SortOptionType } from "@/types/filter-sort-type"

export function getValidatedSortOption(input?: string): SortOptionType {
	switch (input) {
		case "date-asc":
		case "date-desc":
		case "title-asc":
		case "title-desc":
			return input
		default:
			return "date-desc"
	}
}

export function getUniqueSortedTags(posts: BlogPost[]): string[] {
	return Array.from(
		new Set(
			posts.flatMap((p) => (p.metadata.tags as string[] | undefined) ?? [])
		)
	).sort((a, b) => a.localeCompare(b))
}

export function filterPostsByTag(posts: BlogPost[], tag?: string): BlogPost[] {
	if (!tag) return posts
	return posts.filter((post) =>
		(post.metadata.tags as string[] | undefined)?.includes(tag)
	)
}

export function sortPosts(posts: BlogPost[], sort: SortOptionType): BlogPost[] {
	const copy = [...posts]
	return copy.sort((a, b) => {
		switch (sort) {
			case "date-asc":
				return (
					new Date(a.metadata.createdAt).getTime() -
					new Date(b.metadata.createdAt).getTime()
				)
			case "title-asc":
				return a.metadata.title.localeCompare(b.metadata.title)
			case "title-desc":
				return b.metadata.title.localeCompare(a.metadata.title)
			case "date-desc":
			default:
				return (
					new Date(b.metadata.createdAt).getTime() -
					new Date(a.metadata.createdAt).getTime()
				)
		}
	})
}

import type { BlogNeighbour } from "@/features/blog/helpers/blog-helpers"

export type BlogPostNeighbours = {
	previous: BlogNeighbour | null
	next: BlogNeighbour | null
}

type BlogPostNeighbourRow = {
	slug: string
	title: string
}

export function mapBlogNeighbourRow(row: BlogPostNeighbourRow): BlogNeighbour {
	const slug = row.slug.startsWith("/") ? row.slug : `/${row.slug}`

	return {
		slug,
		title: row.title
	}
}

export function resolveBlogNeighboursFromAnchor(
	previousRow: BlogPostNeighbourRow | null,
	nextRow: BlogPostNeighbourRow | null
): BlogPostNeighbours {
	return {
		previous: previousRow ? mapBlogNeighbourRow(previousRow) : null,
		next: nextRow ? mapBlogNeighbourRow(nextRow) : null
	}
}

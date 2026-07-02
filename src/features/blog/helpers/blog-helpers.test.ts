import { describe, expect, it } from "vitest"

import {
	applyBlogFilters,
	filterPostsByCategory,
	findBlogNeighbours,
	findSeriesContext,
	getSeriesPosts,
	sortBlogPosts
} from "@/features/blog/helpers/blog-helpers"
import type { BlogPost } from "@/features/blog/types/blog.types"

const samplePosts: BlogPost[] = [
	{
		slug: "/post-a",
		title: "Post A",
		description: "A",
		category: "technical",
		tags: ["React"],
		locale: "tr",
		published: true,
		publishedAt: "2026-01-02",
		series: "site-yenileme",
		seriesOrder: 2
	},
	{
		slug: "/post-b",
		title: "Post B",
		description: "B",
		category: "personal",
		tags: ["Kitap"],
		locale: "tr",
		published: true,
		publishedAt: "2026-01-03",
		series: "site-yenileme",
		seriesOrder: 1
	},
	{
		slug: "/post-c",
		title: "Post C",
		description: "C",
		category: "technical",
		tags: ["CSS"],
		locale: "tr",
		published: false,
		publishedAt: "2026-01-01"
	}
]

describe("blog helpers", () => {
	it("sorts posts newest first by default", () => {
		const sorted = sortBlogPosts(samplePosts, "newest")

		expect(sorted.map((post) => post.slug)).toEqual([
			"/post-b",
			"/post-a",
			"/post-c"
		])
	})

	it("filters posts by category", () => {
		const filtered = filterPostsByCategory(samplePosts, "technical")

		expect(filtered).toHaveLength(2)
	})

	it("finds chronological neighbours", () => {
		const neighbours = findBlogNeighbours(
			sortBlogPosts(samplePosts.filter((post) => post.published), "newest"),
			"/post-a"
		)

		expect(neighbours.previous?.slug).toBe("/post-b")
		expect(neighbours.next).toBeNull()
	})

	it("orders series posts by seriesOrder", () => {
		const seriesPosts = getSeriesPosts(samplePosts, "site-yenileme")

		expect(seriesPosts.map((post) => post.slug)).toEqual([
			"/post-b",
			"/post-a"
		])
	})

	it("builds series navigation context", () => {
		const post = samplePosts[0]
		const context = findSeriesContext(samplePosts, post, {
			"site-yenileme": "Site Yenileme"
		})

		expect(context).toMatchObject({
			label: "Site Yenileme",
			index: 2,
			total: 2
		})
		expect(context?.previous?.slug).toBe("/post-b")
	})

	it("applies combined blog filters", () => {
		const filtered = applyBlogFilters(samplePosts, {
			category: "technical",
			tag: null,
			query: "Post A",
			sort: "newest"
		})

		expect(filtered).toHaveLength(1)
		expect(filtered[0]?.slug).toBe("/post-a")
	})
})

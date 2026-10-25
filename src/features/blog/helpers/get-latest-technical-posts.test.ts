import { describe, expect, it } from "vitest"

import type { BlogPost } from "@/features/blog/types/blog.types"
import { getLatestTechnicalPosts } from "@/features/blog/helpers/get-latest-technical-posts"

function createPost(slug: string, category: BlogPost["category"]): BlogPost {
	return {
		slug,
		title: slug,
		description: slug,
		category,
		tags: [],
		locale: "tr",
		published: true,
		publishedAt: "2026-01-01",
		canonicalUrl: `https://omergulcicek.com/blog${slug}`
	}
}

describe("getLatestTechnicalPosts", () => {
	it("returns the newest three technical posts and skips personal ones", () => {
		const posts = [
			createPost("/t1", "technical"),
			createPost("/p1", "personal"),
			createPost("/t2", "technical"),
			createPost("/p2", "personal"),
			createPost("/t3", "technical"),
			createPost("/t4", "technical")
		]

		expect(getLatestTechnicalPosts(posts).map((post) => post.slug)).toEqual([
			"/t1",
			"/t2",
			"/t3"
		])
	})
})

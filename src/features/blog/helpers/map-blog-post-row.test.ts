import { describe, expect, it } from "vitest"

import { mapBlogPostListRow } from "@/features/blog/helpers/map-blog-post-row"
import type { BlogPostListRow } from "@/features/blog/schemas/blog-post-row.schema"

const baseRow: BlogPostListRow = {
	slug: "/ornek-yazi",
	title: "Örnek Yazı",
	description: "Örnek açıklama.",
	category: "technical",
	tags: [],
	locale: "tr",
	medium_url: null,
	interactive: false,
	published: true,
	published_at: "2026-10-28 12:00:00+00"
}

describe("mapBlogPostListRow", () => {
	it("shows technical tags in tag pool order whatever order the row stores", () => {
		const post = mapBlogPostListRow({
			...baseRow,
			tags: ["Site Yenileme", "Frontend", "TanStack"]
		})

		expect(post.tags).toEqual(["TanStack", "Frontend", "Site Yenileme"])
	})

	it("uses the personal pool for notes", () => {
		const post = mapBlogPostListRow({
			...baseRow,
			category: "personal",
			tags: ["Proje", "Deneyim"]
		})

		expect(post.tags).toEqual(["Deneyim", "Proje"])
	})
})

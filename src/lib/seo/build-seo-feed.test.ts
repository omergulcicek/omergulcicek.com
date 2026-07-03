import { describe, expect, it } from "vitest"

import { buildRssFeedXml } from "@/lib/seo/build-rss-feed-xml"
import { buildSitemapXml } from "@/lib/seo/build-sitemap-xml"
import type { BlogPost } from "@/features/blog/types/blog.types"

const samplePost: BlogPost = {
	slug: "/sample-post",
	title: "Sample Post",
	description: "Sample description",
	category: "technical",
	tags: ["React"],
	locale: "tr",
	published: true,
	publishedAt: "2026-01-15",
	canonicalUrl: "https://omergulcicek.com/blog/sample-post"
}

describe("buildSitemapXml", () => {
	it("includes static pages and published blog posts", () => {
		const xml = buildSitemapXml([samplePost])

		expect(xml).toContain("https://omergulcicek.com/blog")
		expect(xml).toContain("https://omergulcicek.com/blog/sample-post")
		expect(xml).toContain("<lastmod>2026-01-15</lastmod>")
	})

	it("excludes unpublished posts", () => {
		const xml = buildSitemapXml([
			{ ...samplePost, published: false, slug: "/draft-post" }
		])

		expect(xml).not.toContain("/blog/draft-post")
	})
})

describe("buildRssFeedXml", () => {
	it("includes published posts only", () => {
		const xml = buildRssFeedXml([
			samplePost,
			{ ...samplePost, published: false, slug: "/draft", title: "Draft" }
		])

		expect(xml).toContain("<title>Sample Post</title>")
		expect(xml).not.toContain("<title>Draft</title>")
		expect(xml).toContain('rel="self"')
	})
})

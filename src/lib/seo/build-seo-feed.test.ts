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

	it("adds hreflang alternates for translated posts only", () => {
		const xml = buildSitemapXml([
			{ ...samplePost, slug: "/nizam-nextjs-16-boilerplate" },
			samplePost
		])

		expect(xml).toContain(
			'<xhtml:link rel="alternate" hreflang="en" href="https://omergulcicek.com/blog/nizam-nextjs-16-boilerplate-en" />'
		)
		expect(xml.match(/xhtml:link/g)).toHaveLength(3)
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
		expect(xml).toContain("<enclosure")
		expect(xml).toContain("https://omergulcicek.com/og/blog/sample-post")
	})
})

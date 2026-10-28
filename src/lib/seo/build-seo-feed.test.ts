import { describe, expect, it } from "vitest"

import { buildRssFeedXml } from "@/lib/seo/build-rss-feed-xml"
import { buildSitemapXml } from "@/lib/seo/build-sitemap-xml"
import { BLOG_SECTIONS } from "@/features/blog"
import type { BlogPost } from "@/features/blog"

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

	it("does not list the removed services page", () => {
		const xml = buildSitemapXml([])

		expect(xml).not.toContain("/services")
		expect(xml).toContain("https://omergulcicek.com/journey</loc>")
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
		const xml = buildRssFeedXml(
			[
				samplePost,
				{ ...samplePost, published: false, slug: "/draft", title: "Draft" }
			],
			BLOG_SECTIONS.technical
		)

		expect(xml).toContain("<title>Sample Post</title>")
		expect(xml).not.toContain("<title>Draft</title>")
		expect(xml).toContain('rel="self"')
		expect(xml).toContain("<enclosure")
		expect(xml).toContain("https://omergulcicek.com/og/blog/sample-post")
	})

	it("keeps personal posts in the Notlar feed", () => {
		const posts = [
			samplePost,
			{ ...samplePost, category: "personal" as const, slug: "/note", title: "Note" }
		]
		const blogXml = buildRssFeedXml(posts, BLOG_SECTIONS.technical)
		const notesXml = buildRssFeedXml(posts, BLOG_SECTIONS.personal)

		expect(blogXml).not.toContain("<title>Note</title>")
		expect(notesXml).toContain("<link>https://omergulcicek.com/notlar/note</link>")
		expect(notesXml).not.toContain("<title>Sample Post</title>")
		expect(notesXml).toContain("https://omergulcicek.com/notlar/feed.xml")
	})

	it("adds the full post as content:encoded when the HTML is given", () => {
		const xml = buildRssFeedXml(
			[samplePost],
			BLOG_SECTIONS.technical,
			new Map([["/sample-post", "<p>Tam metin ]]> burada</p>"]])
		)

		expect(xml).toContain('xmlns:content="http://purl.org/rss/1.0/modules/content/"')
		expect(xml).toContain(
			"<content:encoded><![CDATA[<p>Tam metin ]]]]><![CDATA[> burada</p>]]></content:encoded>"
		)
	})

	it("leaves content:encoded out for posts without HTML", () => {
		const xml = buildRssFeedXml([samplePost], BLOG_SECTIONS.technical, new Map())

		expect(xml).not.toContain("<content:encoded>")
	})
})

describe("buildSitemapXml sections", () => {
	it("lists personal posts under /notlar", () => {
		const xml = buildSitemapXml([
			{ ...samplePost, category: "personal", slug: "/note" }
		])

		expect(xml).toContain("https://omergulcicek.com/notlar/note</loc>")
		expect(xml).toContain("https://omergulcicek.com/notlar</loc>")
		expect(xml).not.toContain("https://omergulcicek.com/blog/note</loc>")
	})
})

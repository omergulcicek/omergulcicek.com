import { describe, expect, it } from "vitest"

import { enrichBlogContentHtml } from "@/features/blog/helpers/blog-content-html"
import {
	buildBlogCarouselResponsiveImage,
	buildBlogProseResponsiveImage
} from "@/lib/media/build-blog-responsive-image"

describe("buildBlogProseResponsiveImage", () => {
	it("returns the original src for external images", () => {
		const image = buildBlogProseResponsiveImage(
			"https://example.com/image.png"
		)

		expect(image).toEqual({
			src: "https://example.com/image.png"
		})
	})
})

describe("buildBlogCarouselResponsiveImage", () => {
	it("returns the original src for external images", () => {
		const image = buildBlogCarouselResponsiveImage(
			"https://example.com/image.png"
		)

		expect(image).toEqual({
			src: "https://example.com/image.png"
		})
	})
})

describe("enrichBlogContentHtml image rewriting", () => {
	it("rewrites blog image src paths", () => {
		const enriched = enrichBlogContentHtml(
			'<p><img src="/blog/2026/07-01/apex.jpg" alt="Apex" /></p>'
		)

		expect(enriched.contentHtml).toContain('src="/blog/2026/07-01/apex.jpg"')
		expect(enriched.contentHtml).toContain('loading="lazy"')
		expect(enriched.contentHtml).toContain('decoding="async"')
		expect(enriched.contentHtml).toContain("blog-image-figure")
	})

	it("preserves an explicit loading attribute from MDX", () => {
		const enriched = enrichBlogContentHtml(
			'<p><img src="/blog/2026/07-01/apex.jpg" alt="Apex" loading="eager" /></p>'
		)

		expect(enriched.contentHtml).toContain('loading="eager"')
		expect(enriched.contentHtml).not.toContain('loading="lazy"')
	})
})

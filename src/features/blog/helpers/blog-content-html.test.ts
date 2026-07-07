import { describe, expect, it } from "vitest"

import { enrichBlogContentHtml } from "@/features/blog/helpers/blog-content-html"
import { compileMdxToHtml } from "@/features/blog/lib/compile-mdx-content"

describe("enrichBlogContentHtml external links", () => {
	it("adds target and rel to external http(s) links", () => {
		const { contentHtml } = enrichBlogContentHtml(
			'<p><a href="https://tkdodo.eu/blog/example">TkDodo</a></p>'
		)

		expect(contentHtml).toContain('target="_blank"')
		expect(contentHtml).toContain('rel="noopener noreferrer"')
	})

	it("leaves internal relative links unchanged", () => {
		const { contentHtml } = enrichBlogContentHtml(
			'<p><a href="/blog/site-yenileme">Seri</a></p>'
		)

		expect(contentHtml).not.toContain('target="_blank"')
		expect(contentHtml).not.toContain("noopener")
	})

	it("merges noopener and noreferrer into an existing rel attribute", () => {
		const { contentHtml } = enrichBlogContentHtml(
			'<p><a href="https://example.com" rel="nofollow">Example</a></p>'
		)

		expect(contentHtml).toContain('target="_blank"')
		expect(contentHtml).toContain('rel="nofollow noopener noreferrer"')
	})

	it("does not duplicate target when already set", () => {
		const { contentHtml } = enrichBlogContentHtml(
			'<p><a href="https://example.com" target="_blank" rel="noopener noreferrer">Example</a></p>'
		)

		expect(contentHtml.match(/target="_blank"/g)).toHaveLength(1)
	})

	it("enriches markdown links after MDX compile", async () => {
		const html = await compileMdxToHtml(
			"[TkDodo](https://tkdodo.eu/blog/tan-stack-router-and-query)"
		)
		const { contentHtml } = enrichBlogContentHtml(html)

		expect(contentHtml).toContain('href="https://tkdodo.eu/blog/tan-stack-router-and-query"')
		expect(contentHtml).toContain('target="_blank"')
		expect(contentHtml).toContain('rel="noopener noreferrer"')
	})
})

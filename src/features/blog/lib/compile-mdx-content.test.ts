import { describe, expect, it } from "vitest"

import { compileMdxToHtml } from "@/features/blog/lib/compile-mdx-content"
import { enrichBlogContentHtml } from "@/features/blog/helpers/blog-content-html"

describe("compileMdxToHtml", () => {
	it("compiles markdown and custom notice components", async () => {
		const html = await compileMdxToHtml(
			`<BlogNotice title="Test" variant="info">Sandbox içeriği</BlogNotice>`
		)
		const enriched = enrichBlogContentHtml(html)

		expect(enriched.contentHtml).toContain("Sandbox içeriği")
		expect(enriched.contentHtml).toContain("Test")
	})

	it("compiles markdown tables", async () => {
		const html = await compileMdxToHtml(`| Başlık | Değer |
| --- | --- |
| Durum | OK |`)
		const enriched = enrichBlogContentHtml(html)

		expect(enriched.contentHtml).toContain("Durum")
		expect(enriched.contentHtml).toContain("OK")
	})
})

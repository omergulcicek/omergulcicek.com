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

	it("renders ViraMaskDemo mount for interactive posts", async () => {
		const html = await compileMdxToHtml(`## Demo

<ViraMaskDemo />
`)

		expect(html).toContain('data-blog-widget="vira-mask-demo"')
		expect(html).toContain("blog-mask-interactive-demo")
	})

	it("renders ViraPasswordDemo mount for interactive posts", async () => {
		const html = await compileMdxToHtml(`## Demo

<ViraPasswordDemo />
`)

		expect(html).toContain('data-blog-widget="vira-password-demo"')
		expect(html).toContain("blog-password-interactive-demo")
	})
})

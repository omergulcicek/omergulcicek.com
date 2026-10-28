import { describe, expect, it } from "vitest"

import { convertMdxToMarkdown } from "@/features/blog/lib/mdx-to-markdown"

const SITE_URL = "https://omergulcicek.com"

function convert(source: string) {
	return convertMdxToMarkdown(source, { siteUrl: SITE_URL })
}

describe("convertMdxToMarkdown", () => {
	it("keeps Markdown and code blocks exactly as written", () => {
		const source = [
			"Giriş **kalın** ve `kod`.",
			"",
			"## Başlık",
			"",
			"```tsx",
			"export function App() {",
			"\treturn <ViraMaskDemo />",
			"}",
			"```",
			"",
			"| A | B |",
			"| - | - |",
			"| 1 | 2 |"
		].join("\n")

		expect(convert(source)).toBe(source)
	})

	it("drops imports and interactive widgets", () => {
		const source = [
			'import { Chart } from "./chart"',
			"",
			"Önce metin.",
			"",
			'<ViraMaskDemo variant="card" />',
			"",
			"Sonra metin."
		].join("\n")

		expect(convert(source)).toBe("Önce metin.\n\nSonra metin.")
	})

	it("turns notices with inline HTML into a Markdown blockquote", () => {
		const source = [
			'<BlogNotice title="Türkçe sürüm" variant="info">',
			'\tThis is <strong>also</strong> in Turkish:{" "}',
			'\t<a href="/blog/kaide">Kaide</a>.',
			"</BlogNotice>",
			"",
			"Body."
		].join("\n")

		expect(convert(source)).toBe(
			[
				"> **Türkçe sürüm**",
				">",
				"> This is **also** in Turkish:",
				"> [Kaide](https://omergulcicek.com/blog/kaide).",
				"",
				"Body."
			].join("\n")
		)
	})

	it("makes root-relative links and images absolute outside code", () => {
		const source = [
			"[Seri](/blog/site-yenileme) ve ![Kapak](/blog/2026/kapak.webp)",
			"",
			"```md",
			"[Örnek](/yerinde-kalir)",
			"```"
		].join("\n")

		expect(convert(source)).toBe(
			[
				"[Seri](https://omergulcicek.com/blog/site-yenileme) ve ![Kapak](https://omergulcicek.com/blog/2026/kapak.webp)",
				"",
				"```md",
				"[Örnek](/yerinde-kalir)",
				"```"
			].join("\n")
		)
	})
})

import { describe, expect, it } from "vitest"

import { buildLlmsFullTxt, buildLlmsTxt } from "@/lib/seo/build-llms-txt"

import type { BlogPost } from "@/features/blog"

const technicalPost: BlogPost = {
	slug: "/canonical-ve-yonlendirme",
	title: "Canonical ve Yönlendirme",
	description: "Lighthouse'ın görmediği SEO hatası.",
	category: "technical",
	tags: ["Frontend"],
	locale: "tr",
	published: true,
	publishedAt: "2026-10-26"
}

const englishPost: BlogPost = {
	...technicalPost,
	slug: "/kaide-ai-native-architecture-kit",
	title: "Kaide: AI-Native Architecture Kit",
	locale: "en",
	publishedAt: "2026-02-14"
}

const note: BlogPost = {
	...technicalPost,
	slug: "/satranc-blitz-deneyimim",
	title: "Satranç: Blitz Deneyimim",
	category: "personal",
	publishedAt: "2026-07-03"
}

describe("buildLlmsTxt", () => {
	it("links every published post to its Markdown copy, newest first", () => {
		const text = buildLlmsTxt([
			englishPost,
			technicalPost,
			{ ...technicalPost, slug: "/taslak", title: "Taslak", published: false }
		])

		expect(text).toContain(
			"- [Canonical ve Yönlendirme](https://omergulcicek.com/blog/canonical-ve-yonlendirme.md): Lighthouse'ın görmediği SEO hatası. (2026-10-26)"
		)
		expect(text).toContain("(2026-02-14, en)")
		expect(text.indexOf("Canonical ve Yönlendirme")).toBeLessThan(
			text.indexOf("Kaide: AI-Native")
		)
		expect(text).not.toContain("Taslak")
	})

	it("starts with the llms.txt title and summary and lists notes as optional", () => {
		const text = buildLlmsTxt([technicalPost, note])

		expect(text.startsWith("# Ömer Gülçiçek")).toBe(true)
		expect(text).toContain("\n> ")
		expect(text).toContain("https://omergulcicek.com/llms-full.txt")
		expect(text.indexOf("## Optional")).toBeLessThan(
			text.indexOf("https://omergulcicek.com/notlar/satranc-blitz-deneyimim.md")
		)
	})
})

describe("buildLlmsFullTxt", () => {
	it("includes each post's metadata and Markdown body", () => {
		const text = buildLlmsFullTxt([
			{ post: technicalPost, body: "Sitemin Lighthouse SEO puanı **100**'dü." }
		])

		expect(text).toContain("1 technical posts")
		expect(text).toContain("# Canonical ve Yönlendirme")
		expect(text).toContain(
			"URL: https://omergulcicek.com/blog/canonical-ve-yonlendirme\n"
		)
		expect(text).toContain("Sitemin Lighthouse SEO puanı **100**'dü.")
	})
})

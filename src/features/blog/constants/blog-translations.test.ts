import { describe, expect, it } from "vitest"

import {
	BLOG_TRANSLATION_PAIRS,
	getBlogTranslationAlternates
} from "@/features/blog/constants/blog-translations.constants"

describe("getBlogTranslationAlternates", () => {
	it("returns the same alternates for both sides of a pair", () => {
		const [{ tr, en }] = BLOG_TRANSLATION_PAIRS

		expect(getBlogTranslationAlternates(tr)).toEqual(
			getBlogTranslationAlternates(en)
		)
		expect(getBlogTranslationAlternates(tr)).toEqual([
			{ hreflang: "tr", slug: tr },
			{ hreflang: "en", slug: en },
			{ hreflang: "x-default", slug: tr }
		])
	})

	it("returns null for posts without a translation", () => {
		expect(getBlogTranslationAlternates("/virastack-mask")).toBeNull()
	})

	it("does not reuse a slug across pairs", () => {
		const slugs = BLOG_TRANSLATION_PAIRS.flatMap(({ tr, en }) => [tr, en])

		expect(new Set(slugs).size).toBe(slugs.length)
	})
})

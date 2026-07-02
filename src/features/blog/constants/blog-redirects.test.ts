import { describe, expect, it } from "vitest"

import {
	BLOG_SLUG_REDIRECTS,
	resolveBlogSlugRedirect
} from "@/features/blog/constants/blog-redirects.constants"

describe("blog slug redirects", () => {
	it("resolves known legacy slugs", () => {
		expect(
			resolveBlogSlugRedirect("/react-ai-stack-2026")
		).toBe("/2026-icin-react-ve-yapay-zeka-stacki")
	})

	it("normalizes slugs without a leading slash", () => {
		expect(resolveBlogSlugRedirect("react-ai-stack-2026")).toBe(
			"/2026-icin-react-ve-yapay-zeka-stacki"
		)
	})

	it("returns the original slug when no redirect exists", () => {
		expect(resolveBlogSlugRedirect("/css-object-view-box")).toBe(
			"/css-object-view-box"
		)
	})

	it("keeps redirect map keys canonical", () => {
		for (const [legacySlug, canonicalSlug] of Object.entries(
			BLOG_SLUG_REDIRECTS
		)) {
			expect(legacySlug.startsWith("/")).toBe(true)
			expect(canonicalSlug.startsWith("/")).toBe(true)
		}
	})
})

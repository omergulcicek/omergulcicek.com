import { describe, expect, it } from "vitest"

import { resolvePageOgImageUrl } from "@/lib/seo/resolve-page-og-image-url"

describe("resolvePageOgImageUrl", () => {
	it("returns dynamic OG route for static pages", () => {
		expect(resolvePageOgImageUrl({ pageKey: "home" })).toBe(
			"https://omergulcicek.com/og/page/home"
		)
		expect(resolvePageOgImageUrl({ pageKey: "about" })).toBe(
			"https://omergulcicek.com/og/page/about"
		)
	})
})

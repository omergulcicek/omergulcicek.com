import { describe, expect, it } from "vitest"

import { resolveBlogOgImageUrl } from "@/lib/seo/resolve-blog-og-image-url"

describe("resolveBlogOgImageUrl", () => {
	it("returns dynamic OG route when cover image is missing", () => {
		expect(
			resolveBlogOgImageUrl({
				slug: "/react-ai-stack-2026"
			})
		).toBe("https://omergulcicek.com/og/blog/react-ai-stack-2026")
	})

	it("returns resolved cover image when provided", () => {
		expect(
			resolveBlogOgImageUrl({
				slug: "/sample-post",
				coverImage: "/blog/2026/sample.png"
			})
		).toBe("https://omergulcicek.com/blog/2026/sample.png")
	})
})

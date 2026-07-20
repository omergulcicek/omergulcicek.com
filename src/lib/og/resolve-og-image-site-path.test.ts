import { describe, expect, it } from "vitest"

import { resolveOgImageSitePath } from "@/lib/og/resolve-og-image-site-path"

describe("resolveOgImageSitePath", () => {
	it("returns hostname for home path", () => {
		expect(resolveOgImageSitePath("/")).toBe("omergulcicek.com")
	})

	it("returns hostname with path for nested pages", () => {
		expect(resolveOgImageSitePath("/about")).toBe("omergulcicek.com/about")
		expect(resolveOgImageSitePath("/blog")).toBe("omergulcicek.com/blog")
	})
})

import { describe, expect, it } from "vitest"

import { buildBlogPostHead } from "@/lib/seo/build-page-head"

describe("buildBlogPostHead", () => {
	it("adds language alternates, the Markdown copy and the post's Open Graph locale", () => {
		const head = buildBlogPostHead({
			title: "Kaide: AI-Native Architecture Kit",
			description: "Architecture kit",
			path: "/blog/kaide-ai-native-architecture-kit",
			ogLocale: "en_US",
			ogLocaleAlternates: ["tr_TR"],
			alternateLinks: [
				{
					type: "text/markdown",
					href: "/blog/kaide-ai-native-architecture-kit.md"
				},
				{ hrefLang: "tr", href: "/blog/kaide-yapay-zeka-odakli-mimari-kit" },
				{ hrefLang: "en", href: "/blog/kaide-ai-native-architecture-kit" }
			]
		})

		expect(head.links).toContainEqual({
			rel: "alternate",
			hrefLang: "tr",
			href: "https://omergulcicek.com/blog/kaide-yapay-zeka-odakli-mimari-kit"
		})
		expect(head.links).toContainEqual({
			rel: "alternate",
			type: "text/markdown",
			href: "https://omergulcicek.com/blog/kaide-ai-native-architecture-kit.md"
		})
		expect(head.meta).toContainEqual({
			property: "og:locale",
			content: "en_US"
		})
		expect(head.meta).toContainEqual({
			property: "og:locale:alternate",
			content: "tr_TR"
		})
	})

	it("keeps the Turkish Open Graph locale by default", () => {
		const head = buildBlogPostHead({
			title: "Canonical",
			description: "SEO",
			path: "/blog/canonical-ve-yonlendirme"
		})

		expect(head.meta).toContainEqual({
			property: "og:locale",
			content: "tr_TR"
		})
		expect(head.links).toEqual([
			{
				rel: "canonical",
				href: "https://omergulcicek.com/blog/canonical-ve-yonlendirme"
			}
		])
	})
})

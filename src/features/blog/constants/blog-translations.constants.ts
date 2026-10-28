import type { BlogLocale } from "@/features/blog/types/blog.types"

export type BlogTranslationPair = Record<BlogLocale, string>

/**
 * Posts published in both languages. Each pair links the Turkish and English versions
 * so their pages can point at each other with hreflang alternates.
 */
export const BLOG_TRANSLATION_PAIRS = [
	{
		tr: "/kaide-yapay-zeka-odakli-mimari-kit",
		en: "/kaide-ai-native-architecture-kit"
	},
	{
		tr: "/makineler-icin-dokumantasyon-llms-txt",
		en: "/documentation-for-machines-llms-txt"
	},
	{
		tr: "/tanstack-start-injected-head-scripts-hatasi-cozumu",
		en: "/tanstack-start-resolving-the-tanstack-start-injected-head-scripts-error"
	},
	{
		tr: "/nizam-nextjs-16-boilerplate",
		en: "/nizam-nextjs-16-boilerplate-en"
	}
] as const satisfies readonly BlogTranslationPair[]

export function findBlogTranslationPair(
	slug: string
): BlogTranslationPair | null {
	return (
		BLOG_TRANSLATION_PAIRS.find(
			(pair) => pair.tr === slug || pair.en === slug
		) ?? null
	)
}

/** Open Graph locale per post language. */
export const BLOG_OG_LOCALES = {
	tr: "tr_TR",
	en: "en_US"
} as const satisfies Record<BlogLocale, string>

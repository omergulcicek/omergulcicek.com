/** TR/EN article pairs. Both slugs must exist in `blog_posts`. */
export const BLOG_TRANSLATION_PAIRS = [
	{
		tr: "/nizam-nextjs-16-boilerplate",
		en: "/nizam-nextjs-16-boilerplate-en"
	},
	{
		tr: "/tanstack-start-injected-head-scripts-hatasi-cozumu",
		en: "/tanstack-start-resolving-the-tanstack-start-injected-head-scripts-error"
	},
	{
		tr: "/makineler-icin-dokumantasyon-llms-txt",
		en: "/documentation-for-machines-llms-txt"
	},
	{
		tr: "/kaide-yapay-zeka-odakli-mimari-kit",
		en: "/kaide-ai-native-architecture-kit"
	}
] as const

export type BlogTranslationAlternate = {
	hreflang: "tr" | "en" | "x-default"
	slug: string
}

/**
 * hreflang alternates for a post that has a TR/EN counterpart (self included).
 * Returns null when the post has no translation. `x-default` points to TR.
 */
export function getBlogTranslationAlternates(
	slug: string
): BlogTranslationAlternate[] | null {
	const pair = BLOG_TRANSLATION_PAIRS.find(
		({ tr, en }) => tr === slug || en === slug
	)

	if (!pair) {
		return null
	}

	return [
		{ hreflang: "tr", slug: pair.tr },
		{ hreflang: "en", slug: pair.en },
		{ hreflang: "x-default", slug: pair.tr }
	]
}

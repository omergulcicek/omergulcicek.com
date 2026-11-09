/**
 * Posts about projects that were renamed into ViraStack, and the post that replaces each.
 * Keyed by slug without the leading slash. They stay published in Supabase for the v10 site,
 * so v11 hides them from every list and answers their old URL with a 301.
 */
export const RETIRED_POSTS: Readonly<Record<string, string>> = {
  "nextjs-15-boilerplate": "virastack-start",
  "nizam-nextjs-16-boilerplate": "virastack-start",
  "nizam-nextjs-16-boilerplate-en": "virastack-start",
  "kaide-yapay-zeka-odakli-mimari-kit": "virastack-ai",
  "kaide-ai-native-architecture-kit": "virastack-ai"
}

/** PostgREST filter that leaves the retired posts out: `not.in.(/a,/b)`. */
export const RETIRED_POSTS_FILTER = `not.in.(${Object.keys(RETIRED_POSTS)
  .map((slug) => `/${slug}`)
  .join(",")})`

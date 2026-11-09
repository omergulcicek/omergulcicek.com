import { toSlug } from "@/helpers/to-slug"

type TaggedPost = { tags: readonly string[] }

export type BlogTag = { tag: string; slug: string; count: number }

/** Every tag of the posts with its post count: most used first, ties in the locale's order. */
export function getBlogTags(posts: readonly TaggedPost[], locale: string): BlogTag[] {
  const counts = new Map<string, number>()
  for (const post of posts) {
    for (const tag of post.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1)
  }

  const collator = new Intl.Collator(locale)

  return [...counts]
    .map(([tag, count]) => ({ tag, slug: toSlug(tag), count }))
    .sort((a, b) => b.count - a.count || collator.compare(a.tag, b.tag))
}

/** The posts carrying the tag with this slug; all posts when no slug is given. */
export function filterPostsByTag<T extends TaggedPost>(posts: readonly T[], slug?: string) {
  if (!slug) return [...posts]

  return posts.filter((post) => post.tags.some((tag) => toSlug(tag) === slug))
}

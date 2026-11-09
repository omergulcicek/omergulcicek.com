import { toSlug } from "@/helpers/to-slug"

import { EN_TAG_LABELS } from "@/features/blog/constants/blog-tag-labels.constants"

type TaggedPost = { tags: readonly string[] }

export type BlogTag = { tag: string; slug: string; count: number }

/** A stored (Turkish) tag as the locale shows it. */
export function tagLabel(tag: string, locale: string) {
  return locale === "en" ? (EN_TAG_LABELS[tag] ?? tag) : tag
}

/** A tag's URL slug in the locale, taken from its label: `?tag=ai` in English, `?tag=yapay-zeka` in Turkish. */
export function tagSlug(tag: string, locale: string) {
  return toSlug(tagLabel(tag, locale))
}

/** Every tag of the posts with its post count: most used first, ties in the locale's order. */
export function getBlogTags(posts: readonly TaggedPost[], locale: string): BlogTag[] {
  const counts = new Map<string, number>()
  for (const post of posts) {
    for (const tag of post.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1)
  }

  const collator = new Intl.Collator(locale)

  return [...counts]
    .map(([tag, count]) => ({ tag: tagLabel(tag, locale), slug: tagSlug(tag, locale), count }))
    .sort((a, b) => b.count - a.count || collator.compare(a.tag, b.tag))
}

/** The posts carrying the tag with this slug in the locale; all posts when no slug is given. */
export function filterPostsByTag<T extends TaggedPost>(
  posts: readonly T[],
  slug: string | undefined,
  locale: string
) {
  if (!slug) return [...posts]

  return posts.filter((post) => post.tags.some((tag) => tagSlug(tag, locale) === slug))
}

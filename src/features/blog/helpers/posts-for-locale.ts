import type { BlogCategory, BlogPostListItem } from "@/features/blog/schemas/blog-post.schema"

/**
 * The posts a locale lists. The blog shows each language its own posts; notes are only written
 * in Turkish, so every locale lists all of them (the English page says so).
 */
export function postsForLocale<T extends Pick<BlogPostListItem, "locale">>(
  posts: readonly T[],
  category: BlogCategory,
  locale: string
): T[] {
  return category === "technical" ? posts.filter((post) => post.locale === locale) : [...posts]
}

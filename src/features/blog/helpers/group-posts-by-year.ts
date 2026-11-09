import type { BlogPostListItem } from "@/features/blog/schemas/blog-post.schema"

export type BlogPostYearGroup = {
  /** `null` collects posts without a publish date. */
  year: number | null
  posts: BlogPostListItem[]
}

/** Groups posts by publish year, keeping the incoming (newest first) order. */
export function groupPostsByYear(posts: BlogPostListItem[]): BlogPostYearGroup[] {
  const groups = new Map<number | null, BlogPostListItem[]>()

  for (const post of posts) {
    const year = post.published_at ? new Date(post.published_at).getUTCFullYear() : null
    const group = groups.get(year)
    if (group) group.push(post)
    else groups.set(year, [post])
  }

  return [...groups].map(([year, groupPosts]) => ({ year, posts: groupPosts }))
}

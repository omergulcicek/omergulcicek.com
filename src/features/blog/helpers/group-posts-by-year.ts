import type { BlogPostListItem } from "@/features/blog/schemas/blog-post.schema"

export type BlogPostYearGroup = {
  /** `null` collects posts without a publish date. */
  year: number | null
  posts: BlogPostListItem[]
}

// The same time zone formatPostDate shows dates in, so a post never sits under a year its date contradicts.
const yearFormat = new Intl.DateTimeFormat("en", { year: "numeric", timeZone: "Europe/Istanbul" })

/** Groups posts by publish year in Istanbul time, keeping the incoming (newest first) order. */
export function groupPostsByYear(posts: BlogPostListItem[]): BlogPostYearGroup[] {
  const groups = new Map<number | null, BlogPostListItem[]>()

  for (const post of posts) {
    const year = post.published_at ? Number(yearFormat.format(new Date(post.published_at))) : null
    const group = groups.get(year)
    if (group) group.push(post)
    else groups.set(year, [post])
  }

  return [...groups].map(([year, groupPosts]) => ({ year, posts: groupPosts }))
}

import { useSuspenseQuery } from "@tanstack/react-query"

import { blogPostsQueryOptions } from "@/features/blog/api/blog.queries"
import { postsForLocale } from "@/features/blog/helpers/posts-for-locale"
import type { BlogCategory } from "@/features/blog/schemas/blog-post.schema"
import { getLocale } from "@/paraglide/runtime.js"

/**
 * A category's posts for the current locale. One cached list serves both languages; the
 * filter runs here, so lists, tags, related posts and neighbours all agree.
 */
export function useBlogPosts(category: BlogCategory) {
  const locale = getLocale()
  return useSuspenseQuery({
    ...blogPostsQueryOptions(category),
    select: (posts) => postsForLocale(posts, category, locale)
  })
}

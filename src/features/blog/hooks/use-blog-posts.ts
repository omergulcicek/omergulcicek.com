import { useSuspenseQuery } from "@tanstack/react-query"

import { blogPostsQueryOptions } from "@/features/blog/api/blog.queries"
import type { BlogCategory } from "@/features/blog/schemas/blog-post.schema"

export function useBlogPosts(category: BlogCategory) {
  return useSuspenseQuery(blogPostsQueryOptions(category))
}

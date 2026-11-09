import { useSuspenseQuery } from "@tanstack/react-query"

import { blogPostQueryOptions } from "@/features/blog/api/blog.queries"
import type { BlogCategory } from "@/features/blog/schemas/blog-post.schema"

export function useBlogPost(category: BlogCategory, slug: string) {
  return useSuspenseQuery(blogPostQueryOptions(category, slug))
}

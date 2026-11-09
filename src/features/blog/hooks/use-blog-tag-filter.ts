import { useSearch } from "@tanstack/react-router"

import { blogListSearchSchema } from "@/features/blog/schemas/blog-post.schema"

/** The tag slug in the URL. Shared by /blog and /notes, so it reads the search without a route. */
export function useBlogTagFilter() {
  const search = useSearch({ strict: false })

  return blogListSearchSchema.parse(search).tag
}

import type { BlogCategory } from "@/features/blog/schemas/blog-post.schema"

export const blogKeys = {
  all: ["blog"] as const,
  lists: () => [...blogKeys.all, "list"] as const,
  list: (filters: { category: BlogCategory }) => [...blogKeys.lists(), filters] as const,
  details: () => [...blogKeys.all, "detail"] as const,
  detail: (category: BlogCategory, slug: string) => [...blogKeys.details(), category, slug] as const
}

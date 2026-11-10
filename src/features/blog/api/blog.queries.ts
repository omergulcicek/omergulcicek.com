import { queryOptions } from "@tanstack/react-query"

import { getBlogPost } from "@/features/blog/api/get-blog-post.api"
import { getBlogPosts } from "@/features/blog/api/get-blog-posts.api"
import { getSearchPosts } from "@/features/blog/api/get-search-posts.api"
import { blogKeys } from "@/features/blog/api/query-keys"
import type { BlogCategory } from "@/features/blog/schemas/blog-post.schema"

export const blogPostQueryOptions = (category: BlogCategory, slug: string) =>
  queryOptions({
    queryKey: blogKeys.detail(category, slug),
    queryFn: ({ signal }) => getBlogPost({ data: { category, slug }, signal })
  })

export const blogPostsQueryOptions = (category: BlogCategory) =>
  queryOptions({
    queryKey: blogKeys.list({ category }),
    queryFn: ({ signal }) => getBlogPosts({ data: { category }, signal })
  })

export const searchPostsQueryOptions = (category: BlogCategory) =>
  queryOptions({
    queryKey: blogKeys.search(category),
    queryFn: ({ signal }) => getSearchPosts({ data: { category }, signal })
  })

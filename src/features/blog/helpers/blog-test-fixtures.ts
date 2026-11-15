import type { QueryClient } from "@tanstack/react-query"

import { blogKeys } from "@/features/blog/api/query-keys"
import type {
  BlogCategory,
  BlogListPost,
  BlogPostDetail
} from "@/features/blog/schemas/blog-post.schema"

/** A list row as the blog list query returns it; slugs keep their leading slash, like Supabase. */
export function listPost(overrides: Partial<BlogListPost> & Pick<BlogListPost, "slug">) {
  return {
    title: `Title of ${overrides.slug}`,
    tags: [],
    locale: "tr",
    published_at: "2026-01-01T09:00:00Z",
    featured_rank: null,
    series: null,
    series_order: null,
    ...overrides
  } satisfies BlogListPost
}

export function postDetail(overrides: Partial<BlogPostDetail> = {}) {
  return {
    slug: "/barrel-file",
    title: "Barrel File",
    description: "Neden barrel file kullanmıyorum",
    tags: ["React", "Mimari"],
    locale: "tr",
    published_at: "2026-11-04T22:30:00Z",
    updated_at: null,
    translation_slug: null,
    html: "<p>Yazının gövdesi</p>",
    headings: [],
    readingMinutes: 7,
    ...overrides
  } satisfies BlogPostDetail
}

/** Puts a category's list and, optionally, one post into the cache the hooks read. */
export function seedBlog(
  queryClient: QueryClient,
  category: BlogCategory,
  posts: BlogListPost[],
  detail?: BlogPostDetail
) {
  queryClient.setQueryData(blogKeys.list({ category }), posts)
  if (detail) {
    queryClient.setQueryData(blogKeys.detail(category, detail.slug.replace(/^\//, "")), detail)
  }
}

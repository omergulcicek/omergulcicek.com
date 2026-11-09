import { getSupabaseApi } from "@/lib/supabase-api"

import { sitemapPostListSchema } from "@/features/blog/schemas/blog-post.schema"

/** Every published post with what the sitemap needs. Server only: call it from a server route. */
export function getSitemapPosts(signal?: AbortSignal) {
  return getSupabaseApi().get("/blog_posts", {
    params: {
      select: "slug,category,locale,published_at,updated_at",
      published: "eq.true",
      order: "published_at.desc.nullslast",
      limit: 1000
    },
    schema: sitemapPostListSchema,
    signal
  })
}

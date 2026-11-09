import { getSupabaseApi } from "@/lib/supabase-api"

import { postCardRowsSchema } from "@/features/blog/schemas/blog-post.schema"
import type { BlogCategory } from "@/features/blog/schemas/blog-post.schema"

/** What a post's share card shows, or null when no published post has that slug. Server only. */
export async function getPostCard(category: BlogCategory, slug: string, signal?: AbortSignal) {
  const rows = await getSupabaseApi().get("/blog_posts", {
    params: {
      select: "title,description,tags,locale,published_at",
      slug: `eq./${slug}`,
      category: `eq.${category}`,
      published: "eq.true",
      limit: 1
    },
    schema: postCardRowsSchema,
    signal
  })

  return rows[0] ?? null
}

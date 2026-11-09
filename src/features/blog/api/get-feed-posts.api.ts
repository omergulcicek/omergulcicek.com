import { getSupabaseApi } from "@/lib/supabase-api"

import { RETIRED_POSTS_FILTER } from "@/features/blog/constants/retired-posts.constants"
import {
  feedPostListSchema,
  fullTextPostListSchema
} from "@/features/blog/schemas/blog-post.schema"
import type { BlogCategory } from "@/features/blog/schemas/blog-post.schema"

const listParams = (category: BlogCategory) => ({
  category: `eq.${category}`,
  published: "eq.true",
  slug: RETIRED_POSTS_FILTER,
  order: "published_at.desc.nullslast",
  limit: 500
})

/** Published posts of a category with their descriptions, newest first. Server only. */
export function getFeedPosts(category: BlogCategory, signal?: AbortSignal) {
  return getSupabaseApi().get("/blog_posts", {
    params: { select: "slug,title,description,tags,locale,published_at", ...listParams(category) },
    schema: feedPostListSchema,
    signal
  })
}

/** Published posts of a category with their MDX source, newest first. Server only. */
export function getFullTextPosts(category: BlogCategory, signal?: AbortSignal) {
  return getSupabaseApi().get("/blog_posts", {
    params: {
      select: "slug,title,description,tags,locale,published_at,content",
      ...listParams(category)
    },
    schema: fullTextPostListSchema,
    // Every post's full MDX is a few hundred KB, more than the default timeout allows on a cold start.
    timeoutMs: 30_000,
    signal
  })
}

/**
 * One published post of a category with its MDX source, for its Markdown version. An empty list
 * when there is no such post. Server only.
 */
export function getFullTextPost(category: BlogCategory, slug: string, signal?: AbortSignal) {
  return getSupabaseApi().get("/blog_posts", {
    params: {
      select: "slug,title,description,tags,locale,published_at,content",
      category: `eq.${category}`,
      published: "eq.true",
      slug: `eq./${slug}`,
      limit: 1
    },
    schema: fullTextPostListSchema,
    signal
  })
}

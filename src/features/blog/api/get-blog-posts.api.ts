import { createServerFn } from "@tanstack/react-start"

import { getSupabaseApi } from "@/lib/supabase-api"

import {
  blogPostListSchema,
  getBlogPostsInputSchema
} from "@/features/blog/schemas/blog-post.schema"

/** Published posts of one category, newest first. */
// The query's signal cancels the server function request itself; the handler gets no signal of its own.
export const getBlogPosts = createServerFn({ method: "GET" })
  .validator(getBlogPostsInputSchema)
  .handler(({ data }) =>
    // ApiError messages carry only the status and kind, so they are safe to reach the client.
    getSupabaseApi().get("/blog_posts", {
      params: {
        select: "slug,title,tags,locale,published_at",
        category: `eq.${data.category}`,
        published: "eq.true",
        order: "published_at.desc.nullslast",
        limit: 500
      },
      schema: blogPostListSchema
    })
  )

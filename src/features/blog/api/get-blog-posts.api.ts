import { createServerFn } from "@tanstack/react-start"

import { canReadDrafts, getSupabaseApi } from "@/lib/supabase-api"

import { RETIRED_POSTS_FILTER } from "@/features/blog/constants/retired-posts.constants"
import {
  blogPostListSchema,
  getBlogPostsInputSchema
} from "@/features/blog/schemas/blog-post.schema"

/** Published posts of one category, newest first; drafts too under `pnpm dev` (`canReadDrafts`). */
// The query's signal cancels the server function request itself; the handler gets no signal of its own.
export const getBlogPosts = createServerFn({ method: "GET" })
  .validator(getBlogPostsInputSchema)
  .handler(({ data }) => {
    const drafts = canReadDrafts()
    // ApiError messages carry only the status and kind, so they are safe to reach the client.
    return getSupabaseApi().get("/blog_posts", {
      params: {
        select: "slug,title,tags,locale,published_at,featured_rank,series,series_order",
        category: `eq.${data.category}`,
        ...(drafts ? {} : { published: "eq.true" }),
        slug: RETIRED_POSTS_FILTER,
        // Drafts have no publish date yet; under `pnpm dev` they lead the list so they are easy to find.
        order: drafts ? "published_at.desc.nullsfirst" : "published_at.desc.nullslast",
        limit: 500
      },
      schema: blogPostListSchema
    })
  })

import { notFound } from "@tanstack/react-router"
import { createServerFn } from "@tanstack/react-start"

import { getSupabaseApi } from "@/lib/supabase-api"

import { renderPostContent } from "@/features/blog/api/render-post-content"
import { estimateReadingMinutes } from "@/features/blog/helpers/estimate-reading-minutes"
import {
  blogPostDetailRowsSchema,
  getBlogPostInputSchema
} from "@/features/blog/schemas/blog-post.schema"
import type { BlogPostDetail } from "@/features/blog/schemas/blog-post.schema"

const HOUR_MS = 60 * 60 * 1000

/*
 * Rendering MDX with Shiki is the slow part, so each post's HTML is kept for an hour per
 * server instance. An edit in Supabase shows up within the hour or on the next deploy.
 */
const cache = new Map<string, { renderedAt: number; post: BlogPostDetail }>()

/** One published post of a category, with its MDX rendered to HTML. Throws notFound otherwise. */
export const getBlogPost = createServerFn({ method: "GET" })
  .validator(getBlogPostInputSchema)
  .handler(async ({ data }) => {
    const key = `${data.category}:${data.slug}`
    const cached = cache.get(key)
    if (cached && Date.now() - cached.renderedAt < HOUR_MS) return cached.post

    const rows = await getSupabaseApi().get("/blog_posts", {
      params: {
        select: "slug,title,description,tags,locale,published_at,content,og_image_path,updated_at",
        slug: `eq./${data.slug}`,
        category: `eq.${data.category}`,
        published: "eq.true",
        limit: 1
      },
      schema: blogPostDetailRowsSchema
    })

    const row = rows[0]
    if (!row) throw notFound()

    const { content, ...meta } = row
    const post: BlogPostDetail = {
      ...meta,
      ...(await renderPostContent(content, meta.locale)),
      readingMinutes: estimateReadingMinutes(content)
    }
    cache.set(key, { renderedAt: Date.now(), post })

    return post
  })

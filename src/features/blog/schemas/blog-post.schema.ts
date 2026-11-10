import { z } from "zod"

import { sortTags } from "@/features/blog/helpers/blog-tags"
import type { PostHeading } from "@/features/blog/helpers/rehype-heading-ids"

/** `technical` posts list on /blog, `personal` ones on /notes. */
const blogCategorySchema = z.enum(["technical", "personal"])

export const getBlogPostsInputSchema = z.strictObject({ category: blogCategorySchema })

/** Search params of /blog and /notes: `?tag=css` filters by a tag slug; a bad value is dropped. */
export const blogListSearchSchema = z.object({ tag: z.string().optional().catch(undefined) })

/** One row of the blog list, as `blog_posts` returns it. */
const blogPostListItemSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  // Sorted once here, so every list, page, feed and card shows tags in the same order.
  tags: z.array(z.string()).transform(sortTags),
  locale: z.enum(["tr", "en"]),
  published_at: z.string().nullable()
})

/**
 * A row of the blog list query: the list item plus what the home page and the series box need.
 * Kept apart from `blogPostListItemSchema`, which feeds, the sitemap and cards extend.
 */
const blogListPostSchema = blogPostListItemSchema.extend({
  featured: z.boolean(),
  /** Slug of the series the post belongs to, such as `virastack`; null outside a series. */
  series: z.string().min(1).nullable(),
  series_order: z.number().int().nullable()
})

export const blogPostListSchema = z.array(blogListPostSchema)

/** The fields of one post that its share card shows; PostgREST returns an array. */
export const postCardRowsSchema = z.array(
  blogPostListItemSchema
    .pick({ title: true, tags: true, locale: true, published_at: true })
    .extend({ description: z.string() })
)

/** A post as feeds and llms.txt list it. */
export const feedPostListSchema = z.array(
  blogPostListItemSchema.extend({ description: z.string() })
)

/** A post with its MDX source, for llms-full.txt. */
export const fullTextPostListSchema = z.array(
  blogPostListItemSchema.extend({ description: z.string(), content: z.string().min(1) })
)

export type FeedPost = z.infer<typeof feedPostListSchema>[number]

/** One row for the sitemap: where the post lives and when it last changed. */
export const sitemapPostListSchema = z.array(
  blogPostListItemSchema.pick({ slug: true, locale: true, published_at: true }).extend({
    category: blogCategorySchema,
    updated_at: z.string().nullable(),
    /** The same post in the other language, with a leading slash; null when there is none. */
    translation_slug: z.string().min(1).nullable()
  })
)

/** The route param is the slug without its leading slash; slugs are lowercase words and dashes. */
export const getBlogPostInputSchema = z.strictObject({
  category: blogCategorySchema,
  slug: z.string().regex(/^[a-z0-9-]+$/)
})

/** PostgREST returns an array even for one match. */
export const blogPostDetailRowsSchema = z.array(
  blogPostListItemSchema.extend({
    description: z.string(),
    content: z.string().min(1),
    updated_at: z.string().nullable(),
    /** The same post in the other language, with a leading slash; null when there is none. */
    translation_slug: z.string().min(1).nullable()
  })
)

export type BlogCategory = z.infer<typeof blogCategorySchema>
export type BlogPostListItem = z.infer<typeof blogPostListItemSchema>
export type BlogListPost = z.infer<typeof blogListPostSchema>

/** A post ready to show: its MDX is already rendered to HTML on the server. */
export type BlogPostDetail = BlogPostListItem & {
  description: string
  updated_at: string | null
  translation_slug: string | null
  html: string
  /** The h2/h3 outline, for the table of contents. */
  headings: PostHeading[]
  readingMinutes: number
}

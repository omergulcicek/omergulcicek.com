import { z } from "zod"

import type { PostHeading } from "@/features/blog/helpers/rehype-heading-ids"

/** `technical` posts list on /blog, `personal` ones on /notes. */
export const blogCategorySchema = z.enum(["technical", "personal"])

export const getBlogPostsInputSchema = z.strictObject({ category: blogCategorySchema })

/** Search params of /blog and /notes: `?tag=css` filters by a tag slug; a bad value is dropped. */
export const blogListSearchSchema = z.object({ tag: z.string().optional().catch(undefined) })

/** One row of the blog list, as `blog_posts` returns it. */
export const blogPostListItemSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  tags: z.array(z.string()),
  locale: z.enum(["tr", "en"]),
  published_at: z.string().nullable()
})

export const blogPostListSchema = z.array(blogPostListItemSchema)

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
export type FullTextPost = z.infer<typeof fullTextPostListSchema>[number]

/** One row for the sitemap: where the post lives and when it last changed. */
export const sitemapPostListSchema = z.array(
  blogPostListItemSchema.pick({ slug: true, locale: true, published_at: true }).extend({
    category: blogCategorySchema,
    updated_at: z.string().nullable()
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
    updated_at: z.string().nullable()
  })
)

export type BlogCategory = z.infer<typeof blogCategorySchema>
export type BlogPostListItem = z.infer<typeof blogPostListItemSchema>

/** A post ready to show: its MDX is already rendered to HTML on the server. */
export type BlogPostDetail = BlogPostListItem & {
  description: string
  updated_at: string | null
  html: string
  /** The h2/h3 outline, for the table of contents. */
  headings: PostHeading[]
  readingMinutes: number
}

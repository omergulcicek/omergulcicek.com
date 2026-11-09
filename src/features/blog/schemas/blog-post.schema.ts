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
    /** A public path such as `blog/2026/07-28/cover.jpg`, with or without the leading slash. */
    og_image_path: z.string().min(1).nullable(),
    updated_at: z.string().nullable()
  })
)

export type BlogCategory = z.infer<typeof blogCategorySchema>
export type BlogPostListItem = z.infer<typeof blogPostListItemSchema>

/** A post ready to show: its MDX is already rendered to HTML on the server. */
export type BlogPostDetail = BlogPostListItem & {
  description: string
  og_image_path: string | null
  updated_at: string | null
  html: string
  /** The h2/h3 outline, for the table of contents. */
  headings: PostHeading[]
  readingMinutes: number
}

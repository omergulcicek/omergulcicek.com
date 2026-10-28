import { z } from "zod"

import {
	blogCategorySchema,
	blogLocaleSchema
} from "@/features/blog/schemas/blog.schema"

export const blogPostListRowSchema = z.object({
	slug: z.string(),
	title: z.string(),
	description: z.string(),
	category: blogCategorySchema,
	tags: z.array(z.string()),
	locale: blogLocaleSchema,
	medium_url: z.string().nullable(),
	interactive: z.boolean(),
	published: z.boolean(),
	published_at: z.string().nullable()
})

export const blogPostDetailRowSchema = blogPostListRowSchema.extend({
	content: z.string().min(1),
	content_html: z.string().nullable(),
	headings: z.any().nullable(),
	og_image_path: z.string().nullable()
})

/** Raw MDX source for the Markdown copies, llms-full.txt and the RSS full text. */
export const blogPostSourceRowSchema = blogPostListRowSchema.extend({
	content: z.string().min(1)
})

export type BlogPostListRow = z.infer<typeof blogPostListRowSchema>
export type BlogPostDetailRow = z.infer<typeof blogPostDetailRowSchema>
export type BlogPostSourceRow = z.infer<typeof blogPostSourceRowSchema>

export const blogPostListRowsSchema = z.array(blogPostListRowSchema)
export const blogPostSourceRowsSchema = z.array(blogPostSourceRowSchema)

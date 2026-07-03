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
	featured: z.boolean(),
	published: z.boolean(),
	published_at: z.string().nullable(),
	og_image_path: z.string().nullable(),
	series: z.string().nullable(),
	series_order: z.number().nullable()
})

export const blogPostDetailRowSchema = blogPostListRowSchema.extend({
	content: z.string().min(1)
})

export type BlogPostListRow = z.infer<typeof blogPostListRowSchema>
export type BlogPostDetailRow = z.infer<typeof blogPostDetailRowSchema>

export const blogPostListRowsSchema = z.array(blogPostListRowSchema)

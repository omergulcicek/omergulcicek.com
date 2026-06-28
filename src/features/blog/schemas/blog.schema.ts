import { z } from "zod"

export const BlogPostMetadataSchema = z
	.object({
		title: z.string(),
		createdAt: z.string(),
		description: z.string().optional(),
		keywords: z.array(z.string()).optional(),
		tags: z.array(z.string()).optional(),
		interactive: z.boolean().optional(),
		languages: z.array(z.string()).optional()
	})
	.catchall(z.unknown())

export const BlogPostSchema = z.object({
	metadata: BlogPostMetadataSchema,
	slug: z.string(),
	content: z.string()
})

export type BlogPostMetadata = z.infer<typeof BlogPostMetadataSchema>
export type BlogPost = z.infer<typeof BlogPostSchema>

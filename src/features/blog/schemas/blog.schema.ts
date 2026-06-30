import { z } from "zod"

export const blogCategorySchema = z.enum(["technical", "personal"])
export const blogLocaleSchema = z.enum(["tr", "en"])

export const blogPostMetadataSchema = z.object({
	locale: blogLocaleSchema,
	publishedAt: z.string().date(),
	updatedAt: z.string().date().optional(),
	published: z.boolean(),
	slug: z
		.string()
		.regex(/^\/[a-z0-9]+(?:-[a-z0-9]+)*$/),
	title: z.string().min(1),
	description: z.string().min(1).max(165),
	category: blogCategorySchema,
	tags: z.array(z.string()).max(5),
	series: z.string().optional(),
	seriesOrder: z.number().int().positive().optional(),
	coverImage: z.string().startsWith("/blog/").optional(),
	readingTimeMinutes: z.number().int().positive().optional(),
	canonicalUrl: z.string().url().optional(),
	featured: z.boolean().optional(),
	interactive: z.boolean().optional(),
	mediumUrl: z.string().url().optional(),
	translationOf: z
		.string()
		.regex(/^\/[a-z0-9]+(?:-[a-z0-9]+)*$/)
		.optional(),
	translatedTo: z
		.string()
		.regex(/^\/[a-z0-9]+(?:-[a-z0-9]+)*$/)
		.optional(),
	contentHash: z.string().length(16).optional()
})

export const blogPostSchema = z.object({
	metadata: blogPostMetadataSchema,
	content: z.string().min(1)
})

export type BlogPostMetadata = z.infer<typeof blogPostMetadataSchema>
export type BlogPostDocument = z.infer<typeof blogPostSchema>

import { createServerFn } from "@tanstack/react-start"
import { z } from "zod"

import type { BlogPostDetail } from "@/features/blog/repositories/blog-repository.types"
import { getBlogRepository } from "@/features/blog/repositories"
import type { BlogPost } from "@/features/blog/types/blog.types"

const blogSlugInputSchema = z.object({
	slug: z.string().min(1)
})

export const getBlogPostsFn = createServerFn({ method: "GET" }).handler(
	async (): Promise<BlogPost[]> => {
		const repository = getBlogRepository(process.env.NODE_ENV === "development")

		return repository.getAllPosts()
	}
)

export const getBlogPostDetailFn = createServerFn({ method: "GET" })
	.validator(blogSlugInputSchema)
	.handler(async ({ data }): Promise<BlogPostDetail | null> => {
		const repository = getBlogRepository(process.env.NODE_ENV === "development")

		return repository.getPostBySlug(data.slug)
	})

export const getBlogPostNeighboursFn = createServerFn({ method: "GET" })
	.validator(blogSlugInputSchema)
	.handler(async ({ data }) => {
		const repository = getBlogRepository(process.env.NODE_ENV === "development")

		return repository.getPostNeighbours(data.slug)
	})

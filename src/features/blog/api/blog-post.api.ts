import { createServerFn } from "@tanstack/react-start"
import { z } from "zod"

import { mdxBlogRepository } from "@/features/blog/repositories/mdx-blog.repository"
import type { BlogPostDetail } from "@/features/blog/repositories/blog-repository.types"
import type { BlogPost } from "@/features/blog/types/blog.types"

const blogSlugInputSchema = z.object({
	slug: z.string().min(1)
})

export const getBlogPostsFn = createServerFn({ method: "GET" }).handler(
	async (): Promise<BlogPost[]> => {
		return mdxBlogRepository.getAllPosts()
	}
)

export const getBlogPostDetailFn = createServerFn({ method: "GET" })
	.validator(blogSlugInputSchema)
	.handler(async ({ data }): Promise<BlogPostDetail | null> => {
		return mdxBlogRepository.getPostBySlug(data.slug)
	})

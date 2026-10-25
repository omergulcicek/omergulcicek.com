import { createServerFn } from "@tanstack/react-start"
import { z } from "zod"

import { BLOG_UI } from "@/features/blog/constants/blog.constants"
import type { BlogPostNeighbours } from "@/features/blog/helpers/resolve-blog-neighbours"
import { getBlogRepository } from "@/features/blog/repositories"
import type { BlogPostDetail } from "@/features/blog/repositories/blog-repository.types"
import type { BlogPost } from "@/features/blog/types/blog.types"
import { getRuntimeIsDev } from "@/lib/runtime/is-dev-runtime"
import { toServerResult, type ServerResult } from "@/lib/server-result"

const blogSlugInputSchema = z.object({
	slug: z.string().min(1)
})

export const getBlogPostsFn = createServerFn({ method: "GET" }).handler(
	async (): Promise<ServerResult<BlogPost[]>> =>
		toServerResult(
			() => getBlogRepository(getRuntimeIsDev()).getAllPosts(),
			BLOG_UI.postsLoadError
		)
)

export const getBlogPostDetailFn = createServerFn({ method: "GET" })
	.validator(blogSlugInputSchema)
	.handler(
		async ({ data }): Promise<ServerResult<BlogPostDetail | null>> =>
			toServerResult(
				() => getBlogRepository(getRuntimeIsDev()).getPostBySlug(data.slug),
				BLOG_UI.postLoadError
			)
	)

export const getBlogPostNeighboursFn = createServerFn({ method: "GET" })
	.validator(blogSlugInputSchema)
	.handler(
		async ({ data }): Promise<ServerResult<BlogPostNeighbours>> =>
			toServerResult(
				() => getBlogRepository(getRuntimeIsDev()).getPostNeighbours(data.slug),
				BLOG_UI.postLoadError
			)
	)

import { createServerFn } from "@tanstack/react-start"

import { getRuntimeIsDev } from "@/helpers/runtime/is-dev-runtime"
import { runServerWork } from "@/helpers/server-work"

import { getBlogRepository } from "@/features/blog/api/get-blog-repository"
import { BLOG_UI } from "@/features/blog/constants/blog.constants"
import { blogSlugInputSchema } from "@/features/blog/schemas/blog-server-fn.schema"

export const getBlogPostsFn = createServerFn({ method: "GET" }).handler(
	async () =>
		runServerWork(
			() => getBlogRepository(getRuntimeIsDev()).getAllPosts(),
			BLOG_UI.postsLoadError
		)
)

export const getBlogPostDetailFn = createServerFn({ method: "GET" })
	.validator(blogSlugInputSchema)
	.handler(async ({ data }) =>
		runServerWork(
			() => getBlogRepository(getRuntimeIsDev()).getPostBySlug(data.slug),
			BLOG_UI.postLoadError
		)
	)

export const getBlogPostNeighboursFn = createServerFn({ method: "GET" })
	.validator(blogSlugInputSchema)
	.handler(async ({ data }) =>
		runServerWork(
			() => getBlogRepository(getRuntimeIsDev()).getPostNeighbours(data.slug),
			BLOG_UI.postLoadError
		)
	)

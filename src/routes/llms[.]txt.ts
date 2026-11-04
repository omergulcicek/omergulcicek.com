import { createFileRoute } from "@tanstack/react-router"

import { getBlogRepository } from "@/features/blog/api/get-blog-repository"
import { BLOG_PAGE_CACHE_CONTROL } from "@/features/blog/constants/blog-cache.constants"
import { buildLlmsTxt } from "@/features/blog/helpers/build-llms-txt"

export const Route = createFileRoute("/llms.txt")({
	server: {
		handlers: {
			GET: async () => {
				const posts = await getBlogRepository(false).getAllPosts()

				return new Response(buildLlmsTxt(posts), {
					headers: {
						"Content-Type": "text/plain; charset=utf-8",
						"Cache-Control": BLOG_PAGE_CACHE_CONTROL
					}
				})
			}
		}
	}
})

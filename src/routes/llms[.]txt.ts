import { createFileRoute } from "@tanstack/react-router"

import { buildLlmsTxt } from "@/lib/seo/build-llms-txt"

import { BLOG_PAGE_CACHE_CONTROL, getBlogRepository } from "@/features/blog"

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

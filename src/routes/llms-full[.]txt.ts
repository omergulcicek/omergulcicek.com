import { createFileRoute } from "@tanstack/react-router"

import { buildLlmsFullTxt } from "@/lib/seo/build-llms-txt"

import { BLOG_PAGE_CACHE_CONTROL, getBlogPostBodies } from "@/features/blog"

export const Route = createFileRoute("/llms-full.txt")({
	server: {
		handlers: {
			GET: async () => {
				const entries = await getBlogPostBodies("technical")

				return new Response(buildLlmsFullTxt(entries), {
					headers: {
						"Content-Type": "text/plain; charset=utf-8",
						"Cache-Control": BLOG_PAGE_CACHE_CONTROL
					}
				})
			}
		}
	}
})

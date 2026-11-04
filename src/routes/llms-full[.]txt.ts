import { createFileRoute } from "@tanstack/react-router"

import { getBlogPostBodies } from "@/features/blog/api/blog-text-exports.api"
import { BLOG_PAGE_CACHE_CONTROL } from "@/features/blog/constants/blog-cache.constants"
import { buildLlmsFullTxt } from "@/features/blog/helpers/build-llms-txt"

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

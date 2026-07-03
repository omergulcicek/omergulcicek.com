import { createFileRoute } from "@tanstack/react-router"

import { getBlogRepository } from "@/features/blog/repositories"
import { buildSitemapXml } from "@/lib/seo/build-sitemap-xml"

export const Route = createFileRoute("/sitemap.xml")({
	server: {
		handlers: {
			GET: async () => {
				const posts = await getBlogRepository(false).getAllPosts()
				const xml = buildSitemapXml(posts)

				return new Response(xml, {
					headers: {
						"Content-Type": "application/xml; charset=utf-8",
						"Cache-Control": "public, max-age=3600, s-maxage=3600"
					}
				})
			}
		}
	}
})

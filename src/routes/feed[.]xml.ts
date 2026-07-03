import { createFileRoute } from "@tanstack/react-router"

import { getBlogRepository } from "@/features/blog/repositories"
import { buildRssFeedXml } from "@/lib/seo/build-rss-feed-xml"

export const Route = createFileRoute("/feed.xml")({
	server: {
		handlers: {
			GET: async () => {
				const posts = await getBlogRepository(false).getAllPosts()
				const xml = buildRssFeedXml(posts)

				return new Response(xml, {
					headers: {
						"Content-Type": "application/rss+xml; charset=utf-8",
						"Cache-Control": "public, max-age=3600, s-maxage=3600"
					}
				})
			}
		}
	}
})

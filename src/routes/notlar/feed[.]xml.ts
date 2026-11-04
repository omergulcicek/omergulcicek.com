import { createFileRoute } from "@tanstack/react-router"

import { getBlogFeedContentHtml } from "@/features/blog/api/blog-text-exports.api"
import { getBlogRepository } from "@/features/blog/api/get-blog-repository"
import { BLOG_SECTIONS } from "@/features/blog/constants/blog.constants"
import { buildRssFeedXml } from "@/features/blog/helpers/build-rss-feed-xml"

export const Route = createFileRoute("/notlar/feed.xml")({
	server: {
		handlers: {
			GET: async () => {
				const [posts, contentHtmlBySlug] = await Promise.all([
					getBlogRepository(false).getAllPosts(),
					getBlogFeedContentHtml("personal")
				])
				const xml = buildRssFeedXml(
					posts,
					BLOG_SECTIONS.personal,
					contentHtmlBySlug
				)

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

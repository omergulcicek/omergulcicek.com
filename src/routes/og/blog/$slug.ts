import { ImageResponse } from "@vercel/og"
import { createFileRoute } from "@tanstack/react-router"

import {
	BLOG_OG_IMAGE_SIZE,
	createBlogOgImageElement,
	getBlogRepository,
	routeParamToBlogSlug
} from "@/features/blog"

export const Route = createFileRoute("/og/blog/$slug")({
	server: {
		handlers: {
			GET: async ({ params }) => {
				const slug = routeParamToBlogSlug(params.slug)
				const post = await getBlogRepository(false).getPostBySlug(slug)

				if (!post?.published) {
					return new Response("Not found", { status: 404 })
				}

				return new ImageResponse(
					createBlogOgImageElement({
						title: post.title,
						description: post.description
					}),
					{
						...BLOG_OG_IMAGE_SIZE,
						headers: {
							"Content-Type": "image/png",
							"Cache-Control": "public, max-age=86400, s-maxage=86400"
						}
					}
				)
			}
		}
	}
})

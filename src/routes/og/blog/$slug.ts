import { createFileRoute } from "@tanstack/react-router"
import { ImageResponse } from "@vercel/og"

import { OG_IMAGE_SIZE } from "@/constants/og-image.constants"

import { getBlogRepository } from "@/features/blog/api/get-blog-repository"
import { routeParamToBlogSlug } from "@/features/blog/helpers/blog-slug"
import { createBlogOgImageElement } from "@/features/blog/helpers/create-blog-og-image-element"

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
						...OG_IMAGE_SIZE,
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

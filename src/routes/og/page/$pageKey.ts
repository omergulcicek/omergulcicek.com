import { ImageResponse } from "@vercel/og"
import { createFileRoute } from "@tanstack/react-router"

import {
	createOgImageElement,
	OG_IMAGE_SIZE
} from "@/lib/og/create-og-image-element"
import { resolveOgImageSitePath } from "@/lib/og/resolve-og-image-site-path"
import { isStaticPageSeoKey } from "@/lib/seo/is-static-page-seo-key"
import { STATIC_PAGE_SEO } from "@/lib/seo/page-seo.constants"

export const Route = createFileRoute("/og/page/$pageKey")({
	server: {
		handlers: {
			GET: async ({ params }) => {
				if (!isStaticPageSeoKey(params.pageKey)) {
					return new Response("Not found", { status: 404 })
				}

				const page = STATIC_PAGE_SEO[params.pageKey]

				return new ImageResponse(
					createOgImageElement({
						title: page.title,
						description: page.description,
						sitePath: resolveOgImageSitePath(page.path)
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

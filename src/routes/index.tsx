import { createFileRoute } from "@tanstack/react-router"

import { SiteStructuredData } from "@/components/shared/site-structured-data"
import { getBlogPostsFn } from "@/features/blog/api/blog-post.api"
import { HomePage } from "@/features/home"
import { HOME_FEATURED_BLOG_COUNT } from "@/features/home/constants/home-blog.constants"
import { HERO_IMAGE } from "@/features/home/constants/hero-image.constants"
import { buildPageHead } from "@/lib/seo/build-page-head"
import { STATIC_PAGE_SEO } from "@/lib/seo/page-seo.constants"

export const Route = createFileRoute("/")({
	loader: async () => {
		const posts = await getBlogPostsFn()

		return {
			featuredPosts: posts.slice(0, HOME_FEATURED_BLOG_COUNT)
		}
	},
	head: () => {
		const pageHead = buildPageHead({
			title: STATIC_PAGE_SEO.home.title,
			description: STATIC_PAGE_SEO.home.description,
			path: STATIC_PAGE_SEO.home.path,
			useTitleTemplate: false
		})

		return {
			...pageHead,
			links: [
				...pageHead.links,
				...HERO_IMAGE.lcpPreload.map((preload) => ({
					rel: "preload" as const,
					as: "image" as const,
					href: preload.href,
					type: preload.type,
					media: preload.media,
					fetchPriority: "high" as const
				}))
			]
		}
	},
	component: HomeIndexPage
})

function HomeIndexPage() {
	const { featuredPosts } = Route.useLoaderData()

	return (
		<>
			<SiteStructuredData />
			<HomePage featuredPosts={featuredPosts} />
		</>
	)
}

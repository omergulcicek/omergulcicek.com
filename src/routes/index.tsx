import { createFileRoute } from "@tanstack/react-router"

import { getBlogPostsFn } from "@/features/blog/api/blog-post.api"
import { HomePage } from "@/features/home"
import { HOME_FEATURED_BLOG_COUNT } from "@/features/home/constants/home-blog.constants"

export const Route = createFileRoute("/")({
	loader: async () => {
		const posts = await getBlogPostsFn()

		return {
			featuredPosts: posts.slice(0, HOME_FEATURED_BLOG_COUNT)
		}
	},
	head: () => ({
		meta: [
			{ title: "Ömer Gülçiçek — Frontend Engineer" },
			{
				name: "description",
				content:
					"Detaylara önem veren bir frontend mühendisi; blog, projeler ve ViraStack ekosistemi."
			}
		]
	}),
	component: HomeIndexPage
})

function HomeIndexPage() {
	const { featuredPosts } = Route.useLoaderData()

	return <HomePage featuredPosts={featuredPosts} />
}

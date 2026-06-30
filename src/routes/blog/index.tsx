import { createFileRoute } from "@tanstack/react-router"
import { createStandardSchemaV1 } from "nuqs"

import { SITE } from "@/constants/site.constants"
import { getBlogPostsFn } from "@/features/blog/api/blog-post.api"
import { BlogPage } from "@/features/blog"
import { blogSearchParamsParsers } from "@/features/blog/hooks/use-blog-search-params"

export const Route = createFileRoute("/blog/")({
	validateSearch: createStandardSchemaV1(blogSearchParamsParsers, {
		partialOutput: true
	}),
	loader: async () => {
		const posts = await getBlogPostsFn()
		return {
			posts,
			isDev: import.meta.env.DEV
		}
	},
	head: () => ({
		meta: [
			{ title: `Blog · ${SITE.name}` },
			{
				name: "description",
				content:
					"Teknik ve kişisel yazılar — React, Next.js, CSS, frontend mimarisi ve daha fazlası."
			}
		]
	}),
	component: BlogIndexPage
})

function BlogIndexPage() {
	const { posts, isDev } = Route.useLoaderData()

	return <BlogPage posts={posts} isDev={isDev} />
}

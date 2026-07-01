import { createFileRoute } from "@tanstack/react-router"
import { createStandardSchemaV1 } from "nuqs"

import { getBlogPostsFn } from "@/features/blog/api/blog-post.api"
import { BlogPage } from "@/features/blog"
import { blogSearchParamsParsers } from "@/features/blog/hooks/use-blog-search-params"
import { buildPageHead } from "@/lib/seo/build-page-head"
import { STATIC_PAGE_SEO } from "@/lib/seo/page-seo.constants"

const seo = STATIC_PAGE_SEO.blog

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
	head: () =>
		buildPageHead({
			title: seo.title,
			description: seo.description,
			path: seo.path
		}),
	component: BlogIndexPage
})

function BlogIndexPage() {
	const { posts, isDev } = Route.useLoaderData()

	return <BlogPage posts={posts} isDev={isDev} />
}

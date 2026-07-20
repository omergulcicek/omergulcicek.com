import { createFileRoute } from "@tanstack/react-router"
import { createStandardSchemaV1 } from "nuqs"

import { blogPostsQueryOptions } from "@/features/blog/api/get-blog-posts.api"
import { BlogPage } from "@/features/blog"
import { BlogRouteError } from "@/features/blog/components/blog-route-error"
import {
	BLOG_PAGE_CACHE_CONTROL,
	BLOG_PAGE_DEV_CACHE_CONTROL
} from "@/features/blog/constants/blog-cache.constants"
import { useGetBlogPosts } from "@/features/blog/hooks/use-get-blog-posts"
import { blogSearchParamsParsers } from "@/features/blog/hooks/use-blog-search-params"
import { buildStaticPageHead } from "@/lib/seo/build-page-head"

export const Route = createFileRoute("/blog/")({
	validateSearch: createStandardSchemaV1(blogSearchParamsParsers, {
		partialOutput: true
	}),
	loader: async ({ context }) => {
		await context.queryClient.ensureQueryData(blogPostsQueryOptions())

		return {
			isDev: import.meta.env.DEV
		}
	},
	headers: () => ({
		"Cache-Control": import.meta.env.PROD
			? BLOG_PAGE_CACHE_CONTROL
			: BLOG_PAGE_DEV_CACHE_CONTROL
	}),
	head: () => buildStaticPageHead("blog"),
	errorComponent: BlogRouteError,
	component: BlogIndexPage
})

function BlogIndexPage() {
	const { isDev } = Route.useLoaderData()
	const { data: posts } = useGetBlogPosts()

	return <BlogPage posts={posts} isDev={isDev} />
}

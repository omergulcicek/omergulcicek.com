import { createFileRoute } from "@tanstack/react-router"
import { createStandardSchemaV1 } from "nuqs"

import { buildStaticPageHead } from "@/helpers/seo/build-page-head"

import { blogPostsQueryOptions } from "@/features/blog/api/blog.queries"
import { BlogPage } from "@/features/blog/components/BlogPage"
import { BlogRouteError } from "@/features/blog/components/BlogRouteError"
import {
	BLOG_PAGE_CACHE_CONTROL,
	BLOG_PAGE_DEV_CACHE_CONTROL
} from "@/features/blog/constants/blog-cache.constants"
import { BLOG_SECTIONS } from "@/features/blog/constants/blog.constants"
import { blogSearchParamsParsers } from "@/features/blog/hooks/use-blog-search-params"
import { useGetBlogPosts } from "@/features/blog/hooks/use-get-blog-posts"

export const Route = createFileRoute("/notlar/")({
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
	head: () => {
		const pageHead = buildStaticPageHead("notes")
		const section = BLOG_SECTIONS.personal

		return {
			...pageHead,
			links: [
				...pageHead.links,
				{
					rel: "alternate",
					type: "application/rss+xml",
					title: section.title,
					href: section.feedPath
				}
			]
		}
	},
	errorComponent: BlogRouteError,
	component: NotesIndexPage
})

function NotesIndexPage() {
	const { isDev } = Route.useLoaderData()
	const { data: posts } = useGetBlogPosts()

	return (
		<BlogPage section={BLOG_SECTIONS.personal} posts={posts} isDev={isDev} />
	)
}

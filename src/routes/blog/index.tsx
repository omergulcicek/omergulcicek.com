import { createFileRoute, redirect } from "@tanstack/react-router"
import { createStandardSchemaV1 } from "nuqs"

import {
	BLOG_PAGE_CACHE_CONTROL,
	BLOG_PAGE_DEV_CACHE_CONTROL,
	BLOG_SECTIONS,
	blogIndexSearchParamsParsers,
	BlogPage,
	blogPostsQueryOptions,
	BlogRouteError,
	useGetBlogPosts
} from "@/features/blog"
import { buildStaticPageHead } from "@/lib/seo/build-page-head"

export const Route = createFileRoute("/blog/")({
	validateSearch: createStandardSchemaV1(blogIndexSearchParamsParsers, {
		partialOutput: true
	}),
	beforeLoad: ({ search }) => {
		if (search.category === "personal") {
			throw redirect({ to: "/notlar", search: {}, statusCode: 301 })
		}

		if (search.category === "technical") {
			throw redirect({ to: "/blog", search: {}, statusCode: 301 })
		}
	},
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
		const pageHead = buildStaticPageHead("blog")
		const section = BLOG_SECTIONS.technical

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
	component: BlogIndexPage
})

function BlogIndexPage() {
	const { isDev } = Route.useLoaderData()
	const { data: posts } = useGetBlogPosts()

	return (
		<BlogPage section={BLOG_SECTIONS.technical} posts={posts} isDev={isDev} />
	)
}

import { createFileRoute } from "@tanstack/react-router"
import { createStandardSchemaV1 } from "nuqs"

import {
	BLOG_PAGE_CACHE_CONTROL,
	BLOG_PAGE_DEV_CACHE_CONTROL,
	BLOG_SECTIONS,
	BlogPage,
	blogPostsQueryOptions,
	BlogRouteError,
	blogSearchParamsParsers,
	useGetBlogPosts
} from "@/features/blog"
import { buildStaticPageHead } from "@/lib/seo/build-page-head"

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

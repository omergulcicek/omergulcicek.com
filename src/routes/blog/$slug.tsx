import { createFileRoute } from "@tanstack/react-router"

import { NotFoundPage } from "@/components/shared/not-found-page"
import {
	buildBlogPostPageHead,
	loadBlogPostPage
} from "@/features/blog/api/load-blog-post-page"
import { BlogPostDetailPage } from "@/features/blog/components/blog-post-detail-page"
import { BlogRouteError } from "@/features/blog/components/blog-route-error"
import {
	BLOG_PAGE_CACHE_CONTROL,
	BLOG_PAGE_DEV_CACHE_CONTROL
} from "@/features/blog/constants/blog-cache.constants"
import { useGetBlogPostDetail } from "@/features/blog/hooks/use-get-blog-post-detail"

export const Route = createFileRoute("/blog/$slug")({
	loader: ({ context, params }) =>
		loadBlogPostPage({
			queryClient: context.queryClient,
			routeSlug: params.slug,
			category: "technical"
		}),
	headers: () => ({
		"Cache-Control": import.meta.env.PROD
			? BLOG_PAGE_CACHE_CONTROL
			: BLOG_PAGE_DEV_CACHE_CONTROL
	}),
	head: ({ loaderData }) => buildBlogPostPageHead(loaderData),
	notFoundComponent: NotFoundPage,
	errorComponent: BlogRouteError,
	component: BlogPostRoutePage
})

function BlogPostRoutePage() {
	const { slug, isDev, previous, next } = Route.useLoaderData()
	const { data: post } = useGetBlogPostDetail(slug)

	return (
		<BlogPostDetailPage
			post={post}
			isDev={isDev}
			previous={previous}
			next={next}
		/>
	)
}

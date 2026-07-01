import { createFileRoute, notFound, redirect } from "@tanstack/react-router"

import { NotFoundPage } from "@/components/shared/not-found-page"
import {
	getBlogPostDetailFn,
	getBlogPostsFn
} from "@/features/blog/api/blog-post.api"
import { BlogPostDetailPage } from "@/features/blog/components/blog-post-detail-page"
import { resolveBlogSlugRedirect } from "@/features/blog/constants/blog-redirects.constants"
import {
	findBlogNeighbours,
	slugToRouteParam
} from "@/features/blog/helpers/blog-helpers"
import { routeParamToBlogSlug } from "@/features/blog/helpers/blog-slug"
import { buildBlogPostHead } from "@/lib/seo/build-page-head"

export const Route = createFileRoute("/blog/$slug")({
	loader: async ({ params }) => {
		const canonicalSlug = resolveBlogSlugRedirect(
			routeParamToBlogSlug(params.slug)
		)

		if (canonicalSlug !== routeParamToBlogSlug(params.slug)) {
			throw redirect({
				to: "/blog/$slug",
				params: { slug: slugToRouteParam(canonicalSlug) }
			})
		}

		const slug = routeParamToBlogSlug(params.slug)
		const [post, posts] = await Promise.all([
			getBlogPostDetailFn({ data: { slug } }),
			getBlogPostsFn()
		])

		if (!post) {
			throw notFound()
		}

		const neighbours = findBlogNeighbours(posts, post.slug)

		return {
			post,
			isDev: import.meta.env.DEV,
			previous: neighbours.previous,
			next: neighbours.next
		}
	},
	head: ({ loaderData }) => {
		if (!loaderData) {
			return {}
		}

		const { post } = loaderData

		return buildBlogPostHead({
			title: post.title,
			description: post.description,
			path: `/blog/${slugToRouteParam(post.slug)}`,
			canonicalUrl: post.canonicalUrl,
			ogImage: post.coverImage
		})
	},
	notFoundComponent: NotFoundPage,
	component: BlogPostRoutePage
})

function BlogPostRoutePage() {
	const { post, isDev, previous, next } = Route.useLoaderData()

	return (
		<BlogPostDetailPage
			post={post}
			isDev={isDev}
			previous={previous}
			next={next}
		/>
	)
}

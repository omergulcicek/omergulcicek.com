import { createFileRoute, notFound, redirect } from "@tanstack/react-router"

import { NotFoundPage } from "@/components/shared/not-found-page"
import { getBlogPostNeighboursFn } from "@/features/blog/api/blog-post.api"
import { blogPostDetailQueryOptions } from "@/features/blog/api/get-blog-post-detail.api"
import { BlogPostDetailPage } from "@/features/blog/components/blog-post-detail-page"
import { BlogRouteError } from "@/features/blog/components/blog-route-error"
import {
	BLOG_PAGE_CACHE_CONTROL,
	BLOG_PAGE_DEV_CACHE_CONTROL
} from "@/features/blog/constants/blog-cache.constants"
import { resolveBlogSlugRedirect } from "@/features/blog/constants/blog-redirects.constants"
import { slugToRouteParam } from "@/features/blog/helpers/blog-helpers"
import { routeParamToBlogSlug } from "@/features/blog/helpers/blog-slug"
import { useGetBlogPostDetail } from "@/features/blog/hooks/use-get-blog-post-detail"
import { buildBlogPostHead } from "@/lib/seo/build-page-head"
import { resolveBlogOgImageUrl } from "@/lib/seo/resolve-blog-og-image-url"

export const Route = createFileRoute("/blog/$slug")({
	loader: async ({ context, params }) => {
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

		const [post, neighbours] = await Promise.all([
			context.queryClient.ensureQueryData(blogPostDetailQueryOptions(slug)),
			getBlogPostNeighboursFn({ data: { slug } })
		])

		if (!post) {
			throw notFound()
		}

		const ogImage = resolveBlogOgImageUrl({
			slug: post.slug,
			coverImage: post.coverImage
		})

		return {
			slug,
			isDev: import.meta.env.DEV,
			previous: neighbours.previous,
			next: neighbours.next,
			seo: {
				title: post.title,
				description: post.description,
				published: post.published,
				publishedAt: post.publishedAt,
				canonicalUrl: post.canonicalUrl,
				coverImage: ogImage,
				slug: post.slug
			}
		}
	},
	headers: () => ({
		"Cache-Control": import.meta.env.PROD
			? BLOG_PAGE_CACHE_CONTROL
			: BLOG_PAGE_DEV_CACHE_CONTROL
	}),
	head: ({ loaderData }) => {
		if (!loaderData?.seo) {
			return {}
		}

		const { seo } = loaderData
		const robots = !seo.published ? "noindex, nofollow" : undefined

		return buildBlogPostHead({
			title: seo.title,
			description: seo.description,
			path: `/blog/${slugToRouteParam(seo.slug)}`,
			canonicalUrl: seo.canonicalUrl,
			ogImage: seo.coverImage,
			publishedAt: seo.publishedAt,
			robots
		})
	},
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

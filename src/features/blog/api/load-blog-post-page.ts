import { notFound, redirect } from "@tanstack/react-router"
import type { QueryClient } from "@tanstack/react-query"

import { getBlogPostNeighboursFn } from "@/features/blog/api/blog-post.api"
import { blogPostDetailQueryOptions } from "@/features/blog/api/get-blog-post-detail.api"
import { resolveBlogSlugRedirect } from "@/features/blog/constants/blog-redirects.constants"
import {
	getBlogPostPath,
	slugToRouteParam
} from "@/features/blog/helpers/blog-helpers"
import type { BlogNeighbour } from "@/features/blog/helpers/blog-helpers"
import { routeParamToBlogSlug } from "@/features/blog/helpers/blog-slug"
import type { BlogCategory } from "@/features/blog/types/blog.types"
import { buildBlogPostHead } from "@/lib/seo/build-page-head"
import { unwrapServerResult } from "@/lib/server-result"
import { resolveBlogOgImageUrl } from "@/lib/seo/resolve-blog-og-image-url"

type LoadBlogPostPageOptions = {
	queryClient: QueryClient
	routeSlug: string
	category: BlogCategory
}

export type BlogPostPageLoaderData = {
	slug: string
	isDev: boolean
	previous: BlogNeighbour | null
	next: BlogNeighbour | null
	seo: {
		title: string
		description: string
		published: boolean
		publishedAt: string
		canonicalUrl?: string
		coverImage: string
		path: string
	}
}

function redirectToPost(slug: string, category: BlogCategory): never {
	const params = { slug: slugToRouteParam(slug) }

	if (category === "personal") {
		throw redirect({ to: "/notlar/$slug", params, statusCode: 301 })
	}

	throw redirect({ to: "/blog/$slug", params, statusCode: 301 })
}

/**
 * Shared loader for /blog/$slug and /notlar/$slug. Legacy slugs and posts opened under
 * the wrong section are redirected (301) to their canonical section path.
 */
export async function loadBlogPostPage({
	queryClient,
	routeSlug,
	category
}: LoadBlogPostPageOptions): Promise<BlogPostPageLoaderData> {
	const requestedSlug = routeParamToBlogSlug(routeSlug)
	const slug = resolveBlogSlugRedirect(requestedSlug)

	const [post, neighbours] = await Promise.all([
		queryClient.ensureQueryData(blogPostDetailQueryOptions(slug)),
		getBlogPostNeighboursFn({ data: { slug } }).then(unwrapServerResult)
	])

	if (!post) {
		throw notFound()
	}

	if (slug !== requestedSlug || post.category !== category) {
		redirectToPost(slug, post.category)
	}

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
			coverImage: resolveBlogOgImageUrl({
				slug: post.slug,
				coverImage: post.coverImage
			}),
			path: getBlogPostPath(post.slug, post.category)
		}
	}
}

export function buildBlogPostPageHead(loaderData: BlogPostPageLoaderData | undefined) {
	if (!loaderData) {
		return {}
	}

	const { seo } = loaderData

	return buildBlogPostHead({
		title: seo.title,
		description: seo.description,
		path: seo.path,
		canonicalUrl: seo.canonicalUrl,
		ogImage: seo.coverImage,
		publishedAt: seo.publishedAt,
		robots: seo.published ? undefined : "noindex, nofollow"
	})
}

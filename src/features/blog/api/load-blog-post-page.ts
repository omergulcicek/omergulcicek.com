import type { QueryClient } from "@tanstack/react-query"
import { notFound, redirect } from "@tanstack/react-router"

import {
	buildBlogPostHead,
	type PageAlternateLink
} from "@/helpers/seo/build-page-head"

import { getBlogPostNeighboursFn } from "@/features/blog/api/blog-post.api"
import { blogPostDetailQueryOptions } from "@/features/blog/api/blog.queries"
import { resolveBlogSlugRedirect } from "@/features/blog/constants/blog-redirects.constants"
import {
	BLOG_OG_LOCALES,
	findBlogTranslationPair
} from "@/features/blog/constants/blog-translations.constants"
import {
	getBlogPostMarkdownPath,
	getBlogPostPath,
	slugToRouteParam
} from "@/features/blog/helpers/blog-helpers"
import type { BlogNeighbour } from "@/features/blog/helpers/blog-helpers"
import { routeParamToBlogSlug } from "@/features/blog/helpers/blog-slug"
import { resolveBlogOgImageUrl } from "@/features/blog/helpers/resolve-blog-og-image-url"
import type {
	BlogCategory,
	BlogLocale,
	BlogPost
} from "@/features/blog/types/blog.types"

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
		locale: BlogLocale
		translatedLocales: BlogLocale[]
		alternateLinks: PageAlternateLink[]
	}
}

/** The Markdown copy, plus hreflang links when the post exists in both languages. */
function buildBlogPostAlternates(post: BlogPost) {
	const alternateLinks: PageAlternateLink[] = [
		{
			type: "text/markdown",
			href: getBlogPostMarkdownPath(post.slug, post.category)
		}
	]
	const pair = findBlogTranslationPair(post.slug)

	if (!pair) {
		return { alternateLinks, translatedLocales: [] }
	}

	alternateLinks.push(
		{ hrefLang: "tr", href: getBlogPostPath(pair.tr, post.category) },
		{ hrefLang: "en", href: getBlogPostPath(pair.en, post.category) },
		{ hrefLang: "x-default", href: getBlogPostPath(pair.tr, post.category) }
	)

	const translatedLocales: BlogLocale[] = post.locale === "tr" ? ["en"] : ["tr"]

	return { alternateLinks, translatedLocales }
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
		queryClient.query({
			...blogPostDetailQueryOptions(slug),
			staleTime: "static"
		}),
		getBlogPostNeighboursFn({ data: { slug } })
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
			path: getBlogPostPath(post.slug, post.category),
			locale: post.locale,
			...buildBlogPostAlternates(post)
		}
	}
}

export function buildBlogPostPageHead(
	loaderData: BlogPostPageLoaderData | undefined
) {
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
		ogLocale: BLOG_OG_LOCALES[seo.locale],
		ogLocaleAlternates: seo.translatedLocales.map(
			(locale) => BLOG_OG_LOCALES[locale]
		),
		alternateLinks: seo.alternateLinks,
		publishedAt: seo.publishedAt,
		robots: seo.published ? undefined : "noindex, nofollow"
	})
}

import { SITE } from "@/constants/site.constants"
import {
	STATIC_PAGE_SEO,
	type StaticPageSeoKey
} from "@/lib/seo/page-seo.constants"
import { resolvePageOgImageUrl } from "@/lib/seo/resolve-page-og-image-url"

type BuildPageHeadOptions = {
	title: string
	description: string
	path: string
	ogType?: "website" | "article"
	ogImage?: string
	canonicalUrl?: string
	robots?: string
	useTitleTemplate?: boolean
}

function resolveAbsoluteUrl(pathOrUrl: string): string {
	if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
		return pathOrUrl
	}

	const normalizedPath = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`
	return `${SITE.url}${normalizedPath}`
}

function resolvePageTitle(title: string, useTitleTemplate: boolean): string {
	if (!useTitleTemplate || title.includes("·")) {
		return title
	}

	return `${title} · ${SITE.name}`
}

export function buildPageHead({
	title,
	description,
	path,
	ogType = "website",
	ogImage,
	canonicalUrl,
	robots,
	useTitleTemplate = true
}: BuildPageHeadOptions) {
	const resolvedTitle = resolvePageTitle(title, useTitleTemplate)
	const canonical = canonicalUrl ?? resolveAbsoluteUrl(path)
	const image = resolveAbsoluteUrl(ogImage ?? SITE.defaultOgImage)

	return {
		meta: [
			{ title: resolvedTitle },
			{ name: "description", content: description },
			...(robots ? [{ name: "robots", content: robots }] : []),
			{ property: "og:site_name", content: SITE.name },
			{ property: "og:title", content: resolvedTitle },
			{ property: "og:description", content: description },
			{ property: "og:type", content: ogType },
			{ property: "og:url", content: canonical },
			{ property: "og:locale", content: SITE.locale },
			{ property: "og:image", content: image },
			{ property: "og:image:alt", content: `${SITE.name} — ${SITE.jobTitle}` },
			{ name: "twitter:card", content: "summary_large_image" },
			{ name: "twitter:creator", content: SITE.twitterHandle },
			{ name: "twitter:title", content: resolvedTitle },
			{ name: "twitter:description", content: description },
			{ name: "twitter:image", content: image }
		],
		links: [{ rel: "canonical", href: canonical }]
	}
}

function toArticleIsoDate(value: string): string {
	return new Date(`${value}T12:00:00.000Z`).toISOString()
}

export function buildBlogPostHead({
	title,
	description,
	path,
	canonicalUrl,
	ogImage,
	robots,
	publishedAt,
	author = SITE.name
}: {
	title: string
	description: string
	path: string
	canonicalUrl?: string
	ogImage?: string
	robots?: string
	publishedAt?: string
	author?: string
}) {
	const pageHead = buildPageHead({
		title,
		description,
		path,
		ogType: "article",
		canonicalUrl,
		ogImage,
		robots,
		useTitleTemplate: true
	})

	if (!publishedAt) {
		return pageHead
	}

	const publishedTime = toArticleIsoDate(publishedAt)

	return {
		...pageHead,
		meta: [
			...pageHead.meta,
			{ property: "article:published_time", content: publishedTime },
			{ property: "article:modified_time", content: publishedTime },
			{ property: "article:author", content: author }
		]
	}
}

type BuildStaticPageHeadOptions = {
	useTitleTemplate?: boolean
}

export function buildStaticPageHead(
	pageKey: StaticPageSeoKey,
	options?: BuildStaticPageHeadOptions
) {
	const seo = STATIC_PAGE_SEO[pageKey]
	const useTitleTemplate = options?.useTitleTemplate ?? pageKey !== "home"

	return buildPageHead({
		title: seo.title,
		description: seo.description,
		path: seo.path,
		ogImage: resolvePageOgImageUrl({ pageKey }),
		useTitleTemplate
	})
}

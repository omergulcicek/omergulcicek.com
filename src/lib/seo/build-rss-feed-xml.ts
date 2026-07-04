import { SITE } from "@/constants/site.constants"
import { SITE_CONTENT } from "@/constants/site-content.constants"
import { slugToRouteParam } from "@/features/blog/helpers/blog-helpers"
import type { BlogPost } from "@/features/blog/types/blog.types"
import { STATIC_PAGE_SEO } from "@/lib/seo/page-seo.constants"
import { resolveBlogOgImageUrl } from "@/lib/seo/resolve-blog-og-image-url"

function escapeXml(value: string): string {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&apos;")
}

function toRfc822Date(value: string): string {
	return new Date(`${value}T12:00:00.000Z`).toUTCString()
}

export function buildRssFeedXml(posts: BlogPost[]): string {
	const publishedPosts = posts
		.filter((post) => post.published)
		.sort((left, right) => right.publishedAt.localeCompare(left.publishedAt))

	const items = publishedPosts
		.map((post) => {
			const url = `${SITE.url}/blog/${slugToRouteParam(post.slug)}`
			const coverUrl = resolveBlogOgImageUrl({
				slug: post.slug,
				coverImage: post.coverImage
			})
			const enclosure = `<enclosure url="${escapeXml(coverUrl)}" type="image/jpeg" />`

			return `\t<item>
\t\t<title>${escapeXml(post.title)}</title>
\t\t<link>${escapeXml(url)}</link>
\t\t<guid isPermaLink="true">${escapeXml(url)}</guid>
\t\t<description>${escapeXml(post.description)}</description>
\t\t<pubDate>${escapeXml(toRfc822Date(post.publishedAt))}</pubDate>
\t\t${enclosure}
\t</item>`
		})
		.join("\n")

	return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
\t<channel>
\t\t<title>${escapeXml(SITE.name)} — ${escapeXml(STATIC_PAGE_SEO.blog.title)}</title>
\t\t<link>${escapeXml(`${SITE.url}/blog`)}</link>
\t\t<description>${escapeXml(STATIC_PAGE_SEO.blog.description)}</description>
\t\t<language>tr</language>
\t\t<managingEditor>${escapeXml(SITE_CONTENT.displayName)} (${escapeXml(SITE.url)})</managingEditor>
\t\t<lastBuildDate>${escapeXml(new Date().toUTCString())}</lastBuildDate>
\t\t<atom:link href="${escapeXml(`${SITE.url}/feed.xml`)}" rel="self" type="application/rss+xml" />
${items}
\t</channel>
</rss>
`
}

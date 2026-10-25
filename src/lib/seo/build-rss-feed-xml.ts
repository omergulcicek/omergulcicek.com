import { SITE } from "@/constants/site.constants"
import { ME } from "@/constants/me.constants"
import type { BlogPost, BlogSection } from "@/features/blog"
import { getBlogPostPath } from "@/features/blog"
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

/** Builds the RSS feed of one section: /feed.xml (technical) or /notlar/feed.xml (personal). */
export function buildRssFeedXml(posts: BlogPost[], section: BlogSection): string {
	const publishedPosts = posts
		.filter((post) => post.published && post.category === section.category)
		.sort((left, right) => right.publishedAt.localeCompare(left.publishedAt))

	const items = publishedPosts
		.map((post) => {
			const url = `${SITE.url}${getBlogPostPath(post.slug, post.category)}`
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
\t\t<title>${escapeXml(SITE.name)} — ${escapeXml(section.title)}</title>
\t\t<link>${escapeXml(`${SITE.url}${section.path}`)}</link>
\t\t<description>${escapeXml(section.description)}</description>
\t\t<language>tr</language>
\t\t<managingEditor>${escapeXml(ME.personal.fullName)} (${escapeXml(SITE.url)})</managingEditor>
\t\t<lastBuildDate>${escapeXml(new Date().toUTCString())}</lastBuildDate>
\t\t<atom:link href="${escapeXml(`${SITE.url}${section.feedPath}`)}" rel="self" type="application/rss+xml" />
${items}
\t</channel>
</rss>
`
}

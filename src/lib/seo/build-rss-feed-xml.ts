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

/** `]]>` would end the CDATA section early, so it is split across two sections. */
function toCdata(value: string): string {
	return `<![CDATA[${value.replaceAll("]]>", "]]]]><![CDATA[>")}]]>`
}

/**
 * Builds the RSS feed of one section: /feed.xml (technical) or /notlar/feed.xml (personal).
 * With `contentHtmlBySlug`, each item carries the full post as `content:encoded`, so feed
 * readers and agents get the text without opening the page.
 */
export function buildRssFeedXml(
	posts: BlogPost[],
	section: BlogSection,
	contentHtmlBySlug?: ReadonlyMap<string, string>
): string {
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
			const contentHtml = contentHtmlBySlug?.get(post.slug)
			const content = contentHtml
				? `\n\t\t<content:encoded>${toCdata(contentHtml)}</content:encoded>`
				: ""

			return `\t<item>
\t\t<title>${escapeXml(post.title)}</title>
\t\t<link>${escapeXml(url)}</link>
\t\t<guid isPermaLink="true">${escapeXml(url)}</guid>
\t\t<description>${escapeXml(post.description)}</description>${content}
\t\t<pubDate>${escapeXml(toRfc822Date(post.publishedAt))}</pubDate>
\t\t${enclosure}
\t</item>`
		})
		.join("\n")

	return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
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

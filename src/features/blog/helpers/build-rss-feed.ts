import type { FeedPost } from "@/features/blog/schemas/blog-post.schema"

type RssChannel = {
  title: string
  description: string
  /** Absolute URL of the list page, such as https://omergulcicek.com/blog. */
  link: string
  /** Absolute URL of the feed itself. */
  feedUrl: string
  /** A post's absolute URL; its slug has a leading slash. */
  postUrl: (post: FeedPost) => string
  author: string
}

const escapeXml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;")

/**
 * An RSS 2.0 feed of a post list, newest first. Items carry the description, not the body:
 * rendering every post's MDX on each request would cost more than a feed is worth.
 */
export function buildRssFeed(posts: FeedPost[], channel: RssChannel, now = new Date()) {
  const items = posts.map((post) => {
    const url = escapeXml(channel.postUrl(post))
    const date = post.published_at ? new Date(post.published_at).toUTCString() : null

    return [
      "    <item>",
      `      <title>${escapeXml(post.title)}</title>`,
      `      <link>${url}</link>`,
      `      <guid isPermaLink="true">${url}</guid>`,
      `      <description>${escapeXml(post.description)}</description>`,
      ...post.tags.map((tag) => `      <category>${escapeXml(tag)}</category>`),
      ...(date ? [`      <pubDate>${date}</pubDate>`] : []),
      "    </item>"
    ].join("\n")
  })

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(channel.title)}</title>
    <link>${escapeXml(channel.link)}</link>
    <description>${escapeXml(channel.description)}</description>
    <language>tr</language>
    <managingEditor>${escapeXml(channel.author)}</managingEditor>
    <lastBuildDate>${now.toUTCString()}</lastBuildDate>
    <atom:link href="${escapeXml(channel.feedUrl)}" rel="self" type="application/rss+xml"/>
${items.join("\n")}
  </channel>
</rss>
`
}

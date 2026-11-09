import { describe, expect, it } from "vitest"

import { buildRssFeed } from "@/features/blog/helpers/build-rss-feed"

const channel = {
  title: "Blog · Ömer Gülçiçek",
  description: "Yazılar",
  link: "https://omergulcicek.com/blog",
  feedUrl: "https://omergulcicek.com/feed.xml",
  postUrl: (post: { slug: string }) => `https://omergulcicek.com/blog${post.slug}`,
  author: "iletisim@omergulcicek.com (Ömer Gülçiçek)"
}

describe("buildRssFeed", () => {
  it("lists each post with an escaped title, its URL and an RFC 822 date", () => {
    const xml = buildRssFeed(
      [
        {
          slug: "/barrel-file",
          title: "Barrel <File> & index.ts",
          description: "Gerekli mi?",
          tags: ["TypeScript"],
          locale: "tr",
          published_at: "2026-10-31T12:00:00+00:00"
        }
      ],
      channel,
      new Date("2026-11-09T00:00:00Z")
    )

    expect(xml).toContain("<title>Barrel &lt;File&gt; &amp; index.ts</title>")
    expect(xml).toContain(
      '<guid isPermaLink="true">https://omergulcicek.com/blog/barrel-file</guid>'
    )
    expect(xml).toContain("<pubDate>Sat, 31 Oct 2026 12:00:00 GMT</pubDate>")
    expect(xml).toContain("<category>TypeScript</category>")
  })
})

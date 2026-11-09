import { me } from "@/constants/me.constants"

import { localizedUrl } from "@/helpers/localized-url"

import { getFeedPosts } from "@/features/blog/api/get-feed-posts.api"
import { buildRssFeed } from "@/features/blog/helpers/build-rss-feed"
import { postsForLocale } from "@/features/blog/helpers/posts-for-locale"
import type { BlogCategory } from "@/features/blog/schemas/blog-post.schema"
import * as m from "@/paraglide/messages.js"
import { baseLocale } from "@/paraglide/runtime.js"
import type { Locale } from "@/paraglide/runtime.js"

/** Where each category's list and feed live; the English blog feed is the same path under /en. */
export const FEED_PATHS = {
  technical: { list: "/blog", feed: "/feed.xml" },
  personal: { list: "/notes", feed: "/notes/feed.xml" }
} as const satisfies Record<BlogCategory, { list: string; feed: string }>

/**
 * The RSS response of one category in a locale: the blog feed lists that language's posts, the
 * notes feed every note (they are all Turkish). Server only: it reads Supabase.
 */
export async function feedResponse(category: BlogCategory, locale: Locale = baseLocale) {
  const posts = postsForLocale(await getFeedPosts(category), category, locale)
  const paths = FEED_PATHS[category]
  const options = { locale }

  const xml = buildRssFeed(posts, {
    title: `${category === "technical" ? m.blog_title({}, options) : m.notes_title({}, options)} · ${me.name}`,
    description:
      category === "technical" ? m.blog_description({}, options) : m.notes_description({}, options),
    link: localizedUrl(paths.list, locale),
    feedUrl: localizedUrl(paths.feed, locale),
    language: category === "technical" ? locale : baseLocale,
    // A post is read at its own language's address, as its canonical link says.
    postUrl: (post) => localizedUrl(`${paths.list}${post.slug}`, post.locale),
    author: `${me.links.email} (${me.name})`
  })

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600"
    }
  })
}

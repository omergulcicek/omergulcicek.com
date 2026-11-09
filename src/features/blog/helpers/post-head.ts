import { jsonLd, ogCardUrl, pageHead, personJsonLd } from "@/config/seo.config"

import { localizedUrl } from "@/helpers/localized-url"

import type { BlogPostDetail } from "@/features/blog/schemas/blog-post.schema"

/**
 * A post's head: its generated share card, article dates and a BlogPosting block. Posts are written
 * in one language, so the canonical URL is that language's even when read under the other prefix.
 */
export function postHead(path: string, post: BlogPostDetail) {
  const head = pageHead({
    path,
    title: post.title,
    description: post.description,
    contentLocale: post.locale,
    article: { publishedTime: post.published_at, modifiedTime: post.updated_at }
  })

  return {
    ...head,
    scripts: [
      jsonLd({
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        url: localizedUrl(path, post.locale),
        inLanguage: post.locale,
        keywords: post.tags.join(", "),
        ...(post.published_at ? { datePublished: post.published_at } : {}),
        ...(post.updated_at ? { dateModified: post.updated_at } : {}),
        image: ogCardUrl(path, post.locale),
        author: personJsonLd()
      })
    ]
  }
}

import { jsonLd, ogCardUrl, pageHead, personJsonLd } from "@/config/seo.config"

import { localizedUrl } from "@/helpers/localized-url"

import type { BlogPostDetail } from "@/features/blog/schemas/blog-post.schema"
import { locales } from "@/paraglide/runtime.js"
import type { Locale } from "@/paraglide/runtime.js"

/** The site has two locales, so a translation is always in the other one. */
function otherLocale(locale: Locale): Locale {
  return locales.find((item) => item !== locale) ?? locale
}

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
    // The translation lives in the same folder (`/blog`, `/notes`) under the other language.
    translation: post.translation_slug
      ? {
          path: `${path.slice(0, path.lastIndexOf("/"))}${post.translation_slug}`,
          locale: otherLocale(post.locale)
        }
      : undefined,
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

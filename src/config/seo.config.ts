import { me } from "@/constants/me.constants"
import { siteConfig } from "@/config/site.config"

import { canonicalLink, hreflangLinks, localizedUrl } from "@/helpers/localized-url"

import * as m from "@/paraglide/messages.js"
import { getLocale } from "@/paraglide/runtime.js"
import type { Locale } from "@/paraglide/runtime.js"

const OG_LOCALES: Record<Locale, string> = { en: "en_US", tr: "tr_TR" }

/**
 * Site-wide tags from the root route. Pages override title, description and the share fields
 * through pageHead(); the router keeps the deepest route's tag for each name and property.
 */
export function seoHeadMeta() {
  const description = m.site_description()

  return [
    { title: me.name },
    { name: "description", content: description },
    { name: "author", content: me.name },
    { name: "robots", content: "index, follow" },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: OG_LOCALES[getLocale()] },
    { property: "og:site_name", content: me.name },
    { property: "og:title", content: me.name },
    { property: "og:description", content: description },
    { property: "og:image", content: siteConfig.ogImage },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:creator", content: `@${me.handle}` },
    { name: "twitter:title", content: me.name },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: siteConfig.ogImage }
  ]
}

type PageSeo = {
  /** The page's path without the locale prefix, such as `/blog` or `/blog/barrel-file`. */
  path: string
  title: string
  description: string
  /** The home page's title stands alone; every other page gets " · Ömer Gülçiçek". */
  standaloneTitle?: boolean
  /** A site path or absolute URL of a 1200×630 image; the page's generated card otherwise. */
  image?: string | null
  /** Posts exist in one language: canonical points there and no alternates are declared. */
  contentLocale?: Locale
  /** Pages still in draft stay out of search results. */
  noindex?: boolean
  article?: { publishedTime: string | null; modifiedTime: string | null }
}

/** The generated 1200×630 share card of a page, served by the `/og/$` route. */
export function ogCardUrl(path: string, locale: Locale) {
  return `${siteConfig.url}/og/${locale}${path === "/" ? "" : path}`
}

/** Absolute URL of a site path or an already absolute URL. */
export function absoluteUrl(pathOrUrl: string) {
  if (/^https?:\/\//.test(pathOrUrl)) return pathOrUrl
  return `${siteConfig.url}/${pathOrUrl.replace(/^\//, "")}`
}

/** Title, description, share tags, canonical and hreflang of one page, for its route's head(). */
export function pageHead(seo: PageSeo) {
  const title = seo.standaloneTitle ? seo.title : `${seo.title} · ${me.name}`
  const locale = seo.contentLocale ?? getLocale()
  const url = localizedUrl(seo.path, locale)
  const image = seo.image ? absoluteUrl(seo.image) : ogCardUrl(seo.path, locale)

  const meta = [
    { title },
    { name: "description", content: seo.description },
    ...(seo.noindex ? [{ name: "robots", content: "noindex, follow" }] : []),
    { property: "og:type", content: seo.article ? "article" : "website" },
    { property: "og:url", content: url },
    { property: "og:locale", content: OG_LOCALES[locale] },
    { property: "og:title", content: title },
    { property: "og:description", content: seo.description },
    { property: "og:image", content: image },
    // Generated cards have a known size; a custom image comes in its own.
    ...(seo.image
      ? []
      : [
          { property: "og:image:width", content: "1200" },
          { property: "og:image:height", content: "630" }
        ]),
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: seo.description },
    { name: "twitter:image", content: image },
    ...(seo.article
      ? [
          ...(seo.article.publishedTime
            ? [{ property: "article:published_time", content: seo.article.publishedTime }]
            : []),
          ...(seo.article.modifiedTime
            ? [{ property: "article:modified_time", content: seo.article.modifiedTime }]
            : [])
          // No article:tag: the router keeps one tag per property, so tags live in the JSON-LD.
        ]
      : [])
  ]

  const links = seo.contentLocale
    ? [{ rel: "canonical", href: url }]
    : [canonicalLink(seo.path), ...hreflangLinks(seo.path)]

  return { meta, links }
}

/** A JSON-LD block for head().scripts; `<` is escaped so the data can never close the tag. */
export function jsonLd(data: Record<string, unknown>) {
  return {
    type: "application/ld+json",
    children: JSON.stringify({ "@context": "https://schema.org", ...data }).replaceAll(
      "<",
      "\\u003c"
    )
  }
}

/** Me as a schema.org Person, shared by the home page and every post's author. */
export function personJsonLd() {
  const { links } = me

  return {
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: me.name,
    url: siteConfig.url,
    jobTitle: me.title[getLocale()],
    image: absoluteUrl(me.photo.src),
    sameAs: [links.github, links.linkedin, links.x, links.npm, links.virastack]
  }
}

/** The home page: name and title as the whole title, plus the site and its author as JSON-LD. */
export function homeHead() {
  const head = pageHead({
    path: "/",
    title: `${me.name} · ${me.title[getLocale()]}`,
    description: m.site_description(),
    standaloneTitle: true
  })

  return {
    ...head,
    scripts: [
      jsonLd({
        "@graph": [
          {
            "@type": "WebSite",
            "@id": `${siteConfig.url}/#website`,
            name: me.name,
            url: siteConfig.url,
            inLanguage: getLocale(),
            publisher: { "@id": `${siteConfig.url}/#person` }
          },
          personJsonLd()
        ]
      })
    ]
  }
}

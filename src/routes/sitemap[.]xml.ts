import { createFileRoute } from "@tanstack/react-router"

import { localizedUrl } from "@/helpers/localized-url"

import { getSitemapPosts } from "@/features/blog/api/get-sitemap-posts.api"
import { baseLocale, locales } from "@/paraglide/runtime.js"

/** Pages listed in both languages. */
const PAGES = [
  "/",
  "/blog",
  "/notes",
  "/virastack",
  "/projects",
  "/experiences",
  "/bookmarks",
  "/library",
  "/films",
  "/music",
  "/about",
  "/journey",
  "/uses"
]

const POST_FOLDERS = { technical: "/blog", personal: "/notes" } as const

const escapeXml = (value: string) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")

function urlEntry(loc: string, extra: string) {
  return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n${extra}  </url>`
}

/** Both language versions of a page point at each other, plus x-default for the base locale. */
function pageEntries(path: string) {
  const alternates = [
    ...locales.map(
      (locale) =>
        `    <xhtml:link rel="alternate" hreflang="${locale}" href="${escapeXml(localizedUrl(path, locale))}"/>\n`
    ),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(localizedUrl(path, baseLocale))}"/>\n`
  ].join("")

  return locales.map((locale) => urlEntry(localizedUrl(path, locale), alternates))
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        // Each post is listed once, at its own language's URL.
        const posts = await getSitemapPosts().catch((error: unknown) => {
          console.warn("Sitemap posts could not be loaded:", error)
          return []
        })
        const postPath = (category: keyof typeof POST_FOLDERS, slug: string) =>
          `${POST_FOLDERS[category]}${slug.startsWith("/") ? slug : `/${slug}`}`
        const postEntries = posts.map((post) => {
          const path = postPath(post.category, post.slug)
          const lastmod = post.updated_at ?? post.published_at
          // A translated post lists both versions, like the pages do.
          const translation = post.translation_slug
            ? posts.find((other) => other.slug === post.translation_slug)
            : undefined
          const alternates = translation
            ? [post, translation]
                .map(
                  (version) =>
                    `    <xhtml:link rel="alternate" hreflang="${version.locale}" href="${escapeXml(localizedUrl(postPath(version.category, version.slug), version.locale))}"/>\n`
                )
                .join("")
            : ""
          return urlEntry(
            localizedUrl(path, post.locale),
            `${lastmod ? `    <lastmod>${new Date(lastmod).toISOString()}</lastmod>\n` : ""}${alternates}`
          )
        })

        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${[...PAGES.flatMap(pageEntries), ...postEntries].join("\n")}
</urlset>
`

        return new Response(body, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600"
          }
        })
      }
    }
  }
})

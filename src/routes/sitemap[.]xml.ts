import { createFileRoute } from "@tanstack/react-router"

import { localizedUrl } from "@/helpers/localized-url"

import { getSitemapPosts } from "@/features/blog/api/get-sitemap-posts.api"
import { baseLocale, locales } from "@/paraglide/runtime.js"

/** Pages listed in both languages. Music is left out while it is a draft (noindex). */
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
        // Posts are written in one language, so each is listed once, at that language's URL.
        const posts = await getSitemapPosts().catch((error: unknown) => {
          console.warn("Sitemap posts could not be loaded:", error)
          return []
        })
        const postEntries = posts.map((post) => {
          const path = `${POST_FOLDERS[post.category]}${post.slug.startsWith("/") ? post.slug : `/${post.slug}`}`
          const lastmod = post.updated_at ?? post.published_at
          return urlEntry(
            localizedUrl(path, post.locale),
            lastmod ? `    <lastmod>${new Date(lastmod).toISOString()}</lastmod>\n` : ""
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

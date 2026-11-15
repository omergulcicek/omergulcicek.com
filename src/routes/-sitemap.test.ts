// @vitest-environment node
import { http, HttpResponse } from "msw"
import { describe, expect, it, vi } from "vitest"

import { getSitePages } from "@/constants/site-nav.constants"
import { siteConfig } from "@/config/site.config"

import { RETIRED_POSTS_FILTER } from "@/features/blog/constants/retired-posts.constants"
import { Route } from "@/routes/sitemap[.]xml"
import { server } from "@/test/server"

// env.ts reads these once on import, so they are set before any module loads.
vi.hoisted(() => {
  process.env.SUPABASE_URL = "https://supabase.test"
  process.env.SUPABASE_ANON_KEY = "anon-key"
})

const POSTS_URL = "https://supabase.test/rest/v1/blog_posts"

type Handler = () => Promise<Response>

async function getSitemap() {
  const get = (Route.options.server?.handlers as { GET?: Handler } | undefined)?.GET
  if (!get) throw new Error("The sitemap route has no GET handler")
  const response = await get()
  return { response, xml: await response.text() }
}

/** Each `<url>` block with its location, lastmod and alternates. */
function entries(xml: string) {
  return [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(([, block = ""]) => ({
    loc: block.match(/<loc>(.*?)<\/loc>/)?.[1],
    lastmod: block.match(/<lastmod>(.*?)<\/lastmod>/)?.[1],
    alternates: [...block.matchAll(/hreflang="([^"]+)" href="([^"]+)"/g)].map(([, lang, href]) => [
      lang,
      href
    ])
  }))
}

describe("sitemap.xml", () => {
  it("lists every page in both languages and each post once, at its own language", async () => {
    let query: URLSearchParams | undefined
    server.use(
      http.get(POSTS_URL, ({ request }) => {
        query = new URL(request.url).searchParams
        return HttpResponse.json([
          {
            slug: "/barrel-file",
            category: "technical",
            locale: "tr",
            published_at: "2026-10-31T09:00:00Z",
            updated_at: "2026-11-02T09:00:00Z",
            translation_slug: "/barrel-files"
          },
          {
            slug: "/barrel-files",
            category: "technical",
            locale: "en",
            published_at: "2026-11-01T09:00:00Z",
            updated_at: null,
            translation_slug: "/barrel-file"
          },
          {
            slug: "/kitap-notlari",
            category: "personal",
            locale: "tr",
            published_at: null,
            updated_at: null,
            translation_slug: null
          }
        ])
      })
    )

    const { response, xml } = await getSitemap()

    expect(response.headers.get("Content-Type")).toContain("application/xml")
    expect(xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>')).toBe(true)
    // Only published posts, without the retired ones.
    expect(query?.get("published")).toBe("eq.true")
    expect(query?.get("slug")).toBe(RETIRED_POSTS_FILTER)

    const list = entries(xml)
    const locs = list.map((entry) => entry.loc)
    expect(new Set(locs).size).toBe(locs.length)
    expect(list).toHaveLength(getSitePages().length * 2 + 3)
    expect(locs).toContain(`${siteConfig.url}/`)
    expect(locs).toContain(`${siteConfig.url}/en`)
    expect(locs).toContain(`${siteConfig.url}/blog`)
    expect(locs).toContain(`${siteConfig.url}/en/blog`)

    const tr = list.find((entry) => entry.loc === `${siteConfig.url}/blog/barrel-file`)
    expect(tr?.lastmod).toBe("2026-11-02T09:00:00.000Z")
    expect(tr?.alternates).toEqual([
      ["tr", `${siteConfig.url}/blog/barrel-file`],
      ["en", `${siteConfig.url}/en/blog/barrel-files`]
    ])
    const en = list.find((entry) => entry.loc === `${siteConfig.url}/en/blog/barrel-files`)
    expect(en?.lastmod).toBe("2026-11-01T09:00:00.000Z")

    const note = list.find((entry) => entry.loc === `${siteConfig.url}/notes/kitap-notlari`)
    expect(note).toBeDefined()
    expect(note?.lastmod).toBeUndefined()
    expect(note?.alternates).toEqual([])
  })

  it("gives every page alternates for both languages and x-default", async () => {
    server.use(http.get(POSTS_URL, () => HttpResponse.json([])))

    const { xml } = await getSitemap()

    const blog = entries(xml).find((entry) => entry.loc === `${siteConfig.url}/en/blog`)
    expect(blog?.alternates).toEqual([
      ["tr", `${siteConfig.url}/blog`],
      ["en", `${siteConfig.url}/en/blog`],
      ["x-default", `${siteConfig.url}/blog`]
    ])
  })

  it("still serves the pages when Supabase is down", async () => {
    vi.spyOn(console, "warn").mockImplementation(() => {})
    server.use(http.get(POSTS_URL, () => HttpResponse.json(null, { status: 503 })))

    const { response, xml } = await getSitemap()

    expect(response.status).toBe(200)
    expect(entries(xml)).toHaveLength(getSitePages().length * 2)
    expect(console.warn).toHaveBeenCalled()
  })

  it("does not list a row with an unexpected shape", async () => {
    vi.spyOn(console, "warn").mockImplementation(() => {})
    server.use(http.get(POSTS_URL, () => HttpResponse.json([{ slug: "/x", category: "other" }])))

    const { response, xml } = await getSitemap()

    expect(response.status).toBe(200)
    expect(xml).not.toContain("/x<")
  })
})

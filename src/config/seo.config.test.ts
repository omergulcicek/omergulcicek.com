import { describe, expect, it } from "vitest"

import { absoluteUrl, jsonLd, pageHead } from "@/config/seo.config"
import { siteConfig } from "@/config/site.config"

const content = (meta: { name?: string; property?: string; content?: string }[], key: string) =>
  meta.find((tag) => tag.name === key || tag.property === key)?.content

describe("pageHead", () => {
  it("adds the name to the title and declares both languages", () => {
    const { meta, links } = pageHead({ path: "/blog", title: "Blog", description: "Posts" })

    expect(meta[0]).toEqual({ title: "Blog · Ömer Gülçiçek" })
    expect(content(meta, "og:title")).toBe("Blog · Ömer Gülçiçek")
    expect(content(meta, "og:image")).toBe(`${siteConfig.url}/og/tr/blog`)
    expect(links.map((link) => link.rel)).toEqual([
      "canonical",
      "alternate",
      "alternate",
      "alternate"
    ])
  })

  it("points a single-language post at its own language, without alternates", () => {
    const { links, meta } = pageHead({
      path: "/blog/barrel-file",
      title: "Barrel File",
      description: "…",
      contentLocale: "en",
      image: "blog/2026/cover.jpg",
      article: { publishedTime: "2026-10-31T00:00:00Z", modifiedTime: null }
    })

    expect(links).toEqual([{ rel: "canonical", href: `${siteConfig.url}/en/blog/barrel-file` }])
    expect(content(meta, "og:type")).toBe("article")
    expect(content(meta, "og:image")).toBe(`${siteConfig.url}/blog/2026/cover.jpg`)
    expect(content(meta, "article:modified_time")).toBeUndefined()
  })

  it("keeps drafts out of search results", () => {
    const { meta } = pageHead({ path: "/music", title: "Müzik", description: "…", noindex: true })

    expect(content(meta, "robots")).toBe("noindex, follow")
  })
})

describe("absoluteUrl", () => {
  it("joins site paths with or without a leading slash and keeps absolute URLs", () => {
    expect(absoluteUrl("/img/a.webp")).toBe(`${siteConfig.url}/img/a.webp`)
    expect(absoluteUrl("img/a.webp")).toBe(`${siteConfig.url}/img/a.webp`)
    expect(absoluteUrl("https://cdn.example.com/a.png")).toBe("https://cdn.example.com/a.png")
  })
})

describe("jsonLd", () => {
  it("escapes < so the data cannot close the script tag", () => {
    expect(jsonLd({ name: "</script>" }).children).not.toContain("</script>")
  })
})

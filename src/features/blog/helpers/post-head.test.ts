import { describe, expect, it } from "vitest"

import { siteConfig } from "@/config/site.config"

import { postDetail } from "@/features/blog/helpers/blog-test-fixtures"
import { postHead } from "@/features/blog/helpers/post-head"

const meta = (head: ReturnType<typeof postHead>, key: string) =>
  head.meta.find((tag) => ("property" in tag ? tag.property : tag.name) === key)?.content

const ld = (head: ReturnType<typeof postHead>) =>
  JSON.parse(head.scripts[0]?.children ?? "{}") as Record<string, unknown>

describe("postHead", () => {
  it("points an English post at its English URL even under the Turkish prefix", () => {
    const head = postHead("/blog/barrel-files", postDetail({ locale: "en" }))

    expect(head.links[0]).toEqual({
      rel: "canonical",
      href: `${siteConfig.url}/en/blog/barrel-files`
    })
    expect(meta(head, "og:url")).toBe(`${siteConfig.url}/en/blog/barrel-files`)
    expect(meta(head, "og:locale")).toBe("en_US")
    expect(meta(head, "og:image")).toBe(`${siteConfig.url}/og/en/blog/barrel-files`)
  })

  it("declares a translation in the same folder, with x-default on the Turkish one", () => {
    const head = postHead(
      "/notes/kitap-notlari",
      postDetail({ locale: "tr", translation_slug: "/book-notes" })
    )

    expect(head.links.filter((link) => link.rel === "alternate" && "hrefLang" in link)).toEqual([
      { rel: "alternate", hrefLang: "tr", href: `${siteConfig.url}/notes/kitap-notlari` },
      { rel: "alternate", hrefLang: "en", href: `${siteConfig.url}/en/notes/book-notes` },
      { rel: "alternate", hrefLang: "x-default", href: `${siteConfig.url}/notes/kitap-notlari` }
    ])
  })

  it("declares no language alternates for a post without a translation", () => {
    const head = postHead("/blog/barrel-file", postDetail({ translation_slug: null }))

    expect(head.links.some((link) => "hrefLang" in link)).toBe(false)
  })

  it("links the Markdown version at the post's own language", () => {
    const head = postHead("/blog/barrel-files", postDetail({ locale: "en" }))

    expect(head.links).toContainEqual({
      rel: "alternate",
      type: "text/markdown",
      href: `${siteConfig.url}/en/blog/barrel-files.md`
    })
  })

  it("describes the post as a BlogPosting with its dates and tags", () => {
    const head = postHead(
      "/blog/barrel-file",
      postDetail({
        tags: ["React", "Mimari"],
        published_at: "2026-10-31T09:00:00Z",
        updated_at: "2026-11-02T09:00:00Z"
      })
    )

    expect(ld(head)).toMatchObject({
      "@type": "BlogPosting",
      headline: "Barrel File",
      inLanguage: "tr",
      keywords: "React, Mimari",
      datePublished: "2026-10-31T09:00:00Z",
      dateModified: "2026-11-02T09:00:00Z",
      url: `${siteConfig.url}/blog/barrel-file`
    })
    expect(meta(head, "article:published_time")).toBe("2026-10-31T09:00:00Z")
  })

  it("leaves out dates a draft does not have, instead of writing null", () => {
    const head = postHead("/blog/barrel-file", postDetail({ published_at: null, updated_at: null }))

    expect(ld(head)).not.toHaveProperty("datePublished")
    expect(ld(head)).not.toHaveProperty("dateModified")
    expect(meta(head, "article:published_time")).toBeUndefined()
  })

  it("keeps a title with </script> from closing the JSON-LD tag", () => {
    const head = postHead("/blog/x", postDetail({ title: "</script><script>alert(1)" }))

    expect(head.scripts[0]?.children).not.toContain("</script>")
    expect(ld(head).headline).toBe("</script><script>alert(1)")
  })
})

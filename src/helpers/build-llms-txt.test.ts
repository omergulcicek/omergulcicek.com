import { describe, expect, it } from "vitest"

import { buildLlmsFullTxt, buildLlmsTxt } from "@/helpers/build-llms-txt"

const post = {
  title: "Barrel File",
  url: "https://omergulcicek.com/blog/barrel-file",
  description: "Gerekli mi?",
  date: "2026-10-31T12:00:00+00:00",
  locale: "en",
  tags: ["TypeScript"]
}

describe("buildLlmsTxt", () => {
  it("starts with the name and lists posts with their date and a non-Turkish language", () => {
    const text = buildLlmsTxt({
      name: "Ömer Gülçiçek",
      role: "Frontend Mühendisi",
      summary: "Kişisel site",
      contact: ["Email: iletisim@omergulcicek.com"],
      pages: [{ title: "Blog", url: "https://omergulcicek.com/blog", description: "Yazılar" }],
      posts: [post],
      notes: [],
      projects: [],
      links: []
    })

    expect(text.startsWith("# Ömer Gülçiçek · Frontend Mühendisi\n\n> Kişisel site")).toBe(true)
    expect(text).toContain(
      "- [Barrel File](https://omergulcicek.com/blog/barrel-file): Gerekli mi? (2026-10-31, en)"
    )
  })
})

describe("buildLlmsFullTxt", () => {
  it("separates posts and gives each its metadata", () => {
    const text = buildLlmsFullTxt({ title: "Blog", summary: "Yazılar" }, [
      { ...post, body: "Gövde" }
    ])

    expect(text).toContain("1 posts, newest first.")
    expect(text).toContain("---\n\n# Barrel File\n\nURL: https://omergulcicek.com/blog/barrel-file")
    expect(text).toContain("Tags: TypeScript\n\nGövde")
  })
})

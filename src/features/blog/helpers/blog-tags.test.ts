import { describe, expect, it } from "vitest"

import { filterPostsByTag, getBlogTags, tagLabel, tagSlug } from "@/features/blog/helpers/blog-tags"

describe("getBlogTags", () => {
  it("counts tags and sorts by count, then alphabetically", () => {
    const posts = [{ tags: ["React", "CSS"] }, { tags: ["CSS"] }, { tags: ["Araç"] }]

    expect(getBlogTags(posts, "tr")).toEqual([
      { tag: "CSS", slug: "css", count: 2 },
      { tag: "Araç", slug: "arac", count: 1 },
      { tag: "React", slug: "react", count: 1 }
    ])
  })
})

describe("filterPostsByTag", () => {
  const posts = [{ tags: ["Next.js"] }, { tags: ["CSS"] }]

  it("keeps the posts with the tag", () => {
    expect(filterPostsByTag(posts, "next-js", "tr")).toEqual([{ tags: ["Next.js"] }])
  })

  it("returns every post without a slug", () => {
    expect(filterPostsByTag(posts, undefined, "tr")).toEqual(posts)
  })
})

describe("tag labels", () => {
  it("shows the English label and slug in English, the stored tag in Turkish", () => {
    expect(tagLabel("Yapay Zekâ", "en")).toBe("AI")
    expect(tagSlug("Yapay Zekâ", "en")).toBe("ai")
    expect(tagLabel("Yapay Zekâ", "tr")).toBe("Yapay Zekâ")
    expect(tagSlug("Yapay Zekâ", "tr")).toBe("yapay-zeka")
    expect(tagLabel("React", "en")).toBe("React")
  })

  it("filters by the English slug in English", () => {
    expect(filterPostsByTag([{ tags: ["Yapay Zekâ"] }, { tags: ["CSS"] }], "ai", "en")).toEqual([
      { tags: ["Yapay Zekâ"] }
    ])
  })
})

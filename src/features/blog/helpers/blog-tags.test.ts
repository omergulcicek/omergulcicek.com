import { describe, expect, it } from "vitest"

import { EN_TAG_LABELS } from "@/features/blog/constants/blog-tag-labels.constants"
import { BLOG_TAG_ORDER } from "@/features/blog/constants/blog-tag-order.constants"
import {
  filterPostsByTag,
  getBlogTags,
  getFilterTags,
  sortTags,
  tagLabel,
  tagSlug
} from "@/features/blog/helpers/blog-tags"

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

describe("sortTags", () => {
  it("puts tags in BLOG_TAG_ORDER, unknown tags last in their stored order", () => {
    expect(sortTags(["Performans", "Bilinmeyen", "CSS", "ViraStack", "Diğer"])).toEqual([
      "ViraStack",
      "CSS",
      "Performans",
      "Bilinmeyen",
      "Diğer"
    ])
  })

  it("knows every tag that has an English label", () => {
    const ordered: readonly string[] = BLOG_TAG_ORDER
    expect(Object.keys(EN_TAG_LABELS).filter((tag) => !ordered.includes(tag))).toEqual([])
  })
})

describe("getFilterTags", () => {
  const tags = [
    { tag: "CSS", slug: "css", count: 3 },
    { tag: "Araç", slug: "arac", count: 1 },
    { tag: "Kitap", slug: "kitap", count: 1 }
  ]

  it("leaves out tags on a single post", () => {
    expect(getFilterTags(tags, undefined).map((tag) => tag.slug)).toEqual(["css"])
  })

  it("keeps a single-post tag while it is the selected filter", () => {
    expect(getFilterTags(tags, "arac").map((tag) => tag.slug)).toEqual(["css", "arac"])
  })
})

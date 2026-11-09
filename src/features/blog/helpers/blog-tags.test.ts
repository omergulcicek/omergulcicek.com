import { describe, expect, it } from "vitest"

import { filterPostsByTag, getBlogTags } from "@/features/blog/helpers/blog-tags"

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
    expect(filterPostsByTag(posts, "next-js")).toEqual([{ tags: ["Next.js"] }])
  })

  it("returns every post without a slug", () => {
    expect(filterPostsByTag(posts)).toEqual(posts)
  })
})

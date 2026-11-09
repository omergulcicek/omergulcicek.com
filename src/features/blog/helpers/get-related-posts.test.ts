import { describe, expect, it } from "vitest"

import { getRelatedPosts } from "@/features/blog/helpers/get-related-posts"

const posts = [
  { slug: "/a", tags: ["React"] },
  { slug: "/b", tags: ["React", "TanStack"] },
  { slug: "/current", tags: ["React", "TanStack"] },
  { slug: "/c", tags: ["CSS"] },
  { slug: "/d", tags: ["React"] }
]

describe("getRelatedPosts", () => {
  it("ranks by shared tags, then keeps the newest-first order", () => {
    const related = getRelatedPosts(posts, { slug: "current", tags: ["React", "TanStack"] })

    expect(related.map((post) => post.slug)).toEqual(["/b", "/a", "/d"])
  })

  it("skips excluded posts and posts with no shared tag", () => {
    const related = getRelatedPosts(posts, { slug: "/current", tags: ["React"] }, ["b"], 5)

    expect(related.map((post) => post.slug)).toEqual(["/a", "/d"])
  })
})

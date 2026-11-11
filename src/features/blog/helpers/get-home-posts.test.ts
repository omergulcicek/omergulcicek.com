import { describe, expect, it } from "vitest"

import { getHomePosts } from "@/features/blog/helpers/get-home-posts"

const post = (slug: string, featured_rank: number | null = null) => ({ slug, featured_rank })

describe("getHomePosts", () => {
  it("lists the featured posts by rank, not by date, and the two latest posts that are not featured", () => {
    // Newest first, as the API returns them; the ranks put the oldest featured post first.
    const posts = [
      post("/f3", 3),
      post("/a"),
      post("/f2", 2),
      post("/b"),
      post("/c"),
      post("/f1", 1)
    ]
    const { featured, latest } = getHomePosts(posts)

    expect(featured.map((item) => item.slug)).toEqual(["/f1", "/f2", "/f3"])
    expect(latest.map((item) => item.slug)).toEqual(["/a", "/b"])
  })

  it("keeps the three best ranks when more posts are ranked", () => {
    const posts = [post("/f4", 4), post("/f1", 1), post("/f2", 2), post("/f3", 3), post("/a")]
    const { featured } = getHomePosts(posts)

    expect(featured.map((item) => item.slug)).toEqual(["/f1", "/f2", "/f3"])
  })

  it("fills the rest of the five rows with latest posts when fewer are featured", () => {
    const posts = [post("/a"), post("/f1", 1), post("/b"), post("/c"), post("/d"), post("/e")]
    const { featured, latest } = getHomePosts(posts)

    expect(featured.map((item) => item.slug)).toEqual(["/f1"])
    expect(latest.map((item) => item.slug)).toEqual(["/a", "/b", "/c", "/d"])
  })

  it("falls back to the five latest posts when none is featured", () => {
    const posts = ["/a", "/b", "/c", "/d", "/e", "/f"].map((slug) => post(slug))
    const { featured, latest } = getHomePosts(posts)

    expect(featured).toEqual([])
    expect(latest.map((item) => item.slug)).toEqual(["/a", "/b", "/c", "/d", "/e"])
  })
})

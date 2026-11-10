import { describe, expect, it } from "vitest"

import { getHomePosts } from "@/features/blog/helpers/get-home-posts"

const post = (slug: string, featured = false) => ({ slug, featured })

describe("getHomePosts", () => {
  it("lists three featured posts and the two latest posts that are not featured", () => {
    // The newest post is featured, so the latest list skips it.
    const posts = [post("/f1", true), post("/a"), post("/f2", true), post("/b"), post("/c")]
    const { featured, latest } = getHomePosts([...posts, post("/f3", true), post("/f4", true)])

    expect(featured.map((item) => item.slug)).toEqual(["/f1", "/f2", "/f3"])
    expect(latest.map((item) => item.slug)).toEqual(["/a", "/b"])
  })

  it("fills the rest of the five rows with latest posts when fewer are featured", () => {
    const posts = [post("/a"), post("/f1", true), post("/b"), post("/c"), post("/d"), post("/e")]
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

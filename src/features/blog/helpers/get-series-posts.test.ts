import { describe, expect, it } from "vitest"

import { getSeriesPosts } from "@/features/blog/helpers/get-series-posts"

// Newest first, as the list query returns them.
const posts = [
  { slug: "/c", series: "site", series_order: 3 },
  { slug: "/solo", series: "alone", series_order: 1 },
  { slug: "/x", series: null, series_order: null },
  { slug: "/a", series: "site", series_order: 1 },
  { slug: "/b", series: "site", series_order: 2 }
]

describe("getSeriesPosts", () => {
  it("returns the series in series order with the current post's position", () => {
    const result = getSeriesPosts(posts, "b")

    expect(result?.series).toBe("site")
    expect(result?.posts.map((post) => post.slug)).toEqual(["/a", "/b", "/c"])
    expect(result?.position).toBe(2)
  })

  it("returns null outside a series or for a series of one", () => {
    expect(getSeriesPosts(posts, "/x")).toBeNull()
    expect(getSeriesPosts(posts, "/solo")).toBeNull()
    expect(getSeriesPosts(posts, "/missing")).toBeNull()
  })
})

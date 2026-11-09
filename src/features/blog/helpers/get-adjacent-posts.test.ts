import { describe, expect, it } from "vitest"

import { getAdjacentPosts } from "@/features/blog/helpers/get-adjacent-posts"

const posts = [{ slug: "/newest" }, { slug: "/middle" }, { slug: "/oldest" }]

describe("getAdjacentPosts", () => {
  it("returns the older post as previous and the newer one as next", () => {
    expect(getAdjacentPosts(posts, "middle")).toEqual({
      previous: { slug: "/oldest" },
      next: { slug: "/newest" }
    })
  })

  it("has no next for the newest post and no previous for the oldest", () => {
    expect(getAdjacentPosts(posts, "newest").next).toBeUndefined()
    expect(getAdjacentPosts(posts, "oldest").previous).toBeUndefined()
  })

  it("returns neither for an unknown slug", () => {
    expect(getAdjacentPosts(posts, "missing")).toEqual({ previous: undefined, next: undefined })
  })
})

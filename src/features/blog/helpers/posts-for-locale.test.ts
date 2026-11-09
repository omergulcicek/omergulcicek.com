import { describe, expect, it } from "vitest"

import { postsForLocale } from "@/features/blog/helpers/posts-for-locale"

const posts = [
  { slug: "/a", locale: "tr" as const },
  { slug: "/b", locale: "en" as const },
  { slug: "/c", locale: "tr" as const }
]

describe("postsForLocale", () => {
  it("lists only the locale's own blog posts", () => {
    expect(postsForLocale(posts, "technical", "en").map(({ slug }) => slug)).toEqual(["/b"])
    expect(postsForLocale(posts, "technical", "tr").map(({ slug }) => slug)).toEqual(["/a", "/c"])
  })

  it("lists every note in every locale", () => {
    expect(postsForLocale(posts, "personal", "en")).toHaveLength(3)
  })
})

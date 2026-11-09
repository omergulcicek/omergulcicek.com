import { describe, expect, it } from "vitest"

import { groupPostsByYear } from "@/features/blog/helpers/group-posts-by-year"
import type { BlogPostListItem } from "@/features/blog/schemas/blog-post.schema"

const post = (slug: string, published_at: string | null): BlogPostListItem => ({
  slug,
  title: slug,
  tags: [],
  locale: "tr",
  published_at
})

describe("groupPostsByYear", () => {
  it("groups by year and keeps the newest-first order", () => {
    const groups = groupPostsByYear([
      post("c", "2026-11-05T00:00:00Z"),
      post("b", "2026-01-10T00:00:00Z"),
      post("a", "2025-12-31T00:00:00Z"),
      post("draft", null)
    ])

    expect(groups.map((group) => [group.year, group.posts.map((p) => p.slug)])).toEqual([
      [2026, ["c", "b"]],
      [2025, ["a"]],
      [null, ["draft"]]
    ])
  })
})

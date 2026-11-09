import { existsSync } from "node:fs"

import { describe, expect, it } from "vitest"

import data from "@/features/bookmarks/constants/bookmarks.json"
import { bookmarksSchema } from "@/features/bookmarks/schemas/bookmark.schema"

describe("bookmarks.json", () => {
  it("matches the schema", () => {
    expect(() => bookmarksSchema.parse(data)).not.toThrow()
  })

  it("has unique ids and an image file for every entry", () => {
    expect(new Set(data.map((item) => item.id)).size).toBe(data.length)
    expect(data.filter((item) => !existsSync(`public${item.image}`))).toEqual([])
  })
})

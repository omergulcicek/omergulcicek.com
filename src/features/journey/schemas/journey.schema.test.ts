import { existsSync } from "node:fs"

import { describe, expect, it } from "vitest"

import data from "@/features/journey/constants/journey.json"
import { journeySchema } from "@/features/journey/schemas/journey.schema"

describe("journey.json", () => {
  it("matches the schema", () => {
    expect(() => journeySchema.parse(data)).not.toThrow()
  })

  it("is newest first, with unique ids and existing images", () => {
    const years = data.map((entry) => entry.year)

    expect(years).toEqual([...years].sort((a, b) => b - a))
    expect(new Set(data.map((entry) => entry.id)).size).toBe(data.length)
    expect(data.filter((entry) => entry.image && !existsSync(`public${entry.image.src}`))).toEqual(
      []
    )
  })
})

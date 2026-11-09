import { existsSync } from "node:fs"

import { describe, expect, it } from "vitest"

import data from "@/features/films/constants/films.json"
import { filmsSchema } from "@/features/films/schemas/film.schema"

describe("films.json", () => {
  it("matches the schema", () => {
    expect(() => filmsSchema.parse(data)).not.toThrow()
  })

  it("has unique ids and an image file for every entry", () => {
    expect(new Set(data.map((film) => film.id)).size).toBe(data.length)
    expect(data.filter((film) => !existsSync(`public${film.image}`))).toEqual([])
  })
})

import { existsSync } from "node:fs"

import { describe, expect, it } from "vitest"

import genres from "@/features/library/constants/book-genres.json"
import books from "@/features/library/constants/books.json"
import { bookGenresSchema, booksSchema } from "@/features/library/schemas/book.schema"

describe("books.json", () => {
  it("matches the schemas", () => {
    expect(() => booksSchema.parse(books)).not.toThrow()
    expect(() => bookGenresSchema.parse(genres)).not.toThrow()
  })

  it("uses known genres, unique ids and existing cover files", () => {
    const genreIds = new Set(genres.map((genre) => genre.id))

    expect(books.filter((book) => !genreIds.has(book.genre))).toEqual([])
    expect(new Set(books.map((book) => book.id)).size).toBe(books.length)
    expect(books.filter((book) => book.image && !existsSync(`public${book.image}`))).toEqual([])
  })
})

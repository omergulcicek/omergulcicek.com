import { describe, expect, it } from "vitest"

import { sortBooks } from "@/features/library/helpers/sort-books"

describe("sortBooks", () => {
  it("sorts by first author, then title, with authorless books last", () => {
    const books = [
      { title: "Set", authors: [] },
      { title: "Zübde", authors: ["Şükrü Hanioğlu"] },
      { title: "Bir", authors: ["İlber Ortaylı"] },
      { title: "Ahir", authors: ["İlber Ortaylı"] },
      { title: "Cihan", authors: ["Halil İnalcık"] }
    ]

    expect(sortBooks(books, "tr").map((book) => book.title)).toEqual([
      "Cihan",
      "Ahir",
      "Bir",
      "Zübde",
      "Set"
    ])
  })
})

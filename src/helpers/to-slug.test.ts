import { describe, expect, it } from "vitest"

import { toSlug } from "@/helpers/to-slug"

describe("toSlug", () => {
  it.each([
    ["CSS", "css"],
    ["Next.js", "next-js"],
    ["Yapay Zekâ", "yapay-zeka"],
    ["Yıl Değerlendirmesi", "yil-degerlendirmesi"],
    ["Film ve Dizi", "film-ve-dizi"],
    ["Işık", "isik"]
  ])("turns %s into %s", (label, slug) => {
    expect(toSlug(label)).toBe(slug)
  })
})

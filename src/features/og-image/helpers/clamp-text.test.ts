import { describe, expect, it } from "vitest"

import { clampText } from "@/features/og-image/helpers/clamp-text"

describe("clampText", () => {
  it("leaves short text alone", () => {
    expect(clampText("Kısa metin", 20)).toBe("Kısa metin")
  })

  it("cuts at the last whole word and drops trailing punctuation", () => {
    expect(clampText("React, Next.js ve TanStack üzerine yazılar, açık kaynak", 46)).toBe(
      "React, Next.js ve TanStack üzerine yazılar…"
    )
  })

  it("cuts inside a word when no space is near", () => {
    expect(clampText("Süperkalifragilistikekspiyalidoşes", 10)).toBe("Süperkali…")
  })
})

import { describe, expect, it } from "vitest"

import { estimateReadingMinutes } from "@/features/blog/helpers/estimate-reading-minutes"

const words = (count: number) => Array.from({ length: count }, () => "kelime").join(" ")

describe("estimateReadingMinutes", () => {
  it("reads prose at 200 words a minute", () => {
    expect(estimateReadingMinutes(words(1000))).toBe(5)
  })

  it("counts code by its lines and ignores JSX tags", () => {
    const code = ["```ts", ...Array.from({ length: 100 }, () => "const a = 1"), "```"].join("\n")

    expect(estimateReadingMinutes(`${words(600)}\n\n${code}\n\n<BlogNotice title="x" />`)).toBe(5)
  })

  it("never returns less than a minute", () => {
    expect(estimateReadingMinutes("Kısa bir not.")).toBe(1)
  })
})

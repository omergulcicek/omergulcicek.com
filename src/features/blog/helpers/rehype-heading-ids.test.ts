import { describe, expect, it } from "vitest"

import { rehypeHeadingIds } from "@/features/blog/helpers/rehype-heading-ids"
import type { PostHeading } from "@/features/blog/helpers/rehype-heading-ids"

const heading = (tagName: string, ...children: unknown[]) => ({
  type: "element",
  tagName,
  properties: {},
  children
})
const text = (value: string) => ({ type: "text", value })

describe("rehypeHeadingIds", () => {
  it("adds ids to h2 and h3 and lists them in order", () => {
    const headings: PostHeading[] = []
    const tree = {
      type: "root",
      children: [
        heading("h2", text("Neden "), heading("code", text("Zustand")), text("?")),
        heading("h3", text("Kurulum")),
        heading("h4", text("Detay")),
        heading("h2", text("Kurulum"))
      ]
    }

    rehypeHeadingIds(headings)()(tree as never)

    expect(headings).toEqual([
      { id: "neden-zustand", text: "Neden Zustand?", level: 2 },
      { id: "kurulum", text: "Kurulum", level: 3 },
      { id: "kurulum-2", text: "Kurulum", level: 2 }
    ])
    expect(tree.children[0]).toMatchObject({ properties: { id: "neden-zustand" } })
  })
})

import { describe, expect, it } from "vitest"

import { rehypeFigureCaptions } from "@/features/blog/helpers/rehype-figure-captions"

const img = (alt?: string) => ({
  type: "element",
  tagName: "img",
  properties: { src: "/a.webp", ...(alt === undefined ? {} : { alt }) },
  children: []
})
const p = (...children: unknown[]) => ({ type: "element", tagName: "p", properties: {}, children })
const text = (value: string) => ({ type: "text", value })

function run(children: unknown[]) {
  const tree = { type: "root", children }
  rehypeFigureCaptions()()(tree as never)
  return tree.children
}

describe("rehypeFigureCaptions", () => {
  it("turns a lone image into a figure with its alt as the caption", () => {
    const [figure] = run([p(text("\n"), img("Bir grafik"), text(" "))])

    expect(figure).toMatchObject({
      tagName: "figure",
      children: [
        { tagName: "img", properties: { alt: "Bir grafik", loading: "lazy" } },
        { tagName: "figcaption", children: [{ value: "Bir grafik" }] }
      ]
    })
  })

  it("adds no caption when the alt text is empty", () => {
    const [figure] = run([p(img(""))])

    expect(figure).toMatchObject({ tagName: "figure", children: [{ tagName: "img" }] })
    expect((figure as { children: unknown[] }).children).toHaveLength(1)
  })

  it("writes the size it is given onto the image", () => {
    const tree = { type: "root", children: [p(img("x"))] }
    rehypeFigureCaptions(() => ({ width: 800, height: 450 }))()(tree as never)

    expect(tree.children[0]).toMatchObject({
      children: [{ properties: { width: 800, height: 450 } }, { tagName: "figcaption" }]
    })
  })

  it("leaves an image inside text alone", () => {
    const paragraph = p(text("Önce "), img("x"), text(" sonra"))

    expect(run([paragraph])).toEqual([paragraph])
  })
})

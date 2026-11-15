import { beforeAll, describe, expect, it } from "vitest"

import { renderPostContent } from "@/features/blog/api/render-post-content"
import imageSizes from "@/features/blog/constants/blog-image-sizes.json"
import { variantPath } from "@/features/blog/constants/blog-image-variants.constants"

/** Parses the rendered HTML, so assertions read elements instead of matching strings. */
async function renderToDocument(content: string, locale: "tr" | "en" = "tr") {
  const { html, headings } = await renderPostContent(content, locale)
  return { document: new DOMParser().parseFromString(html, "text/html"), headings }
}

describe("renderPostContent", () => {
  // Shiki loads its grammars and themes on first use, which can take longer than one test.
  beforeAll(() => renderPostContent("```ts\nconst a = 1\n```", "tr"), 60_000)

  it("gives every h2 and h3 a unique id and returns them as the outline", async () => {
    const { document, headings } = await renderToDocument(
      "## Neden Zustand?\n\nMetin\n\n### Kurulum\n\n## Neden Zustand?\n\n#### Derin başlık"
    )

    expect(headings).toEqual([
      { id: "neden-zustand", text: "Neden Zustand?", level: 2 },
      { id: "kurulum", text: "Kurulum", level: 3 },
      { id: "neden-zustand-2", text: "Neden Zustand?", level: 2 }
    ])
    expect([...document.querySelectorAll("h2, h3")].map((heading) => heading.id)).toEqual([
      "neden-zustand",
      "kurulum",
      "neden-zustand-2"
    ])
  })

  it("closes the post with a visible sources heading in its language, without ↩ links", async () => {
    const content = "Bir iddia.[^1]\n\n[^1]: Kaynak kitap."

    const tr = await renderToDocument(content, "tr")
    const en = await renderToDocument(content, "en")

    const trLabel = tr.document.querySelector("section[data-footnotes] h2")
    const enLabel = en.document.querySelector("section[data-footnotes] h2")
    expect(trLabel?.textContent).toBeTruthy()
    expect(enLabel?.textContent).toBeTruthy()
    expect(trLabel?.textContent).not.toBe(enLabel?.textContent)
    expect(trLabel?.className).not.toContain("sr-only")
    expect(tr.document.querySelector("[data-footnote-backref]")).toBeNull()
    // The space GFM puts before the removed link goes too.
    expect(tr.document.querySelector("section[data-footnotes] li p")?.textContent).toBe(
      "Kaynak kitap."
    )
  })

  it("keeps footnote references pointing at their note", async () => {
    const { document } = await renderToDocument("Bir iddia.[^kaynak]\n\n[^kaynak]: Kaynak.")

    const ref = document.querySelector<HTMLAnchorElement>("a[data-footnote-ref]")
    const target = ref?.getAttribute("href")?.slice(1)
    expect(target).toBeTruthy()
    expect(document.getElementById(target ?? "")).not.toBeNull()
  })

  it("moves internal links under an English post's prefix and leaves the rest alone", async () => {
    const { document } = await renderToDocument(
      [
        "[iç](/blog/barrel-file)",
        "[dış](https://example.com/x)",
        "[çapa](#kurulum)",
        "[dosya](/omergulcicek_cv.pdf)"
      ].join(" "),
      "en"
    )

    expect([...document.querySelectorAll("a")].map((link) => link.getAttribute("href"))).toEqual([
      "/en/blog/barrel-file",
      "https://example.com/x",
      "#kurulum",
      "/omergulcicek_cv.pdf"
    ])
  })

  it("keeps internal links unprefixed in a Turkish post", async () => {
    const { document } = await renderToDocument("[iç](/blog/barrel-file)", "tr")

    expect(document.querySelector("a")?.getAttribute("href")).toBe("/blog/barrel-file")
  })

  it("renders a code block with its language, file name and copy button", async () => {
    const { document } = await renderToDocument(
      '```ts title="query-client.ts"\nconst a = 1\n```',
      "en"
    )

    const figure = document.querySelector("figure")
    const pre = figure?.querySelector("pre")
    expect(figure?.querySelector("figcaption span")?.textContent).toBe("query-client.ts")
    expect(pre?.textContent).toContain("const a = 1")
    const copy = figure?.querySelector("button[data-copy-code]")
    expect(copy?.getAttribute("aria-label")).toBeTruthy()
    expect(copy?.getAttribute("data-copied-label")).toBeTruthy()
    // Short blocks have nothing to collapse.
    expect(figure?.querySelector("button[data-expand-code]")).toBeNull()
  })

  it("labels the copy button in the post's language", async () => {
    const fence = "```js\nlet a\n```"
    const tr = await renderToDocument(fence, "tr")
    const en = await renderToDocument(fence, "en")

    const label = (document: Document) =>
      document.querySelector("button[data-copy-code]")?.getAttribute("aria-label")
    expect(label(tr.document)).not.toBe(label(en.document))
  })

  it("collapses blocks longer than 25 lines and says how many lines it hides", async () => {
    const code = Array.from({ length: 30 }, (_, index) => `line${index}`).join("\n")
    const { document } = await renderToDocument(`\`\`\`text\n${code}\n\`\`\``)

    const figure = document.querySelector("figure")
    expect(figure?.hasAttribute("data-collapsible")).toBe(true)
    const expand = figure?.querySelector("button[data-expand-code]")
    expect(expand?.getAttribute("aria-expanded")).toBe("false")
    expect(expand?.getAttribute("data-expand-label")).toContain("30")
  })

  it("does not collapse a block of exactly 25 lines", async () => {
    const code = Array.from({ length: 25 }, (_, index) => `line${index}`).join("\n")
    const { document } = await renderToDocument(`\`\`\`text\n${code}\n\`\`\``)

    expect(document.querySelector("figure")?.hasAttribute("data-collapsible")).toBe(false)
  })

  it("falls back to plain text for an unknown fence language instead of failing", async () => {
    const { document } = await renderToDocument("```notalanguage\nhello\n```")

    expect(document.querySelector("pre")?.textContent).toContain("hello")
  })

  it("renders GFM tables and task lists", async () => {
    const { document } = await renderToDocument(
      "| A | B |\n| - | - |\n| 1 | 2 |\n\n- [x] bitti\n- [ ] kaldı"
    )

    expect(document.querySelectorAll("table td")).toHaveLength(2)
    expect(document.querySelectorAll('input[type="checkbox"]')).toHaveLength(2)
  })

  it("sizes a captioned image from the manifest, so it takes its space before loading", async () => {
    const [src, [width, height]] = Object.entries(imageSizes)[0] as [string, [number, number]]
    const { document } = await renderToDocument(`![Bir açıklama](${src})`)

    const image = document.querySelector("img")
    expect(image?.getAttribute("width")).toBe(String(width))
    expect(image?.getAttribute("height")).toBe(String(height))
  })

  it("offers the smaller copy of a wide image through srcset, and zooms into the full one", async () => {
    const entries = Object.entries(imageSizes) as [string, [number, number]][]
    const wide = entries.find(([path]) =>
      entries.some(([other]) => other === variantPath(path) && other !== path)
    )
    expect(wide).toBeDefined()
    const [src, [width]] = wide as [string, [number, number]]
    const { document } = await renderToDocument(`![Geniş bir görsel](${src})`)

    const image = document.querySelector("img")
    expect(image?.getAttribute("srcset")).toBe(`${variantPath(src)} 672w, ${src} ${width}w`)
    expect(image?.getAttribute("sizes")).toBe("(min-width: 768px) 672px, calc(100vw - 2rem)")
    expect(image?.getAttribute("data-zoom-src")).toBe(src)
  })

  it("adds no srcset to an image with no smaller copy", async () => {
    const entries = Object.entries(imageSizes) as [string, [number, number]][]
    const narrow = entries.find(
      ([path, [width]]) => path.endsWith(".webp") && width <= 672 && !path.endsWith("-672.webp")
    )
    expect(narrow).toBeDefined()
    const { document } = await renderToDocument(`![Dar bir görsel](${narrow?.[0]})`)

    expect(document.querySelector("img")?.hasAttribute("srcset")).toBe(false)
  })

  it("renders the MDX components posts use by name", async () => {
    const { document } = await renderToDocument(
      "<BlogNotice>Önemli not</BlogNotice>\n\n<ClipPath />"
    )

    expect(document.body.textContent).toContain("Önemli not")
    const island = document.querySelector<HTMLElement>("[data-island='css-demo']")
    expect(JSON.parse(island?.getAttribute("data-props") ?? "{}")).toEqual({
      demo: "clip-path",
      locale: "tr"
    })
  })

  it("rejects MDX with a component the site does not define", async () => {
    await expect(renderPostContent("<UnknownWidget />", "tr")).rejects.toThrow(/UnknownWidget/)
  })
})

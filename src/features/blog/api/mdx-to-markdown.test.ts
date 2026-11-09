import { describe, expect, it } from "vitest"

import { convertMdxToMarkdown } from "@/features/blog/api/mdx-to-markdown"

const SITE = "https://omergulcicek.com"

describe("convertMdxToMarkdown", () => {
  it("keeps Markdown and makes root-relative links absolute", () => {
    expect(convertMdxToMarkdown("## Başlık\n\n[yazı](/blog/a) ve ![g](/img/a.png)", SITE)).toBe(
      "## Başlık\n\n[yazı](https://omergulcicek.com/blog/a) ve ![g](https://omergulcicek.com/img/a.png)"
    )
  })

  it("turns a notice into a blockquote and drops demos and imports", () => {
    const source =
      'import X from "x"\n\n<BlogNotice title="Not">\n  İçerik\n</BlogNotice>\n\n<ViraMaskDemo />'
    expect(convertMdxToMarkdown(source, SITE)).toBe("> **Not**\n>\n> İçerik")
  })

  it("leaves code fences untouched", () => {
    const source = "```ts\nconst a = '](/x'\n```"
    expect(convertMdxToMarkdown(source, SITE)).toBe(source)
  })
})

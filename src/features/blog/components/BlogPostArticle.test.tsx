import { act, screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest"

import { siteConfig } from "@/config/site.config"

import { renderPostContent } from "@/features/blog/api/render-post-content"
import { BlogPostArticle } from "@/features/blog/components/BlogPostArticle"
import { listPost, postDetail, seedBlog } from "@/features/blog/helpers/blog-test-fixtures"
import type { BlogListPost, BlogPostDetail } from "@/features/blog/schemas/blog-post.schema"
import { getA11yViolations } from "@/test/axe"
import { createTestQueryClient, renderWithProviders } from "@/test/render"

const route = { path: "/{-$lang}/blog/$slug" }

function renderArticle(detail: BlogPostDetail, posts: BlogListPost[]) {
  const queryClient = createTestQueryClient()
  seedBlog(queryClient, "technical", posts, detail)
  const slug = detail.slug.replace(/^\//, "")

  return renderWithProviders(<BlogPostArticle category="technical" slug={slug} />, {
    route,
    initialPath: `/blog/${slug}`,
    queryClient
  })
}

afterEach(() => {
  vi.useRealTimers()
  vi.restoreAllMocks()
})

describe("BlogPostArticle", () => {
  it("shows the title, the Istanbul date, reading time and the server HTML", async () => {
    // 22:30 UTC on the 4th is already the 5th in Istanbul.
    renderArticle(postDetail({ published_at: "2026-11-04T22:30:00Z" }), [
      listPost({ slug: "/barrel-file" })
    ])

    expect(await screen.findByRole("heading", { level: 1, name: "Barrel File" })).toBeVisible()
    const time = screen.getByText(/5 Kasım 2026/)
    expect(time.tagName).toBe("TIME")
    expect(time).toHaveAttribute("datetime", "2026-11-04T22:30:00Z")
    expect(screen.getByText("7 dk okuma")).toBeInTheDocument()
    expect(screen.getByText("Yazının gövdesi")).toBeInTheDocument()
  })

  it("leaves out the date of an unpublished draft instead of showing a broken one", async () => {
    renderArticle(postDetail({ published_at: null }), [listPost({ slug: "/barrel-file" })])

    await screen.findByRole("heading", { level: 1 })
    expect(screen.queryByRole("time")).toBeNull()
    expect(document.querySelector("time")).toBeNull()
  })

  it("links each tag to the list filtered by it", async () => {
    renderArticle(postDetail({ tags: ["React", "Yapay Zekâ"] }), [
      listPost({ slug: "/barrel-file" })
    ])

    const tag = await screen.findByRole("link", { name: "Yapay Zekâ" })
    expect(tag).toHaveAttribute("href", "/blog?tag=yapay-zeka")
    expect(screen.getByRole("link", { name: "React" })).toHaveAttribute("href", "/blog?tag=react")
  })

  it("marks the article with the post's language, not the page's", async () => {
    renderArticle(postDetail({ locale: "en", title: "An English post" }), [
      listPost({ slug: "/barrel-file", locale: "en" })
    ])

    const heading = await screen.findByRole("heading", { level: 1 })
    expect(heading.closest("article")).toHaveAttribute("lang", "en")
  })

  it("shows a table of contents only when the post has more than one heading", async () => {
    const { unmount } = renderArticle(
      postDetail({ headings: [{ id: "giris", text: "Giriş", level: 2 }] }),
      [listPost({ slug: "/barrel-file" })]
    )
    await screen.findByRole("heading", { level: 1 })
    expect(screen.queryByRole("link", { name: "Giriş" })).toBeNull()
    unmount()

    renderArticle(
      postDetail({
        headings: [
          { id: "giris", text: "Giriş", level: 2 },
          { id: "kurulum", text: "Kurulum", level: 3 }
        ]
      }),
      [listPost({ slug: "/barrel-file" })]
    )
    await screen.findByRole("heading", { level: 1 })
    // One list in the right rail and one in the mobile box, both pointing at the heading ids.
    const links = screen.getAllByRole("link", { name: "Kurulum", hidden: true })
    expect(links.length).toBeGreaterThan(0)
    for (const link of links) expect(link).toHaveAttribute("href", "#kurulum")
  })

  it("links to the older and newer posts around this one", async () => {
    renderArticle(postDetail({ slug: "/barrel-file" }), [
      listPost({ slug: "/newer", title: "Daha yeni" }),
      listPost({ slug: "/barrel-file" }),
      listPost({ slug: "/older", title: "Daha eski" })
    ])

    const nav = await screen.findByRole("navigation", { name: "Diğer yazılar" })
    expect(within(nav).getByRole("link", { name: /Daha yeni/ })).toHaveAttribute(
      "href",
      "/blog/newer"
    )
    expect(within(nav).getByRole("link", { name: /Daha eski/ })).toHaveAttribute(
      "href",
      "/blog/older"
    )
  })

  it("suggests related posts by shared tags, without repeating the neighbor links", async () => {
    renderArticle(postDetail({ slug: "/barrel-file", tags: ["React"] }), [
      listPost({ slug: "/newer", title: "Komşu", tags: ["React"] }),
      listPost({ slug: "/barrel-file", tags: ["React"] }),
      listPost({ slug: "/older", title: "Diğer komşu", tags: ["CSS"] }),
      listPost({ slug: "/related", title: "İlgili yazı", tags: ["React"] }),
      listPost({ slug: "/unrelated", title: "Alakasız", tags: ["CSS"] })
    ])

    const section = await screen.findByRole("region", { name: "İlgili yazılar" })
    const titles = within(section)
      .getAllByRole("link")
      .map((link) => link.textContent)
    expect(titles).toEqual(["İlgili yazı"])
  })

  it("copies the post's absolute URL and announces it", async () => {
    const user = userEvent.setup()
    renderArticle(postDetail(), [listPost({ slug: "/barrel-file" })])

    const copy = await screen.findByRole("button", { name: /kopyala/i })
    await user.click(copy)

    await expect(navigator.clipboard.readText()).resolves.toBe(`${siteConfig.url}/blog/barrel-file`)
    expect(screen.getByRole("status")).not.toBeEmptyDOMElement()
  })

  it("shares the title and URL on X, encoded", async () => {
    renderArticle(postDetail({ title: "A & B?" }), [listPost({ slug: "/barrel-file" })])

    const x = await screen.findByRole("link", { name: /X/ })
    const url = new URL(x.getAttribute("href") ?? "")
    expect(url.searchParams.get("text")).toBe("A & B?")
    expect(url.searchParams.get("url")).toBe(`${siteConfig.url}/blog/barrel-file`)
  })

  it("wires the copy button of a code block in the server HTML", async () => {
    const user = userEvent.setup()
    renderArticle(
      postDetail({
        html: `<figure><figcaption><button type="button" data-copy-code="" data-copy-label="Kopyala" data-copied-label="Kopyalandı" aria-label="Kopyala kodu">c</button></figcaption><pre>npm i zustand</pre></figure>`
      }),
      [listPost({ slug: "/barrel-file" })]
    )

    await user.click(await screen.findByRole("button", { name: "Kopyala kodu" }))

    await expect(navigator.clipboard.readText()).resolves.toBe("npm i zustand")
    expect(await screen.findByRole("button", { name: "Kopyalandı" })).toBeInTheDocument()
  })

  it("opens and closes a collapsed code block from the server HTML", async () => {
    const user = userEvent.setup()
    renderArticle(
      postDetail({
        html: `<figure data-collapsible=""><pre>code</pre><button type="button" data-expand-code="" data-expand-label="30 satırı göster" data-collapse-label="Daralt" aria-expanded="false"><span data-expand-text="">30 satırı göster</span></button></figure>`
      }),
      [listPost({ slug: "/barrel-file" })]
    )
    vi.spyOn(window, "requestAnimationFrame").mockImplementation((callback) => {
      callback(0)
      return 0
    })
    // jsdom has no scrolling; collapsing scrolls the block's top back into view.
    const scrollBy = vi.fn()
    window.scrollBy = scrollBy

    const toggle = await screen.findByRole("button", { name: "30 satırı göster" })
    await user.click(toggle)
    expect(toggle).toHaveAttribute("aria-expanded", "true")
    expect(toggle).toHaveAccessibleName("Daralt")
    expect(toggle.closest("figure")).toHaveAttribute("data-expanded")

    await user.click(toggle)
    expect(toggle).toHaveAttribute("aria-expanded", "false")
    expect(toggle).toHaveAccessibleName("30 satırı göster")
    expect(toggle.closest("figure")).not.toHaveAttribute("data-expanded")
    // jsdom puts every box at top 0, under the sticky header, so collapsing scrolls up to it.
    expect(scrollBy).toHaveBeenCalledWith({ top: -96 })
  })

  it("resets the copied state of a code block after two seconds", async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    renderArticle(
      postDetail({
        html: `<figure><button type="button" data-copy-code="" data-copy-label="Kopyala" data-copied-label="Kopyalandı" aria-label="Kopyala">c</button><pre>x</pre></figure>`
      }),
      [listPost({ slug: "/barrel-file" })]
    )

    await user.click(await screen.findByRole("button", { name: "Kopyala" }))
    expect(await screen.findByRole("button", { name: "Kopyalandı" })).toBeInTheDocument()

    await act(() => vi.advanceTimersByTimeAsync(2000))
    expect(screen.getByRole("button", { name: "Kopyala" })).not.toHaveAttribute("data-copied")
  })

  describe("with real post content", () => {
    let rendered: Awaited<ReturnType<typeof renderPostContent>>

    // Shiki loads its grammars and themes on first use, which can outlast one test's timeout
    // while every test file runs in parallel; render once, up front.
    beforeAll(async () => {
      // Everything a post can hold: headings, a long code block, a table, a footnote and a demo.
      const longCode = Array.from({ length: 30 }, (_, index) => `const line${index} = ${index}`)
      const content = [
        "## Giriş",
        "Bir iddia.[^1] [Bir bağlantı](/blog/barrel-file).",
        "### Kurulum",
        `\`\`\`ts title="app.ts"\n${longCode.join("\n")}\n\`\`\``,
        "| Ad | Değer |\n| - | - |\n| a | 1 |",
        "<BlogNotice>Bir not</BlogNotice>",
        "[^1]: Kaynak."
      ].join("\n\n")
      rendered = await renderPostContent(content, "tr")
    }, 60_000)

    it("has no WCAG violations", async () => {
      renderArticle(postDetail({ ...rendered, tags: ["React"] }), [
        listPost({ slug: "/newer", tags: ["React"] }),
        listPost({ slug: "/barrel-file", tags: ["React"] }),
        listPost({ slug: "/older" }),
        listPost({ slug: "/related", tags: ["React"] })
      ])
      await screen.findByRole("heading", { level: 1 })

      expect(await getA11yViolations()).toEqual([])
    })
  })
})

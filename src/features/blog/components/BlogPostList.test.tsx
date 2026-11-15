import { screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"

import { BlogPostList } from "@/features/blog/components/BlogPostList"
import { BlogTagFilter } from "@/features/blog/components/BlogTagFilter"
import { listPost, seedBlog } from "@/features/blog/helpers/blog-test-fixtures"
import { blogListSearchSchema } from "@/features/blog/schemas/blog-post.schema"
import type { BlogCategory, BlogListPost } from "@/features/blog/schemas/blog-post.schema"
import { getA11yViolations } from "@/test/axe"
import { createTestQueryClient, renderWithProviders } from "@/test/render"

const posts = [
  listPost({
    slug: "/react-19",
    title: "React 19",
    tags: ["React"],
    published_at: "2026-10-01T09:00:00Z"
  }),
  listPost({
    slug: "/css-ipuclari",
    title: "CSS ipuçları",
    tags: ["CSS"],
    published_at: "2026-03-01T09:00:00Z"
  }),
  listPost({
    slug: "/zustand",
    title: "Zustand",
    tags: ["React", "Yapay Zekâ"],
    published_at: "2025-12-01T09:00:00Z"
  }),
  listPost({ slug: "/english-post", title: "English post", tags: ["React"], locale: "en" }),
  listPost({ slug: "/draft", title: "Taslak", tags: ["React"], published_at: null })
]

function renderList(
  search = "",
  category: BlogCategory = "technical",
  list: BlogListPost[] = posts
) {
  const queryClient = createTestQueryClient()
  seedBlog(queryClient, category, list)
  const path = category === "technical" ? "/{-$lang}/blog" : "/{-$lang}/notes"

  return renderWithProviders(
    <>
      <BlogTagFilter category={category} />
      <BlogPostList category={category} />
    </>,
    {
      route: { path, validateSearch: blogListSearchSchema },
      initialPath: path.replace("/{-$lang}", ""),
      searchParams: search,
      queryClient
    }
  )
}

/**
 * The chip row the filter shows below xl. The right rail repeats the same links, and jsdom loads
 * no CSS, so both are in the tree; the chips come second.
 */
async function findChips() {
  const navs = await screen.findAllByRole("navigation", { name: "Etiketler" })
  expect(navs).toHaveLength(2)
  return navs[1] as HTMLElement
}

describe("BlogPostList", () => {
  it("groups the Turkish posts by year, newest first, with a count per year", async () => {
    renderList()

    const years = await screen.findAllByRole("heading", { level: 2 })
    expect(years.map((year) => year.textContent)).toEqual([
      expect.stringContaining("2026"),
      expect.stringContaining("2025")
    ])
    expect(years[0]).toHaveTextContent("2 yazı")
    expect(years[1]).toHaveTextContent("1 yazı")
  })

  it("leaves English posts off the Turkish blog", async () => {
    renderList()

    await screen.findAllByRole("heading", { level: 2 })
    expect(screen.queryByRole("link", { name: "English post" })).toBeNull()
  })

  it("lists an undated draft without a year heading instead of crashing", async () => {
    renderList()

    expect(await screen.findByRole("link", { name: "Taslak" })).toHaveAttribute(
      "href",
      "/blog/draft"
    )
  })

  it("links each post to its page without the stored leading slash", async () => {
    renderList()

    expect(await screen.findByRole("link", { name: "React 19" })).toHaveAttribute(
      "href",
      "/blog/react-19"
    )
  })

  it("filters by the tag in the URL", async () => {
    renderList("?tag=yapay-zeka")

    expect(await screen.findByRole("link", { name: "Zustand" })).toBeInTheDocument()
    expect(screen.queryByRole("link", { name: "React 19" })).toBeNull()
    expect(screen.queryByRole("link", { name: "CSS ipuçları" })).toBeNull()
  })

  it("shows every post for an unknown tag instead of an empty page", async () => {
    renderList("?tag=yok-boyle-bir-etiket")

    expect(await screen.findByRole("link", { name: "React 19" })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "CSS ipuçları" })).toBeInTheDocument()
  })

  it("ignores a malformed tag param", async () => {
    renderList("?tag[]=a")

    expect(await screen.findByRole("link", { name: "React 19" })).toBeInTheDocument()
  })

  it("lists every note in both languages, since notes are only written in Turkish", async () => {
    renderList("", "personal", [
      listPost({ slug: "/not", title: "Bir not", tags: ["Kitap"] }),
      listPost({ slug: "/note", title: "A note", tags: ["Kitap"], locale: "en" })
    ])

    expect(await screen.findByRole("link", { name: "Bir not" })).toHaveAttribute(
      "href",
      "/notes/not"
    )
    expect(screen.getByRole("link", { name: "A note" })).toBeInTheDocument()
  })
})

describe("BlogTagFilter", () => {
  it("lists tags used by two or more posts with their counts, after All", async () => {
    renderList()

    const filter = await findChips()
    const chips = within(filter).getAllByRole("link")
    // Only the Turkish posts count: React is on three of them, CSS and Yapay Zeka on one each.
    expect(chips.map((chip) => chip.textContent)).toEqual(["Tümü4", "React3"])
    // The rail and the chips must offer the same choices.
    const [rail] = screen.getAllByRole("navigation", { name: "Etiketler" })
    expect(
      within(rail as HTMLElement)
        .getAllByRole("link")
        .map((link) => link.textContent)
    ).toEqual(["Tümü4", "React3"])
  })

  it("keeps a one-post tag in the rail while it is the selected filter", async () => {
    renderList("?tag=css")

    const filter = await findChips()
    const selected = within(filter).getByRole("link", { name: /CSS/ })
    expect(selected).toHaveAttribute("aria-current", "page")
  })

  it("marks All as current when no tag or an unknown tag is in the URL", async () => {
    renderList("?tag=yok")

    const filter = await findChips()
    expect(within(filter).getByRole("link", { name: /Tümü/ })).toHaveClass("bg-foreground")
  })

  it("filters the list when a tag is chosen and clears it with All", async () => {
    const user = userEvent.setup()
    const { history } = renderList()

    const filter = await findChips()
    await user.click(within(filter).getByRole("link", { name: /React/ }))

    expect(history.location.search).toBe("?tag=react")
    expect(await screen.findByRole("link", { name: "Zustand" })).toBeInTheDocument()
    expect(screen.queryByRole("link", { name: "CSS ipuçları" })).toBeNull()

    await user.click(within(filter).getByRole("link", { name: /Tümü/ }))
    expect(history.location.search).toBe("")
    expect(await screen.findByRole("link", { name: "CSS ipuçları" })).toBeInTheDocument()
  })

  it("has no WCAG violations with a filter selected", async () => {
    renderList("?tag=react")
    await findChips()

    expect(await getA11yViolations()).toEqual([])
  })
})

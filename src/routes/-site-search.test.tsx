import { screen, waitFor, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"

import { blogKeys } from "@/features/blog/api/query-keys"
import { SiteSearch } from "@/routes/-site-search"
import { getA11yViolations } from "@/test/axe"
import { createTestQueryClient, renderWithProviders } from "@/test/render"

const searchPost = (
  slug: string,
  title: string,
  description: string,
  tags: string[] = [],
  locale: "tr" | "en" = "tr"
) => ({
  slug,
  title,
  description,
  tags,
  locale,
  published_at: "2026-01-01T09:00:00Z"
})

function renderSearch() {
  const queryClient = createTestQueryClient()
  queryClient.setQueryData(blogKeys.search("technical"), [
    searchPost("/barrel-file", "Barrel file kullanmayın", "İçe aktarma zincirlerinin bedeli", [
      "Mimari"
    ]),
    searchPost("/state", "Durum yönetimi", "Zustand ile global state yönetimi üzerine notlar"),
    searchPost("/english", "An English post", "Only for English readers", [], "en")
  ])
  queryClient.setQueryData(blogKeys.search("personal"), [
    searchPost("/kitap-notlari", "Kitap notları", "Okuduklarımdan aklımda kalanlar", ["Kitap"])
  ])

  return renderWithProviders(<SiteSearch />, { route: { path: "/" }, queryClient })
}

async function openWithShortcut(user: ReturnType<typeof userEvent.setup>) {
  await screen.findByRole("button", { name: /ara/i })
  await user.keyboard("{Control>}k{/Control}")
  return screen.findByRole("dialog")
}

const optionNames = (dialog: HTMLElement) =>
  within(dialog)
    .queryAllByRole("option")
    .map((option) => option.textContent.trim())

describe("SiteSearch", () => {
  it("opens with Ctrl+K and closes with it again", async () => {
    const user = userEvent.setup()
    renderSearch()

    await openWithShortcut(user)
    await user.keyboard("{Control>}k{/Control}")

    await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull())
  })

  it("opens from the header button", async () => {
    const user = userEvent.setup()
    renderSearch()

    await user.click(await screen.findByRole("button", { name: /ara/i }))

    expect(await screen.findByRole("dialog")).toBeInTheDocument()
  })

  it("lists the pages, the Turkish posts and every note", async () => {
    const user = userEvent.setup()
    renderSearch()

    const dialog = await openWithShortcut(user)

    const names = await waitFor(() => {
      const found = optionNames(dialog)
      expect(found).toContain("Kitap notları")
      return found
    })
    expect(names).toContain("Barrel file kullanmayın")
    expect(names).toContain("Blog")
    // The Turkish site lists Turkish technical posts only.
    expect(names).not.toContain("An English post")
  })

  it("finds a post by a tag", async () => {
    const user = userEvent.setup()
    renderSearch()
    const dialog = await openWithShortcut(user)

    await user.type(within(dialog).getByRole("combobox"), "mimari")

    await waitFor(() => expect(optionNames(dialog)).toEqual(["Barrel file kullanmayın"]))
  })

  it("finds a post by whole words of its description, but not by scattered letters", async () => {
    const user = userEvent.setup()
    renderSearch()
    const dialog = await openWithShortcut(user)
    const input = within(dialog).getByRole("combobox")

    await user.type(input, "global state")
    await waitFor(() => expect(optionNames(dialog)).toEqual(["Durum yönetimi"]))

    await user.clear(input)
    // Every letter appears in order inside the long description, yet it is no real match.
    await user.type(input, "zsts")
    await waitFor(() => expect(optionNames(dialog)).not.toContain("Durum yönetimi"))
  })

  it("goes to the chosen post and closes", async () => {
    const user = userEvent.setup()
    const { history } = renderSearch()
    const dialog = await openWithShortcut(user)

    await user.type(within(dialog).getByRole("combobox"), "kitap notları")
    await user.click(await within(dialog).findByRole("option", { name: /Kitap notları/ }))

    await waitFor(() => expect(history.location.pathname).toBe("/notes/kitap-notlari"))
    await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull())
  })

  it("has no WCAG violations while open with results", async () => {
    const user = userEvent.setup()
    renderSearch()
    const dialog = await openWithShortcut(user)
    await waitFor(() => expect(optionNames(dialog)).toContain("Kitap notları"))

    expect(await getA11yViolations()).toEqual([])
  })
})

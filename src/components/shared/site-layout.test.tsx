import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, describe, expect, it, vi } from "vitest"

import { ThemeProvider } from "@/providers/ThemeProvider"

import { CommandPalette } from "@/components/shared/CommandPalette"
import { SiteFooter } from "@/components/shared/SiteFooter"
import { SiteHeader } from "@/components/shared/SiteHeader"
import { SiteSidebar } from "@/components/shared/SiteSidebar"
import { SkipLink } from "@/components/shared/SkipLink"
import { getA11yViolations } from "@/test/axe"
import { renderWithProviders } from "@/test/render"

// The layout of __root.tsx, without the data the real search reads.
function renderLayout() {
  vi.stubGlobal("matchMedia", (query: string) => ({
    matches: false,
    media: query,
    addEventListener: () => {},
    removeEventListener: () => {}
  }))

  return renderWithProviders(
    <ThemeProvider>
      <SkipLink targetId="main" />
      <SiteHeader
        search={<CommandPalette open={false} onOpenChange={() => {}} groups={[]} loading={false} />}
      />
      <div>
        <SiteSidebar />
        <div>
          <main id="main" tabIndex={-1}>
            <h1>Sayfa</h1>
          </main>
          <SiteFooter />
        </div>
      </div>
    </ThemeProvider>,
    { route: { path: "/{-$lang}" }, initialPath: "/" }
  )
}

afterEach(() => {
  vi.unstubAllGlobals()
})

describe("site layout accessibility", () => {
  it("has no WCAG violations in the header, sidebar and footer", async () => {
    renderLayout()
    await screen.findByRole("main")

    expect(await getA11yViolations()).toEqual([])
  })

  it("has no WCAG violations with the mobile menu open", async () => {
    const user = userEvent.setup()
    renderLayout()

    await user.click(await screen.findByRole("button", { name: /menü/i }))
    await screen.findByRole("dialog")

    expect(await getA11yViolations()).toEqual([])
  })

  it("offers a skip link as the first Tab stop, pointing at the main content", async () => {
    const user = userEvent.setup()
    renderLayout()
    await screen.findByRole("main")

    await user.tab()

    const skip = screen.getByRole("link", { name: "İçeriğe atla" })
    expect(skip).toHaveFocus()
    expect(skip).toHaveAttribute("href", "#main")
    expect(document.getElementById("main")).toBe(screen.getByRole("main"))
  })
})

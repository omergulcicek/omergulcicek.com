import { act, render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, describe, expect, it, vi } from "vitest"

import { ThemeProvider, useTheme } from "@/providers/ThemeProvider"

import { ThemeToggle } from "@/components/shared/ThemeToggle"
import { renderWithProviders } from "@/test/render"

/** jsdom has no matchMedia; this one reports the system theme and lets a test change it. */
function mockSystemTheme(dark: boolean) {
  const listeners = new Set<() => void>()
  let matches = dark
  vi.stubGlobal(
    "matchMedia",
    (query: string) =>
      ({
        get matches() {
          return matches
        },
        media: query,
        addEventListener: (_: string, listener: () => void) => listeners.add(listener),
        removeEventListener: (_: string, listener: () => void) => listeners.delete(listener)
      }) as unknown as MediaQueryList
  )
  return (nextDark: boolean) => {
    matches = nextDark
    for (const listener of listeners) listener()
  }
}

function ThemeName() {
  return <p>{useTheme().resolvedTheme}</p>
}

// ScriptOnce reads the router, so the provider renders inside one, as in the app.
function renderTheme() {
  return renderWithProviders(
    <ThemeProvider>
      <ThemeToggle />
      <ThemeName />
    </ThemeProvider>,
    { route: { path: "/" } }
  )
}

const root = document.documentElement

afterEach(() => {
  localStorage.clear()
  root.className = ""
  root.style.colorScheme = ""
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
})

describe("ThemeProvider", () => {
  it("follows the system theme when nothing is saved", async () => {
    mockSystemTheme(true)
    renderTheme()

    expect(await screen.findByText("dark")).toBeInTheDocument()
    expect(root).toHaveClass("dark")
    expect(root.style.colorScheme).toBe("dark")
  })

  it("switches when the system theme changes", async () => {
    const setSystemDark = mockSystemTheme(false)
    renderTheme()
    expect(await screen.findByText("light")).toBeInTheDocument()

    act(() => setSystemDark(true))

    expect(await screen.findByText("dark")).toBeInTheDocument()
    expect(root).toHaveClass("dark")
    expect(root).not.toHaveClass("light")
  })

  it("falls back to the system theme when storage holds an unknown value", async () => {
    mockSystemTheme(false)
    localStorage.setItem("theme", "sepia")
    renderTheme()

    expect(await screen.findByText("light")).toBeInTheDocument()
  })

  it("restores transitions after the switch, so hovers still animate", async () => {
    mockSystemTheme(false)
    renderTheme()
    await screen.findByText("light")

    await waitFor(() =>
      expect(
        [...document.head.querySelectorAll("style")].some((style) =>
          style.textContent.includes("transition:none")
        )
      ).toBe(false)
    )
  })

  it("throws a clear error when useTheme is used outside the provider", () => {
    vi.spyOn(console, "error").mockImplementation(() => {})

    expect(() => render(<ThemeName />)).toThrow(/ThemeProvider/)
  })
})

describe("ThemeToggle", () => {
  it("switches to the other theme, saves it and names the next action", async () => {
    mockSystemTheme(false)
    const user = userEvent.setup()
    renderTheme()

    const toggle = await screen.findByRole("button", { name: /koyu/i })
    await user.click(toggle)

    expect(await screen.findByText("dark")).toBeInTheDocument()
    expect(localStorage.getItem("theme")).toBe("dark")
    expect(root).toHaveClass("dark")
    expect(screen.getByRole("button", { name: /açık/i })).toBeInTheDocument()
  })

  it("keeps a saved choice over the system theme", async () => {
    mockSystemTheme(true)
    localStorage.setItem("theme", "light")
    renderTheme()

    expect(await screen.findByText("light")).toBeInTheDocument()
    expect(root).toHaveClass("light")
  })

  it("follows a theme changed in another tab", async () => {
    mockSystemTheme(false)
    renderTheme()
    await screen.findByText("light")

    act(() => {
      localStorage.setItem("theme", "dark")
      window.dispatchEvent(new StorageEvent("storage", { key: "theme" }))
    })

    expect(await screen.findByText("dark")).toBeInTheDocument()
  })
})

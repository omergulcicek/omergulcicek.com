import { createElement } from "react"
import type { ComponentType } from "react"

import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it } from "vitest"

import { ISLANDS } from "@/features/blog/components/mdx/islands/island-registry"
import { getMdxComponents } from "@/features/blog/components/mdx/mdx-components"
import { locales } from "@/paraglide/runtime.js"

/** The islands one MDX component writes into the server HTML, with the props it passes on. */
function islandsOf(Component: ComponentType) {
  const container = document.createElement("div")
  container.innerHTML = renderToStaticMarkup(createElement(Component))

  return [...container.querySelectorAll<HTMLElement>("[data-island]")].map((element) => ({
    name: element.dataset.island ?? "",
    props: JSON.parse(element.dataset.props ?? "{}") as unknown
  }))
}

// Components that need props of their own are left out; the islands take none.
const PROPLESS = [
  "ClipPath",
  "CornerShape",
  "PickerIcon",
  "SiblingIndex",
  "Stretch",
  "TextBox",
  "ViraMaskDemo",
  "ViraAddressDemo",
  "ButtonHierarchyDemo",
  "TokenDemo",
  "ViraPasswordDemo"
] as const

describe.each(locales)("MDX islands in %s", (locale) => {
  const components = getMdxComponents(locale, () => null)

  it.each(PROPLESS)("%s writes an island the browser can start", async (name) => {
    const islands = islandsOf(components[name])
    expect(islands).toHaveLength(1)

    for (const island of islands) {
      // A name missing from the registry leaves the demo static; bad props throw in the browser.
      const load = ISLANDS.get(island.name)
      expect(load, `${island.name} is not in ISLANDS`).toBeDefined()
      const render = await load?.()
      expect(() => render?.(island.props)).not.toThrow()
      expect(island.props).toMatchObject({ locale })
    }
  })
})

describe("ISLANDS", () => {
  it("rejects props that did not come from the server", async () => {
    const render = await ISLANDS.get("mask-demo")?.()

    expect(() => render?.({ locale: "de" })).toThrow()
  })
})

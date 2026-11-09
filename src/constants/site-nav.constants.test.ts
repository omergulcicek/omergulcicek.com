import { describe, expect, it } from "vitest"

import { getSitePages } from "@/constants/site-nav.constants"

describe("getSitePages", () => {
  it("turns every menu link into a locale-free path, home as /", () => {
    const paths = getSitePages("tr").map(({ path }) => path)

    expect(paths[0]).toBe("/")
    expect(paths).toContain("/blog")
    // Not in the menu, still in the sitemap.
    expect(paths).toContain("/virastack")
    expect(paths.every((path) => path.startsWith("/") && !path.includes("$lang"))).toBe(true)
    expect(new Set(paths).size).toBe(paths.length)
  })

  it("gives each page a title and a description in the requested locale", () => {
    const [trHome] = getSitePages("tr")
    const [enHome] = getSitePages("en")

    expect(trHome?.title).toBe("Ana sayfa")
    expect(enHome?.title).toBe("Home")
    expect(getSitePages("tr").every(({ title, description }) => title && description)).toBe(true)
  })
})

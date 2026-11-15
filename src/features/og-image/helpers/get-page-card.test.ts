import { describe, expect, it } from "vitest"

import { getSitePages } from "@/constants/site-nav.constants"

import { getPageCard } from "@/features/og-image/helpers/get-page-card"
import { locales } from "@/paraglide/runtime.js"

describe("getPageCard", () => {
  // Every page's head points og:image at /og/<locale><path>; a page without a card shares a 404.
  const pages = getSitePages()
    .map(({ path }) => path)
    .filter((path) => path !== "/")

  it.each(locales.flatMap((locale) => pages.map((path) => [locale, path] as const)))(
    "has a %s card for %s",
    (locale, path) => {
      const card = getPageCard(path, locale)

      expect(card?.title).toBeTruthy()
      expect(card?.description).toBeTruthy()
    }
  )

  it("writes each card in the asked locale, not the current one", () => {
    expect(getPageCard("/blog", "tr")?.description).not.toBe(
      getPageCard("/blog", "en")?.description
    )
  })

  it("has no card for a path that is not a page", () => {
    expect(getPageCard("/nope", "tr")).toBeNull()
    expect(getPageCard("/blog/", "tr")).toBeNull()
  })
})

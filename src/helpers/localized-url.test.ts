import { afterEach, describe, expect, it } from "vitest"

import { siteConfig } from "@/config/site.config"

import { canonicalLink, getLangParam, hreflangLinks, localizedUrl } from "@/helpers/localized-url"

import { getLocale, overwriteGetLocale } from "@/paraglide/runtime.js"

const readLocale = getLocale

afterEach(() => {
  overwriteGetLocale(readLocale)
})

describe("localizedUrl", () => {
  it("puts only the non-base locale under a prefix", () => {
    expect(localizedUrl("/blog", "tr")).toBe(`${siteConfig.url}/blog`)
    expect(localizedUrl("/blog", "en")).toBe(`${siteConfig.url}/en/blog`)
  })

  it("never leaves a trailing slash on the English home page", () => {
    expect(localizedUrl("/", "tr")).toBe(`${siteConfig.url}/`)
    expect(localizedUrl("/", "en")).toBe(`${siteConfig.url}/en`)
  })
})

describe("getLangParam", () => {
  it("is empty for the base locale and the code for English", () => {
    overwriteGetLocale(() => "tr")
    expect(getLangParam()).toBeUndefined()

    overwriteGetLocale(() => "en")
    expect(getLangParam()).toBe("en")
  })
})

describe("canonicalLink", () => {
  it("follows the current locale", () => {
    overwriteGetLocale(() => "en")

    expect(canonicalLink("/about")).toEqual({
      rel: "canonical",
      href: `${siteConfig.url}/en/about`
    })
  })
})

describe("hreflangLinks", () => {
  it("lists every locale and x-default on the base locale, whatever the current one is", () => {
    overwriteGetLocale(() => "en")

    expect(hreflangLinks("/about")).toEqual([
      { rel: "alternate", hrefLang: "tr", href: `${siteConfig.url}/about` },
      { rel: "alternate", hrefLang: "en", href: `${siteConfig.url}/en/about` },
      { rel: "alternate", hrefLang: "x-default", href: `${siteConfig.url}/about` }
    ])
  })
})

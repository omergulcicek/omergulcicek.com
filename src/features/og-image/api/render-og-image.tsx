import geistLatin400 from "@fontsource/geist/files/geist-latin-400-normal.woff?inline"
import geistLatin600 from "@fontsource/geist/files/geist-latin-600-normal.woff?inline"
import geistLatinExt400 from "@fontsource/geist/files/geist-latin-ext-400-normal.woff?inline"
import geistLatinExt600 from "@fontsource/geist/files/geist-latin-ext-600-normal.woff?inline"
import { ImageResponse } from "@vercel/og"

import { me } from "@/constants/me.constants"
import { siteConfig } from "@/config/site.config"

import photo from "@/assets/og/omer-gulcicek.jpg?inline"

import { OgCard } from "@/features/og-image/components/OgCard"
import { OG_IMAGE_SIZE } from "@/features/og-image/constants/og-image.constants"
import { getPageCard } from "@/features/og-image/helpers/get-page-card"
import * as m from "@/paraglide/messages.js"
import type { Locale } from "@/paraglide/runtime.js"

/** `?inline` gives a base64 data URL; Satori wants the font's bytes. */
function fontData(dataUrl: string) {
  return Buffer.from(dataUrl.slice(dataUrl.indexOf(",") + 1), "base64")
}

/*
 * Latin-ext (ş, ğ, ı, İ) is its own family: with one family name Satori took its fallback
 * glyphs at the wrong weight, so a bold title had a regular "Ş". The card lists both.
 */
const FONTS = [
  { name: "Geist", data: fontData(geistLatin400), weight: 400 as const },
  { name: "Geist", data: fontData(geistLatin600), weight: 600 as const },
  { name: "Geist Ext", data: fontData(geistLatinExt400), weight: 400 as const },
  { name: "Geist Ext", data: fontData(geistLatinExt600), weight: 600 as const }
]

const host = new URL(siteConfig.url).host

/** The text a card shows; the person and the address are filled in here. */
export type OgCardContent = {
  title: string
  description: string
  /** Bottom right, such as "5 Kasım 2026 · Yapay Zekâ". */
  meta?: string
}

/** The card text of the home page and the fixed pages, or null for a path that has none. */
export function getPageCardContent(locale: Locale, path: string): OgCardContent | null {
  if (path === "/") {
    return {
      // The header already shows the name and title, so the home card leads with what I do.
      title: m.og_home_title({}, { locale }),
      description: m.site_description({}, { locale })
    }
  }

  return getPageCard(path, locale)
}

/**
 * The PNG card for one page, or a 404. Server only: it holds the fonts and the photo, so the
 * route loads it inside its handler and none of it reaches the client bundle.
 */
export function renderOgImage(locale: Locale, path: string, content: OgCardContent | null) {
  if (!content) return new Response("Not found", { status: 404 })

  const card = {
    ...content,
    name: me.name,
    role: me.title[locale],
    sitePath: `${host}${path === "/" ? "" : path}`
  }

  return new ImageResponse(<OgCard {...card} photo={photo} />, {
    ...OG_IMAGE_SIZE,
    fonts: FONTS,
    headers: {
      "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800"
    }
  })
}

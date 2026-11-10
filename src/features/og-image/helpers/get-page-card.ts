import * as m from "@/paraglide/messages.js"
import type { Locale } from "@/paraglide/runtime.js"

type PageCard = { title: string; description: string }

/**
 * Title and description of each page that gets a card, in the given locale. Server routes read
 * no locale from the URL on their own, so it is passed explicitly.
 */
const PAGE_CARDS: Record<string, (locale: Locale) => PageCard> = {
  "/blog": (locale) => ({
    title: m.blog_title({}, { locale }),
    description: m.blog_description({}, { locale })
  }),
  "/notes": (locale) => ({
    title: m.notes_title({}, { locale }),
    description: m.notes_description({}, { locale })
  }),
  "/virastack": (locale) => ({
    title: m.virastack_title({}, { locale }),
    description: m.virastack_description({}, { locale })
  }),
  "/projects": (locale) => ({
    title: m.projects_title({}, { locale }),
    description: m.projects_description({}, { locale })
  }),
  "/experiences": (locale) => ({
    title: m.experiences_title({}, { locale }),
    description: m.experiences_description({}, { locale })
  }),
  "/bookmarks": (locale) => ({
    title: m.bookmarks_title({}, { locale }),
    description: m.bookmarks_description({}, { locale })
  }),
  "/library": (locale) => ({
    title: m.library_title({}, { locale }),
    description: m.library_description({}, { locale })
  }),
  "/films": (locale) => ({
    title: m.films_title({}, { locale }),
    description: m.films_description({}, { locale })
  }),
  "/music": (locale) => ({
    title: m.music_title({}, { locale }),
    description: m.music_description({}, { locale })
  }),
  "/about": (locale) => ({
    title: m.about_title({}, { locale }),
    description: m.about_description({}, { locale })
  }),
  "/journey": (locale) => ({
    title: m.journey_title({}, { locale }),
    description: m.journey_description({}, { locale })
  }),
  "/uses": (locale) => ({
    title: m.uses_title({}, { locale }),
    description: m.uses_description({}, { locale })
  }),
  "/brand": (locale) => ({
    title: m.brand_title({}, { locale }),
    description: m.brand_description({}, { locale })
  })
}

export function getPageCard(path: string, locale: Locale): PageCard | null {
  return PAGE_CARDS[path]?.(locale) ?? null
}

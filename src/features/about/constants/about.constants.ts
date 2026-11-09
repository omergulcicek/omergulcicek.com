import { BookOpenIcon, CameraIcon, CrownIcon, FootprintsIcon } from "lucide-react"
import type { LucideIcon } from "lucide-react"

import type { FileRouteTypes } from "@/routeTree.gen"

type Localized = { tr: string; en: string }

export type Interest = {
  id: string
  Icon: LucideIcon
  title: Localized
  text: Localized
  /** An outside page. */
  href?: string
  /** A page on this site. */
  to?: FileRouteTypes["to"]
  /** The `$slug` param when `to` is a post. */
  slug?: string
}

/** What I do away from work, each pointing to where it lives. From v10, still current. */
export const INTERESTS: readonly Interest[] = [
  {
    id: "photography",
    Icon: CameraIcon,
    title: { tr: "Fotoğraf", en: "Photography" },
    text: { tr: "Gezdiğim yerlerin kadrajları.", en: "Frames from the places I visit." },
    href: "https://instagram.com/omerilekesfet"
  },
  {
    id: "walk",
    Icon: FootprintsIcon,
    title: { tr: "Yürüyüş", en: "Walking" },
    text: { tr: "Adım adım şehir keşfi.", en: "Exploring cities step by step." },
    to: "/{-$lang}/notes/$slug",
    slug: "google-maps-kisisel-listelerim"
  },
  {
    id: "books",
    Icon: BookOpenIcon,
    title: { tr: "Kitap", en: "Books" },
    text: { tr: "200'den fazla kitaplık bir raf.", en: "A shelf of more than 200 books." },
    to: "/{-$lang}/library"
  },
  {
    id: "chess",
    Icon: CrownIcon,
    title: { tr: "Satranç", en: "Chess" },
    text: { tr: "5+0 blitz.", en: "5+0 blitz." },
    href: "https://chess.com/member/omergulcicek"
  }
]

export type Favorite = {
  id: "team" | "game" | "color" | "film" | "series" | "artist"
  value: string
  href?: string
  to?: FileRouteTypes["to"]
}

/*
 * Favorites without a page of their own link out; the film, the series and the artist point
 * to the films and music pages, where the rest of the list lives.
 */
export const FAVORITES: readonly Favorite[] = [
  { id: "team", value: "Barcelona", href: "https://x.com/FCBarcelona" },
  {
    id: "game",
    value: "Football Manager",
    href: "https://store.steampowered.com/app/3551340/Football_Manager_26/"
  },
  { id: "color", value: "Turkuaz", href: "https://github.com/omergulcicek/turkuaz" },
  { id: "film", value: "The Lord of the Rings", to: "/{-$lang}/films" },
  { id: "series", value: "Leyla ile Mecnun", to: "/{-$lang}/films" },
  { id: "artist", value: "Sagopa Kajmer", to: "/{-$lang}/music" }
]

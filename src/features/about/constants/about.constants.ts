import type { FileRouteTypes } from "@/routeTree.gen"

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

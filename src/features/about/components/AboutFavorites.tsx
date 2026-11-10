import { Link } from "@tanstack/react-router"

import { getLangParam } from "@/helpers/localized-url"

import { titleLinkClass } from "@/components/shared/surface.styles"
import { FAVORITES } from "@/features/about/constants/about.constants"
import type { Favorite } from "@/features/about/constants/about.constants"
import * as m from "@/paraglide/messages.js"

function getLabel(id: Favorite["id"]) {
  if (id === "team") return m.about_favorite_team()
  if (id === "game") return m.about_favorite_game()
  if (id === "color") return m.about_favorite_color()
  if (id === "film") return m.about_favorite_film()
  if (id === "series") return m.about_favorite_series()
  return m.about_favorite_artist()
}

function FavoriteValue({ favorite }: { favorite: Favorite }) {
  if (favorite.to) {
    return (
      <Link to={favorite.to} params={{ lang: getLangParam() }} className={titleLinkClass}>
        {favorite.value}
      </Link>
    )
  }

  if (!favorite.href) return favorite.value

  return (
    <a href={favorite.href} target="_blank" rel="noreferrer" className={titleLinkClass}>
      {favorite.value}
    </a>
  )
}

/** One favorite per kind, as label and value rows; films link to their page (music too, once it is out of draft). */
export function AboutFavorites() {
  return (
    <section aria-labelledby="about-favorites" className="flex flex-col gap-4">
      <h2 id="about-favorites" className="text-xl font-semibold tracking-tight">
        {m.about_favorites_title()}
      </h2>
      <dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-8 gap-y-3 text-base">
        {FAVORITES.map((favorite) => (
          <div key={favorite.id} className="contents">
            <dt className="text-muted-foreground">{getLabel(favorite.id)}</dt>
            <dd className="font-medium">
              <FavoriteValue favorite={favorite} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

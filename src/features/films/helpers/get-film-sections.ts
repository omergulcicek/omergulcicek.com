import { films } from "@/features/films/constants/films.constants"
import { FILM_KINDS } from "@/features/films/schemas/film.schema"
import type { FilmKind } from "@/features/films/schemas/film.schema"
import * as m from "@/paraglide/messages.js"
import { getLocale } from "@/paraglide/runtime.js"

function getKindTitle(kind: FilmKind) {
  if (kind === "film") return m.films_group_film()
  if (kind === "series") return m.films_group_series()
  return m.films_group_video()
}

/** Films grouped by kind in page order, alphabetical inside each group in the locale's order. */
export function getFilmSections() {
  const collator = new Intl.Collator(getLocale(), { sensitivity: "base" })

  return FILM_KINDS.flatMap((kind) => {
    const items = films
      .filter((film) => film.kind === kind)
      .sort((a, b) => collator.compare(a.title, b.title))
    if (items.length === 0) return []

    return [{ id: `films-${kind}`, kind, title: getKindTitle(kind), films: items }]
  })
}

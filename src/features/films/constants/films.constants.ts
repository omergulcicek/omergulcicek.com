import data from "@/features/films/constants/films.json"
import type { Film } from "@/features/films/schemas/film.schema"

/** Favorites, validated against filmsSchema in tests, not at runtime. The page sorts them. */
export const films: Film[] = data

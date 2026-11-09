import { z } from "zod"

import { localizedSchema } from "@/schemas/me.schema"
import { oneOf } from "@/schemas/one-of.schema"

/** Order here is the order of the page sections. */
export const FILM_KINDS = ["film", "series", "video"] as const

export const filmsSchema = z.array(
  z.strictObject({
    id: z.string().regex(/^[a-z0-9-]+$/),
    title: z.string().min(1),
    kind: oneOf(FILM_KINDS),
    url: z.url(),
    image: z.string().startsWith("/media/films/"),
    /** IMDb rating out of 10; videos have none. */
    rating: z.number().min(0).max(10).nullable(),
    /** The YouTube channel of a video. */
    channel: z.string().min(1).nullable(),
    description: localizedSchema.nullable()
  })
)

export type Film = z.infer<typeof filmsSchema>[number]
export type FilmKind = (typeof FILM_KINDS)[number]

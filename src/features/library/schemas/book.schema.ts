import { z } from "zod"

import { localizedSchema } from "@/schemas/me.schema"

const idSchema = z.string().regex(/^[a-z0-9-]+$/)

export const bookGenresSchema = z.array(z.strictObject({ id: idSchema, label: localizedSchema }))

export const booksSchema = z.array(
  z.strictObject({
    id: idSchema,
    title: z.string().min(1),
    subtitle: z.string().min(1).nullable(),
    authors: z.array(z.string().min(1)),
    translator: z.string().min(1).nullable(),
    /** An id from book-genres.json; the test checks it exists. */
    genre: idSchema,
    url: z.url().nullable(),
    image: z.string().startsWith("/media/books/").nullable()
  })
)

/** `?genre=sufism` filters the shelf; a bad value is dropped. */
export const librarySearchSchema = z.object({ genre: z.string().optional().catch(undefined) })

export type Book = z.infer<typeof booksSchema>[number]
export type BookGenre = z.infer<typeof bookGenresSchema>[number]

import { z } from "zod"

import { localizedSchema } from "@/schemas/me.schema"
import { oneOf } from "@/schemas/one-of.schema"

/** Order here is the order of the filter. */
export const BOOKMARK_CATEGORIES = ["blogs", "packages", "sites"] as const

export const bookmarksSchema = z.array(
  z.strictObject({
    id: z.string().regex(/^[a-z0-9-]+$/),
    title: z.string().min(1),
    url: z.url(),
    category: oneOf(BOOKMARK_CATEGORIES),
    image: z.string().startsWith("/media/bookmarks/"),
    description: localizedSchema
  })
)

/** `?category=packages` filters the list; a bad value is dropped. */
export const bookmarksSearchSchema = z.object({
  category: z.enum(BOOKMARK_CATEGORIES).optional().catch(undefined)
})

export type Bookmark = z.infer<typeof bookmarksSchema>[number]

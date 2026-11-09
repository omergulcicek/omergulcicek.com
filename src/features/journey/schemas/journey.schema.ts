import { z } from "zod"

import { localizedSchema } from "@/schemas/me.schema"
import { oneOf } from "@/schemas/one-of.schema"

export const journeySchema = z.array(
  z.strictObject({
    id: z.string().regex(/^[a-z0-9-]+$/),
    year: z.number().int().min(1900),
    title: localizedSchema,
    description: localizedSchema.nullable(),
    href: z.url().nullable(),
    /** A drawn visual in place of a photo. */
    visual: oneOf(["virastack-products"]).nullable(),
    image: z
      .strictObject({
        src: z.string().startsWith("/media/journey/"),
        width: z.number().int().positive(),
        height: z.number().int().positive(),
        alt: localizedSchema,
        /** CSS object-position, for photos whose subject is off-center. */
        position: z.string().nullable()
      })
      .nullable()
  })
)

export type JourneyEntry = z.infer<typeof journeySchema>[number]

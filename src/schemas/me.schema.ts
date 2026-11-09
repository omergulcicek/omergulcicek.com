import { z } from "zod"

import { oneOf } from "@/schemas/one-of.schema"

/** A field written once per locale; every locale is required. */
export const localizedSchema = z.strictObject({
  tr: z.string().min(1),
  en: z.string().min(1)
})

const WORK_MODES = ["remote", "hybrid", "onsite"] as const

/** Order here is the order the projects page shows the groups in. */
export const PROJECT_GROUPS = ["virastack", "side", "translation", "archive"] as const
const PROJECT_STATUSES = ["active", "paused", "archived"] as const

export const meSchema = z.strictObject({
  name: z.string().min(1),
  handle: z.string().min(1),
  title: localizedSchema,
  photo: z.strictObject({
    src: z.string().startsWith("/"),
    alt: localizedSchema
  }),
  links: z.strictObject({
    email: z.email(),
    github: z.url(),
    npm: z.url(),
    linkedin: z.url(),
    x: z.url(),
    instagram: z.url(),
    virastack: z.url()
  }),
  experiences: z.array(
    z.strictObject({
      id: z.string().min(1),
      company: z.string().min(1),
      /** The larger company this one belongs to, shown as "Fibabanka iştiraki"; `null` for none. */
      parent: z.string().min(1).nullable(),
      logo: z.string().startsWith("/"),
      role: localizedSchema,
      location: z.strictObject({
        /** `null` for work with no fixed city, such as a personal project or online teaching. */
        city: localizedSchema.nullable(),
        // A refine instead of z.enum: JSON imports type strings as `string`, and the type must accept me.json.
        workMode: z.string().refine((value) => WORK_MODES.some((mode) => mode === value), {
          error: "workMode must be remote, hybrid or onsite"
        })
      }),
      /** `YYYY-MM`. */
      startDate: z.string().regex(/^\d{4}-\d{2}$/),
      /** `null` while the role is current. */
      endDate: z
        .string()
        .regex(/^\d{4}-\d{2}$/)
        .nullable(),
      summary: localizedSchema,
      /**
       * What came of the role, taken from the CV. Roles with highlights get the full timeline
       * entry; the early ones without show their summary on one compact line.
       */
      highlights: z.array(localizedSchema),
      technologies: z.array(z.string().min(1))
    })
  ),
  projects: z.array(
    z.strictObject({
      id: z.string().min(1),
      title: z.string().min(1),
      group: oneOf(PROJECT_GROUPS),
      status: oneOf(PROJECT_STATUSES),
      /** `null` renders a static card without a link. */
      href: z.url().nullable(),
      /** `owner/name` on GitHub; its stars load daily. `null` when the project has no repo of its own. */
      repo: z
        .string()
        .regex(/^[\w.-]+\/[\w.-]+$/)
        .nullable(),
      /** npm package name; its last-3-month downloads load daily. */
      npm: z.string().min(1).nullable(),
      description: localizedSchema
    })
  ),
  stack: z.array(
    z.strictObject({
      /** Each id needs an icon in `constants/stack-icons.constants.tsx`; a test checks it. */
      id: z.string().min(1),
      label: z.string().min(1),
      description: localizedSchema
    })
  ),
  hero: z.strictObject({
    intro: localizedSchema
  })
})

export type Localized = z.infer<typeof localizedSchema>
export type Me = z.infer<typeof meSchema>

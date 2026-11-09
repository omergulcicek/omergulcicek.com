import { createElement } from "react"
import type { ReactElement } from "react"

import { z } from "zod"

import { locales } from "@/paraglide/runtime.js"

/**
 * The interactive MDX components, loaded only on posts that use them. Each entry parses the
 * props the server wrote into `data-props`, since they cross from HTML back into React.
 */
type IslandLoader = () => Promise<(props: unknown) => ReactElement>

const localeSchema = z.enum(locales)

export const ISLANDS = new Map<string, IslandLoader>([
  [
    "css-demo",
    async () => {
      const { CssDemo, CSS_DEMOS } = await import("@/features/blog/components/mdx/islands/CssDemo")
      const schema = z.object({ demo: z.enum(CSS_DEMOS), locale: localeSchema })
      return (props) => createElement(CssDemo, schema.parse(props))
    }
  ],
  [
    "mask-demo",
    async () => {
      const { MaskDemo } = await import("@/features/blog/components/mdx/islands/MaskDemo")
      const schema = z.object({ locale: localeSchema })
      return (props) => createElement(MaskDemo, schema.parse(props))
    }
  ],
  [
    "password-demo",
    async () => {
      const { PasswordDemo } = await import("@/features/blog/components/mdx/islands/PasswordDemo")
      const schema = z.object({ locale: localeSchema })
      return (props) => createElement(PasswordDemo, schema.parse(props))
    }
  ]
])

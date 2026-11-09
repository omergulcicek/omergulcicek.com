import { createFileRoute } from "@tanstack/react-router"

import { isLocale } from "@/paraglide/runtime.js"

/** Share cards at `/og/<locale>/<path>`, such as `/og/tr/blog/barrel-file`. */
export const Route = createFileRoute("/og/$")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const [locale, ...segments] = (params._splat ?? "").split("/").filter(Boolean)
        if (!locale || !isLocale(locale)) return new Response("Not found", { status: 404 })
        const path = `/${segments.join("/")}`

        // Loaded here so the fonts, the renderer and the Supabase call stay out of the client bundle.
        const [{ getPostCardContent }, { getPageCardContent, renderOgImage }] = await Promise.all([
          import("@/features/blog/helpers/get-post-card-content"),
          import("@/features/og-image/api/render-og-image")
        ])

        // A post's card is in its own language, whichever prefix it was asked under.
        const post = await getPostCardContent(path)
        if (post !== undefined) return renderOgImage(post?.locale ?? locale, path, post)

        return renderOgImage(locale, path, getPageCardContent(locale, path))
      }
    }
  }
})

import { createFileRoute } from "@tanstack/react-router"

import { siteConfig } from "@/config/site.config"

export const Route = createFileRoute("/site.webmanifest")({
  server: {
    handlers: {
      GET: async () => {
        const manifest = {
          name: siteConfig.name,
          short_name: siteConfig.shortName,
          description: siteConfig.description,
          start_url: "/",
          display: "standalone",
          background_color: "#ffffff",
          theme_color: "#ffffff",
          // Drawn from the çintemani tile by `pnpm favicon`.
          icons: [192, 512].map((size) => ({
            src: `/icon-${size}.png`,
            sizes: `${size}x${size}`,
            type: "image/png"
          }))
        }

        return Response.json(manifest, {
          headers: { "Content-Type": "application/manifest+json; charset=utf-8" }
        })
      }
    }
  }
})

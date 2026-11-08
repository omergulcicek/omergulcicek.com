import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import { paraglideVitePlugin } from "@inlang/paraglide-js"
import babel from "@rolldown/plugin-babel"
import tailwindcss from "@tailwindcss/vite"
import viteReact, { reactCompilerPreset } from "@vitejs/plugin-react"
import { defineConfig } from "vite"

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    tailwindcss(),
    tanstackStart(),
    viteReact(),
    babel({ presets: [reactCompilerPreset()] }),
    paraglideVitePlugin({
      project: "./project.inlang",
      outdir: "./src/paraglide",
      // The URL alone decides the language: no redirect ever comes from a cookie or a header.
      strategy: ["url", "baseLocale"],
      urlPatterns: [
        // Without this entry, the English home page comes out as `/en/`, which the router redirects.
        {
          pattern: "/",
          localized: [
            ["en", "/en"],
            ["tr", "/"]
          ]
        },
        {
          pattern: "/:path(.*)?",
          localized: [
            ["en", "/en/:path(.*)?"],
            ["tr", "/:path(.*)?"]
          ]
        }
      ]
    })
  ]
})

export default config

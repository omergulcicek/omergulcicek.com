import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import { paraglideVitePlugin } from "@inlang/paraglide-js"
import babel from "@rolldown/plugin-babel"
import tailwindcss from "@tailwindcss/vite"
import viteReact, { reactCompilerPreset } from "@vitejs/plugin-react"
import { nitro } from "nitro/vite"
import { defineConfig } from "vite"

import { paraglideOptions } from "./paraglide.config"

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    tailwindcss(),
    tanstackStart(),
    // Picks the deploy target from the build environment (Vercel sets VERCEL=1).
    nitro(),
    viteReact(),
    babel({ presets: [reactCompilerPreset()] }),
    paraglideVitePlugin(paraglideOptions)
  ]
})

export default config

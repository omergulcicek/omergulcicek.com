import { paraglideVitePlugin } from "@inlang/paraglide-js"
import viteReact from "@vitejs/plugin-react"
import { defineConfig } from "vitest/config"

import { paraglideOptions } from "./paraglide.config"

export default defineConfig({
  // Compiles messages and URL patterns as the app does, so tests see the real localized URLs.
  plugins: [viteReact(), paraglideVitePlugin(paraglideOptions)],
  resolve: { tsconfigPaths: true },
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
    css: false
  }
})

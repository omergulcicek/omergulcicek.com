import tailwindcss from "@tailwindcss/vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import { nitro } from "nitro/vite"
import { readFile } from "node:fs/promises"

import { visualizer } from "rollup-plugin-visualizer"
import { defineConfig, type Plugin } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

import { getBlogPrerenderRoutes } from "./src/features/blog/helpers/get-blog-prerender-routes"
import { clientEnvSchema } from "./src/schemas/client-env.schema"
import { meSchema } from "./src/schemas/me.schema"

/**
 * Validates site content and public env once, when the dev server or build starts.
 * The browser reads both as plain data, so Zod stays out of the client bundle while a
 * broken `me.json` or env value still fails the build instead of a visitor's page.
 */
function validateContentPlugin(): Plugin {
	return {
		name: "validate-content",
		configResolved(config) {
			// `.env` lines like `VITE_SUPABASE_URL=` mean "unset", as in src/env.ts.
			const publicEnv = Object.fromEntries(
				Object.entries(config.env).map(([key, value]) => [
					key,
					value === "" ? undefined : value
				])
			)

			clientEnvSchema.parse(publicEnv)
		},
		async buildStart() {
			const meJson: unknown = JSON.parse(
				await readFile(new URL("./src/constants/me.json", import.meta.url), "utf8")
			)

			meSchema.parse(meJson)
		}
	}
}

export default defineConfig(async ({ mode }) => {
	const blogPrerenderRoutes = await getBlogPrerenderRoutes()
	const blogPrerenderPathSet = new Set(blogPrerenderRoutes)

	return {
	server: {
		port: 3000
	},
	build: {
		sourcemap: false,
		rollupOptions: {
			treeshake: {
				// Our own modules have no import-time side effects besides CSS, so feature
				// barrels can drop unused exports (e.g. bookmark data behind validateSearch).
				moduleSideEffects: (id: string, external: boolean) =>
					external ||
					id.includes("/node_modules/") ||
					!id.includes("/src/") ||
					/\.css($|\?)/.test(id)
			}
		}
	},
	plugins: [
		validateContentPlugin(),
		tsconfigPaths(),
		tanstackStart({
			prerender: {
				enabled: true,
				crawlLinks: false,
				filter: ({ path }) => {
					if (path.startsWith("/dev")) {
						return false
					}

					if (path === "/blog") {
						return false
					}

					if (path.startsWith("/blog")) {
						return blogPrerenderPathSet.has(path)
					}

					return true
				}
			},
			pages: blogPrerenderRoutes.map((path) => ({
				path,
				prerender: { enabled: true }
			}))
		}),
		nitro({ preset: "vercel" }),
		viteReact(),
		tailwindcss(),
		mode === "analyze" &&
			visualizer({
				filename: "dist/bundle-stats.html",
				gzipSize: true,
				brotliSize: true,
				open: false
			})
	].filter(Boolean)
	}
})

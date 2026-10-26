import tailwindcss from "@tailwindcss/vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import { nitro } from "nitro/vite"
import { visualizer } from "rollup-plugin-visualizer"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

import { getBlogPrerenderRoutes } from "./src/features/blog/helpers/get-blog-prerender-routes"

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

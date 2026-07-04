import tailwindcss from "@tailwindcss/vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import { nitro } from "nitro/vite"
import { visualizer } from "rollup-plugin-visualizer"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig(({ mode }) => ({
	server: {
		port: 3000
	},
	build: {
		sourcemap: false,
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes("recharts")) {
						return "recharts"
					}

					if (id.includes("react-activity-calendar")) {
						return "activity-calendar"
					}

					if (id.includes("embla-carousel")) {
						return "embla-carousel"
					}

					if (id.includes("medium-zoom")) {
						return "medium-zoom"
					}

					if (id.includes("cmdk") || id.includes("@radix-ui/react-dialog")) {
						return "command-palette"
					}
				}
			}
		}
	},
	plugins: [
		tsconfigPaths(),
		tanstackStart(),
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
}))

import tailwindcss from "@tailwindcss/vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import { visualizer } from "rollup-plugin-visualizer"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig(({ mode }) => ({
	server: {
		port: 3000
	},
	plugins: [
		tsconfigPaths(),
		tanstackStart(),
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

import tailwindcss from "@tailwindcss/vite"
import tsconfigPaths from "vite-tsconfig-paths"
import { defineConfig } from "vitest/config"

export default defineConfig({
	plugins: [tsconfigPaths(), tailwindcss()],
	test: {
		setupFiles: ["src/test/setup.ts"],
		// `.test.ts` runs in Node (helpers, api, server code); `.test.tsx` gets a DOM
		// (components and hooks), which is slower to start.
		projects: [
			{
				extends: true,
				test: {
					name: "node",
					environment: "node",
					include: ["src/**/*.test.ts"]
				}
			},
			{
				extends: true,
				test: {
					name: "dom",
					environment: "jsdom",
					include: ["src/**/*.test.tsx"]
				}
			}
		]
	}
})

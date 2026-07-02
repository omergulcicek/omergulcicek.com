import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vitest/config"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
	plugins: [tsconfigPaths(), tailwindcss()],
	test: {
		environment: "node",
		include: ["src/**/*.test.ts"]
	}
})

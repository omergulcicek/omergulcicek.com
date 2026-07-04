import { notFound } from "@tanstack/react-router"
import { describe, expect, it, vi } from "vitest"

import { Route as MdxSandboxRoute } from "@/routes/dev/mdx-sandbox"

describe("mdx-sandbox route", () => {
	it("returns not found in production", () => {
		vi.stubEnv("PROD", true)

		expect(() => MdxSandboxRoute.options.beforeLoad?.({} as never)).toThrow(
			notFound()
		)

		vi.unstubAllEnvs()
	})

	it("allows access in development", () => {
		vi.stubEnv("PROD", false)

		expect(() =>
			MdxSandboxRoute.options.beforeLoad?.({} as never)
		).not.toThrow()

		vi.unstubAllEnvs()
	})

	it("sets noindex robots meta", async () => {
		const head = await MdxSandboxRoute.options.head?.({} as never)
		const robotsMeta = head?.meta?.find(
			(entry): entry is { name: string; content: string } =>
				Boolean(entry && "name" in entry && entry.name === "robots")
		)

		expect(robotsMeta?.content).toBe("noindex, nofollow")
	})
})

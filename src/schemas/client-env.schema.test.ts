import { describe, expect, it } from "vitest"

import { clientEnvSchema } from "@/schemas/client-env.schema"

describe("clientEnvSchema", () => {
	it("defaults the media provider to local", () => {
		expect(clientEnvSchema.parse({}).VITE_MEDIA_PROVIDER).toBe("local")
	})

	it("requires the Supabase URL for Supabase media", () => {
		expect(() =>
			clientEnvSchema.parse({ VITE_MEDIA_PROVIDER: "supabase" })
		).toThrow(/VITE_SUPABASE_URL is required/)
	})

	it("rejects a malformed GA4 measurement ID", () => {
		expect(() => clientEnvSchema.parse({ VITE_GA_ID: "UA-123" })).toThrow(
			/valid GA4 measurement ID/
		)
	})

	it("ignores Vite's own env keys", () => {
		expect(() =>
			clientEnvSchema.parse({ MODE: "production", BASE_URL: "/", DEV: false })
		).not.toThrow()
	})
})

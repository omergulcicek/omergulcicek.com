import { server } from "@/test/server"
import { http, HttpResponse } from "msw"
import { describe, expect, it } from "vitest"
import { z } from "zod"

import { api, ApiError } from "@/lib/api"

const URL_ = "https://example.test/items"
const schema = z.object({ id: z.number() })

describe("api.get", () => {
	it("returns data parsed by the schema and sends params", async () => {
		let search = ""
		server.use(
			http.get(URL_, ({ request }) => {
				search = new URL(request.url).search
				return HttpResponse.json({ id: 1, extra: true })
			})
		)

		await expect(
			api.get(URL_, { schema, params: { page: 2, skip: undefined } })
		).resolves.toEqual({ id: 1 })
		expect(search).toBe("?page=2")
	})

	it("turns an HTTP failure into an ApiError of kind http", async () => {
		server.use(http.get(URL_, () => new HttpResponse(null, { status: 403 })))

		await expect(api.get(URL_, { schema })).rejects.toMatchObject({
			name: "ApiError",
			kind: "http",
			status: 403
		})
	})

	it("turns a body that breaks the schema into kind schema", async () => {
		server.use(http.get(URL_, () => HttpResponse.json({ id: "nope" })))

		await expect(api.get(URL_, { schema })).rejects.toMatchObject({
			kind: "schema"
		})
	})

	it("turns a connection failure into kind network", async () => {
		server.use(http.get(URL_, () => HttpResponse.error()))

		const error = await api.get(URL_, { schema }).catch((e: unknown) => e)

		expect(error).toBeInstanceOf(ApiError)
		expect(error).toMatchObject({ kind: "network" })
	})

	it("turns a slow response into kind timeout", async () => {
		server.use(
			http.get(URL_, async () => {
				await new Promise((resolve) => setTimeout(resolve, 200))
				return HttpResponse.json({ id: 1 })
			})
		)

		await expect(
			api.get(URL_, { schema, timeoutMs: 20 })
		).rejects.toMatchObject({ kind: "timeout" })
	})

	it("rethrows an abort untouched", async () => {
		server.use(http.get(URL_, () => HttpResponse.json({ id: 1 })))
		const controller = new AbortController()
		controller.abort()

		const error = await api
			.get(URL_, { schema, signal: controller.signal })
			.catch((e: unknown) => e)

		expect(error).not.toBeInstanceOf(ApiError)
		expect(error).toMatchObject({ name: "AbortError" })
	})
})

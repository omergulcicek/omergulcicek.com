import { QueryClient } from "@tanstack/react-query"
import { server } from "@/test/server"
import { http, HttpResponse } from "msw"
import { describe, expect, it } from "vitest"

import { githubActivityQueryOptions } from "@/features/projects/api/github-activity.queries"
import {
	GITHUB_CALENDAR_API,
	GITHUB_EVENTS_API
} from "@/features/projects/constants/github-activity.constants"

const CALENDAR_URL = `${GITHUB_CALENDAR_API}/:login`
const EVENTS_URL = `${GITHUB_EVENTS_API}/:login/events/public`

// A response body can be read once, so every handler builds its own.
const calendar = () =>
	HttpResponse.json({
		contributions: [{ date: "2026-01-04", count: 2, level: 2 }]
	})

function fetchActivity() {
	const queryClient = new QueryClient({
		defaultOptions: { queries: { retry: false } }
	})

	return queryClient.fetchQuery(githubActivityQueryOptions("ada"))
}

describe("githubActivityQueryOptions", () => {
	it("combines the calendar with the most active repos", async () => {
		server.use(
			http.get(CALENDAR_URL, calendar),
			http.get(EVENTS_URL, () =>
				HttpResponse.json([
					{
						type: "PushEvent",
						repo: { name: "ada/site" },
						payload: { commits: [{}, {}] }
					},
					{
						type: "PushEvent",
						repo: { name: "other/lib" },
						payload: { commits: [{}] }
					},
					{ type: "WatchEvent", repo: { name: "other/skip" } }
				])
			)
		)

		const data = await fetchActivity()

		expect(data.contributions).toHaveLength(1)
		expect(data.repos).toEqual([
			{
				name: "site",
				count: 2,
				href: "https://github.com/ada/site",
				avatarUrl: undefined
			},
			{
				name: "lib",
				count: 1,
				href: "https://github.com/other/lib",
				avatarUrl: "https://github.com/other.png?size=64"
			}
		])
	})

	it("keeps the calendar when the events endpoint is rate limited", async () => {
		server.use(
			http.get(CALENDAR_URL, calendar),
			http.get(EVENTS_URL, () => new HttpResponse(null, { status: 403 }))
		)

		const data = await fetchActivity()

		expect(data.contributions).toHaveLength(1)
		expect(data.repos).toEqual([])
	})

	it("surfaces an unexpected events response instead of hiding it", async () => {
		server.use(
			http.get(CALENDAR_URL, calendar),
			http.get(EVENTS_URL, () => HttpResponse.json({ not: "a list" }))
		)

		await expect(fetchActivity()).rejects.toMatchObject({ kind: "schema" })
	})

	it("fails when the calendar fails", async () => {
		server.use(
			http.get(CALENDAR_URL, () => new HttpResponse(null, { status: 502 })),
			http.get(EVENTS_URL, () => HttpResponse.json([]))
		)

		await expect(fetchActivity()).rejects.toMatchObject({
			kind: "http",
			status: 502
		})
	})
})

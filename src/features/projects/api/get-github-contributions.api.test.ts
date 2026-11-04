import { server } from "@/test/server"
import { http, HttpResponse } from "msw"
import { describe, expect, it } from "vitest"

import { getGithubContributions } from "@/features/projects/api/get-github-contributions.api"
import { GITHUB_CALENDAR_API } from "@/features/projects/constants/github-activity.constants"
import { PROJECTS_UI } from "@/features/projects/constants/projects.constants"

const CALENDAR_URL = `${GITHUB_CALENDAR_API}/:login`

describe("getGithubContributions", () => {
	it("starts the calendar on the first Sunday and clamps levels", async () => {
		// 2026-01-01 is a Thursday, 2026-01-04 the first Sunday.
		server.use(
			http.get(CALENDAR_URL, () =>
				HttpResponse.json({
					contributions: [
						{ date: "2026-01-01", count: 1, level: 1 },
						{ date: "2026-01-04", count: 5, level: 9 },
						{ date: "2026-01-05", count: 0, level: 0 }
					]
				})
			)
		)

		await expect(getGithubContributions("ada")).resolves.toEqual([
			{ date: "2026-01-04", count: 5, level: 4 },
			{ date: "2026-01-05", count: 0, level: 0 }
		])
	})

	it("fails when GitHub returns no contributions", async () => {
		server.use(
			http.get(CALENDAR_URL, () => HttpResponse.json({ contributions: [] }))
		)

		await expect(getGithubContributions("ada")).rejects.toThrow(
			PROJECTS_UI.contributionsFetchError
		)
	})

	it("fails with an ApiError when the service is down", async () => {
		server.use(
			http.get(CALENDAR_URL, () => new HttpResponse(null, { status: 500 }))
		)

		await expect(getGithubContributions("ada")).rejects.toMatchObject({
			kind: "http",
			status: 500
		})
	})
})

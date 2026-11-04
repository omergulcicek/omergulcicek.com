import { renderWithProviders } from "@/test/render"
import { server } from "@/test/server"
import { screen } from "@testing-library/react"
import { http, HttpResponse } from "msw"
import { expect, it } from "vitest"

import { GitHubActivity } from "@/features/projects/components/GitHubActivity"
import {
	GITHUB_CALENDAR_API,
	GITHUB_EVENTS_API
} from "@/features/projects/constants/github-activity.constants"
import { PROJECTS_UI } from "@/features/projects/constants/projects.constants"

const CALENDAR_URL = `${GITHUB_CALENDAR_API}/:login`
const EVENTS_URL = `${GITHUB_EVENTS_API}/:login/events/public`

it("shows the loading heading, then the yearly total", async () => {
	server.use(
		http.get(CALENDAR_URL, () =>
			HttpResponse.json({
				contributions: [
					{ date: "2026-01-04", count: 3, level: 2 },
					{ date: "2026-01-05", count: 4, level: 3 }
				]
			})
		),
		http.get(EVENTS_URL, () => HttpResponse.json([]))
	)

	renderWithProviders(<GitHubActivity username="ada" />)

	expect(screen.getByText(PROJECTS_UI.contributionsLoading)).toBeInTheDocument()
	expect(
		await screen.findByText(PROJECTS_UI.contributionsInYear(2026, 7))
	).toBeInTheDocument()
})

it("shows an alert when the contributions cannot be loaded", async () => {
	server.use(
		http.get(CALENDAR_URL, () => new HttpResponse(null, { status: 500 })),
		http.get(EVENTS_URL, () => HttpResponse.json([]))
	)

	renderWithProviders(<GitHubActivity username="ada" />)

	expect(await screen.findByRole("alert")).toBeInTheDocument()
	expect(screen.getByText(PROJECTS_UI.contributionsFailed)).toBeInTheDocument()
})

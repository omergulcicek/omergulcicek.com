import { api } from "@/lib/api"

import { GITHUB_CALENDAR_API } from "@/features/projects/constants/github-activity.constants"
import { PROJECTS_UI } from "@/features/projects/constants/projects.constants"
import { toContributionLevel } from "@/features/projects/helpers/github-activity.helpers"
import { githubCalendarSchema } from "@/features/projects/schemas/github-activity.schema"
import type { Contribution } from "@/features/projects/types/github-activity.types"

/** The last year of public contributions, trimmed to start on a Sunday so weeks line up. */
export async function getGithubContributions(
	login: string,
	signal?: AbortSignal
): Promise<Contribution[]> {
	const { contributions } = await api.get(
		`${GITHUB_CALENDAR_API}/${encodeURIComponent(login)}`,
		{ params: { y: "last" }, schema: githubCalendarSchema, signal }
	)

	if (contributions.length === 0) {
		throw new Error(PROJECTS_UI.contributionsFetchError)
	}

	const firstSunday = contributions.findIndex(
		(day) => new Date(`${day.date}T00:00:00Z`).getUTCDay() === 0
	)

	return contributions.slice(Math.max(firstSunday, 0)).map((day) => ({
		date: day.date,
		count: day.count,
		level: toContributionLevel(day.level)
	}))
}

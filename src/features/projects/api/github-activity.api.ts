import { queryOptions } from "@tanstack/react-query"
import { z } from "zod"

import { projectsKeys } from "@/features/projects/api/query-keys"
import {
	GITHUB_CALENDAR_API,
	GITHUB_EVENTS_API,
	TOP_REPOS_LIMIT
} from "@/features/projects/constants/github-activity.constants"
import { PROJECTS_UI } from "@/features/projects/constants/projects.constants"
import { toContributionLevel } from "@/features/projects/helpers/github-activity.helpers"
import type {
	Contribution,
	GitHubActivityData,
	RepoContribution
} from "@/features/projects/types/github-activity.types"

const calendarResponseSchema = z.object({
	contributions: z.array(
		z.object({ date: z.string(), count: z.number(), level: z.number() })
	)
})

const eventsResponseSchema = z.array(
	z.object({
		type: z.string(),
		repo: z.object({ name: z.string() }).optional(),
		payload: z.object({ commits: z.array(z.unknown()).optional() }).optional()
	})
)

async function fetchCalendar(
	login: string,
	signal: AbortSignal
): Promise<Contribution[]> {
	const response = await fetch(`${GITHUB_CALENDAR_API}/${login}?y=last`, { signal })

	if (!response.ok) {
		throw new Error(PROJECTS_UI.contributionsFetchError)
	}

	const { contributions } = calendarResponseSchema.parse(await response.json())

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

async function fetchTopRepos(
	login: string,
	signal: AbortSignal
): Promise<RepoContribution[]> {
	const response = await fetch(
		`${GITHUB_EVENTS_API}/${login}/events/public?per_page=100`,
		{ signal }
	)

	if (!response.ok) {
		return []
	}

	const events = eventsResponseSchema.parse(await response.json())
	const counts = new Map<string, number>()

	for (const event of events) {
		if (event.type !== "PushEvent" || !event.repo) continue
		const commits = event.payload?.commits?.length ?? 1
		counts.set(event.repo.name, (counts.get(event.repo.name) ?? 0) + commits)
	}

	return [...counts.entries()]
		.sort(([, left], [, right]) => right - left)
		.slice(0, TOP_REPOS_LIMIT)
		.map(([fullName, count]) => {
			const [owner = "", name = fullName] = fullName.split("/")
			const isOwnRepo = owner.toLowerCase() === login.toLowerCase()

			return {
				name,
				count,
				href: `https://github.com/${fullName}`,
				avatarUrl: isOwnRepo ? undefined : `https://github.com/${owner}.png?size=64`
			}
		})
}

/** Public GitHub contributions and most active repos; fetched in the browser only. */
export function githubActivityQueryOptions(login: string) {
	return queryOptions({
		queryKey: projectsKeys.githubActivity(login),
		queryFn: async ({ signal }): Promise<GitHubActivityData> => {
			const [contributions, repos] = await Promise.all([
				fetchCalendar(login, signal),
				fetchTopRepos(login, signal)
			])

			return { contributions, repos }
		},
		staleTime: 60 * 60 * 1000
	})
}

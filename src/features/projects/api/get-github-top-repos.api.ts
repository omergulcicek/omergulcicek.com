import { api } from "@/lib/api"

import {
	GITHUB_EVENTS_API,
	TOP_REPOS_LIMIT
} from "@/features/projects/constants/github-activity.constants"
import { githubEventsSchema } from "@/features/projects/schemas/github-activity.schema"
import type { RepoContribution } from "@/features/projects/types/github-activity.types"

/** The repos with the most pushed commits in the user's latest public events. */
export async function getGithubTopRepos(
	login: string,
	signal?: AbortSignal
): Promise<RepoContribution[]> {
	const events = await api.get(
		`${GITHUB_EVENTS_API}/${encodeURIComponent(login)}/events/public`,
		{ params: { per_page: 100 }, schema: githubEventsSchema, signal }
	)
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
				avatarUrl: isOwnRepo
					? undefined
					: `https://github.com/${owner}.png?size=64`
			}
		})
}

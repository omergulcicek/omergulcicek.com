import { createServerFn } from "@tanstack/react-start"

import { projectKeys } from "@/features/projects/api/query-keys"
import {
	githubContributionsResponseSchema,
	type GitHubContribution
} from "@/features/projects/schemas/github-contribution.schema"

const GITHUB_CONTRIBUTIONS_URL =
	"https://github-contributions-api.jogruber.de/v4/omergulcicek?y=last"

const GITHUB_CONTRIBUTIONS_STALE_TIME_MS = 1000 * 60 * 60

let cachedContributions: GitHubContribution[] | null = null
let lastFetchTime = 0

export const getGitHubContributionsFn = createServerFn({ method: "GET" }).handler(
	async (): Promise<GitHubContribution[]> => {
		const now = Date.now()
		if (cachedContributions && now - lastFetchTime < GITHUB_CONTRIBUTIONS_STALE_TIME_MS) {
			return cachedContributions
		}

		const response = await fetch(GITHUB_CONTRIBUTIONS_URL)
		const json: unknown = await response.json()

		if (!response.ok) {
			if (cachedContributions) return cachedContributions
			throw new Error("Failed to fetch GitHub contributions", {
				cause: json
			})
		}

		const parsed = githubContributionsResponseSchema.parse(json)
		cachedContributions = parsed.contributions
		lastFetchTime = now

		return cachedContributions
	}
)

export function githubContributionsQueryOptions() {
	return {
		queryKey: projectKeys.githubContributions(),
		queryFn: () => getGitHubContributionsFn(),
		staleTime: GITHUB_CONTRIBUTIONS_STALE_TIME_MS
	}
}

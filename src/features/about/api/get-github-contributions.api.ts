import { createServerFn } from "@tanstack/react-start"

import {
	githubContributionsResponseSchema,
	type GitHubContribution
} from "@/features/about/schemas/github-contribution.schema"

const GITHUB_CONTRIBUTIONS_URL =
	"https://github-contributions-api.jogruber.de/v4/omergulcicek?y=last"

let cachedContributions: GitHubContribution[] | null = null
let lastFetchTime = 0
const CACHE_TTL = 1000 * 60 * 60 // 1 hour

export const getGitHubContributionsFn = createServerFn({ method: "GET" }).handler(
	async (): Promise<GitHubContribution[]> => {
		const now = Date.now()
		if (cachedContributions && now - lastFetchTime < CACHE_TTL) {
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

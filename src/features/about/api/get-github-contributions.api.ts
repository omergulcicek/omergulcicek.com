import { createServerFn } from "@tanstack/react-start"

import {
	githubContributionsResponseSchema,
	type GitHubContribution
} from "@/features/about/schemas/github-contribution.schema"

const GITHUB_CONTRIBUTIONS_URL =
	"https://github-contributions-api.jogruber.de/v4/omergulcicek?y=last"

export const getGitHubContributionsFn = createServerFn({ method: "GET" }).handler(
	async (): Promise<GitHubContribution[]> => {
		const response = await fetch(GITHUB_CONTRIBUTIONS_URL)
		const json: unknown = await response.json()

		if (!response.ok) {
			throw new Error("Failed to fetch GitHub contributions", {
				cause: json
			})
		}

		const parsed = githubContributionsResponseSchema.parse(json)

		return parsed.contributions
	}
)

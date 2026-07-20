import { useQuery } from "@tanstack/react-query"

import { githubContributionsQueryOptions } from "@/features/projects/api/get-github-contributions.api"

type UseGitHubContributionsOptions = {
	enabled?: boolean
}

export function useGitHubContributions({
	enabled = true
}: UseGitHubContributionsOptions = {}) {
	return useQuery({
		...githubContributionsQueryOptions(),
		enabled
	})
}

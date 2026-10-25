import { useQuery } from "@tanstack/react-query"

import { githubActivityQueryOptions } from "@/features/projects/api/github-activity.api"

/**
 * Client-only on purpose: fetching GitHub on every SSR request would hit its rate limit,
 * and the widget sits below the fold.
 */
export function useGitHubActivity(login: string) {
	return useQuery(githubActivityQueryOptions(login))
}

import { queryOptions } from "@tanstack/react-query"

import { ApiError } from "@/lib/api"

import { getGithubContributions } from "@/features/projects/api/get-github-contributions.api"
import { getGithubTopRepos } from "@/features/projects/api/get-github-top-repos.api"
import { projectsKeys } from "@/features/projects/api/query-keys"
import type { GitHubActivityData } from "@/features/projects/types/github-activity.types"

/**
 * The events endpoint is rate limited for anonymous callers. An HTTP failure there
 * hides the repo list but keeps the calendar; every other failure still surfaces.
 */
async function getTopReposOrEmpty(login: string, signal: AbortSignal) {
	try {
		return await getGithubTopRepos(login, signal)
	} catch (error) {
		if (error instanceof ApiError && error.kind === "http") {
			return []
		}

		throw error
	}
}

/** Public GitHub contributions and most active repos; fetched in the browser only. */
export function githubActivityQueryOptions(login: string) {
	return queryOptions({
		queryKey: projectsKeys.githubActivity(login),
		queryFn: async ({ signal }): Promise<GitHubActivityData> => {
			const [contributions, repos] = await Promise.all([
				getGithubContributions(login, signal),
				getTopReposOrEmpty(login, signal)
			])

			return { contributions, repos }
		},
		staleTime: 60 * 60 * 1000
	})
}

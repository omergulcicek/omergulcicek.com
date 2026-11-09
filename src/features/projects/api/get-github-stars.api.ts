import { env } from "@/env"

import { api } from "@/lib/api"

import { githubRepoSchema } from "@/features/projects/schemas/project-stats.schema"

/** Star count of one public repo. Server only: it may send the GitHub token. */
export async function getGithubStars(repo: string, signal?: AbortSignal) {
  // The repo comes from me.json, never from a request, and the host is fixed here.
  const data = await api.get(`https://api.github.com/repos/${repo}`, {
    headers: {
      Accept: "application/vnd.github+json",
      ...(env.GITHUB_TOKEN ? { Authorization: `Bearer ${env.GITHUB_TOKEN}` } : {})
    },
    schema: githubRepoSchema,
    signal
  })

  return data.stargazers_count
}

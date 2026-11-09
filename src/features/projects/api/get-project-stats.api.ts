import { createServerFn } from "@tanstack/react-start"

import { me } from "@/constants/me.constants"

import { getGithubStars } from "@/features/projects/api/get-github-stars.api"
import {
  getNpmDownloads,
  getNpmTotalDownloads
} from "@/features/projects/api/get-npm-downloads.api"
import type { ProjectStats } from "@/features/projects/schemas/project-stats.schema"

const DAY_MS = 24 * 60 * 60 * 1000

/*
 * One fetch a day per server instance: every visitor between refreshes reads this copy, so
 * GitHub's 60-requests-an-hour anonymous limit is never in reach. A failed refresh keeps the
 * last good copy, and the next request tries again.
 */
let cache: { fetchedAt: number; stats: ProjectStats } | null = null

type StatField = keyof ProjectStats[string]
type StatRequest = { id: string; field: StatField; run: () => Promise<number> }

async function fetchProjectStats(previous: ProjectStats | undefined): Promise<ProjectStats> {
  const requests: StatRequest[] = me.projects.flatMap(({ id, repo, npm }) => [
    ...(repo ? [{ id, field: "stars" as const, run: () => getGithubStars(repo) }] : []),
    ...(npm
      ? [
          { id, field: "downloads" as const, run: () => getNpmDownloads(npm) },
          { id, field: "totalDownloads" as const, run: () => getNpmTotalDownloads(npm) }
        ]
      : [])
  ])

  // allSettled: one source failing leaves that number out instead of breaking the page.
  const results = await Promise.allSettled(requests.map(({ run }) => run()))
  const stats: ProjectStats = {}

  requests.forEach(({ id, field }, index) => {
    const result = results[index]
    if (result?.status === "rejected") console.warn("Project stat request failed:", result.reason)

    // A failed number keeps the last good value, so a rate limit never blanks it for a day.
    const value = result?.status === "fulfilled" ? result.value : previous?.[id]?.[field]
    if (value !== undefined) stats[id] = { ...stats[id], [field]: value }
  })

  return stats
}

/** GitHub stars, 90-day and all-time npm downloads per project id, refreshed at most once a day. */
export const getProjectStats = createServerFn({ method: "GET" }).handler(async () => {
  if (cache && Date.now() - cache.fetchedAt < DAY_MS) return cache.stats

  const stats = await fetchProjectStats(cache?.stats)
  const isEmpty = Object.keys(stats).length === 0
  if (isEmpty && cache) return cache.stats

  if (!isEmpty) cache = { fetchedAt: Date.now(), stats }
  return stats
})

import { queryOptions } from "@tanstack/react-query"

import { getProjectStats } from "@/features/projects/api/get-project-stats.api"
import { projectKeys } from "@/features/projects/api/query-keys"

const DAY_MS = 24 * 60 * 60 * 1000

export const projectStatsQueryOptions = () =>
  queryOptions({
    queryKey: projectKeys.stats(),
    queryFn: ({ signal }) => getProjectStats({ signal }),
    // The server refreshes once a day, so the browser has no reason to ask sooner.
    staleTime: DAY_MS
  })

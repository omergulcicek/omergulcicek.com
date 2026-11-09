import { useSuspenseQuery } from "@tanstack/react-query"

import { projectStatsQueryOptions } from "@/features/projects/api/project.queries"

export function useProjectStats() {
  return useSuspenseQuery(projectStatsQueryOptions())
}

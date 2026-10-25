import type { Project } from "@/features/projects/types/project.types"

/** Coming-soon cards are muted; archived and paused ones show a status badge. */
export function getProjectStatusFlags(status: Project["status"]) {
	const isComingSoon = status === "coming_soon"
	const isArchived = status === "archived" || status === "paused"

	return { isComingSoon, isArchived, hasBadge: isComingSoon || isArchived }
}

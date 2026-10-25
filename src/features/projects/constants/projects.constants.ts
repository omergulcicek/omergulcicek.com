import { ME } from "@/constants/me.constants"
import type { Project } from "@/features/projects/types/project.types"

export const PROJECTS: Project[] = ME.projects

export function getProjectsByGroup(group: Project["group"]): Project[] {
	return PROJECTS.filter((project) => project.group === group)
}

export function getPublishedVirastackProjects(): Project[] {
	return getProjectsByGroup("virastack").filter(
		(project) => project.status === "package"
	)
}

export function getProjectColorClass(projectId: string): string | undefined {
	return PROJECTS.find((project) => project.id === projectId)?.color
}

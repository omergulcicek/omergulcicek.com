import { ME } from "@/constants/me.constants"

import type { MeProject } from "@/schemas/me.schema"

/** ViraStack packages that are live; shared by the footer, the home page and the projects page. */
export function getPublishedVirastackProjects(): MeProject[] {
	return ME.projects.filter(
		(project) => project.group === "virastack" && project.status === "package"
	)
}

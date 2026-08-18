export type ProjectGroup = "personal" | "virastack"

export type ProjectStatus = "live" | "package" | "coming_soon" | "archived"

export type Project = {
	id: string
	title: string
	description: string
	group: ProjectGroup
	status: ProjectStatus
	href: string
	sortOrder: number
}

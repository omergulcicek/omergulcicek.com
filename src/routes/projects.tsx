import { createFileRoute } from "@tanstack/react-router"

import { buildStaticPageHead } from "@/helpers/seo/build-page-head"

import { ProjectsPage } from "@/features/projects/components/ProjectsPage"

export const Route = createFileRoute("/projects")({
	head: () => buildStaticPageHead("projects"),
	component: ProjectsRoutePage
})

function ProjectsRoutePage() {
	return <ProjectsPage />
}

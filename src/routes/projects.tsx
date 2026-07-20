import { createFileRoute } from "@tanstack/react-router"

import { ProjectsPage } from "@/features/projects"
import { buildStaticPageHead } from "@/lib/seo/build-page-head"

export const Route = createFileRoute("/projects")({
	head: () => buildStaticPageHead("projects"),
	component: ProjectsRoutePage
})

function ProjectsRoutePage() {
	return <ProjectsPage />
}

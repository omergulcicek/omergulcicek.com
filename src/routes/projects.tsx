import { createFileRoute } from "@tanstack/react-router"

import { ProjectsPage } from "@/features/projects"

export const Route = createFileRoute("/projects")({
	head: () => ({
		meta: [
			{ title: "Projeler · Ömer Gülçiçek" },
			{
				name: "description",
				content: "Kişisel uygulamalar ve ViraStack açık kaynak araçları."
			}
		]
	}),
	component: ProjectsPage
})

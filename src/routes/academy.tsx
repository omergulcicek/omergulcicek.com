import { createFileRoute } from "@tanstack/react-router"

import { AcademyPage } from "@/features/academy"

export const Route = createFileRoute("/academy")({
	head: () => ({
		meta: [
			{ title: "Akademi · Ömer Gülçiçek" },
			{
				name: "description",
				content: "Frontend eğitim içerikleri — yakında."
			}
		]
	}),
	component: AcademyPage
})

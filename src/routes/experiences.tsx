import { createFileRoute } from "@tanstack/react-router"

import { ExperiencesPage } from "@/features/experiences"

export const Route = createFileRoute("/experiences")({
	head: () => ({
		meta: [
			{ title: "Deneyimler · Ömer Gülçiçek" },
			{
				name: "description",
				content: "Kariyer geçmişi, teknoloji etiketleri ve CV."
			}
		]
	}),
	component: ExperiencesPage
})

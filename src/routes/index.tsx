import { createFileRoute } from "@tanstack/react-router"

import { HomePage } from "@/features/home"

export const Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Ömer Gülçiçek — Frontend Engineer" },
			{
				name: "description",
				content:
					"Detaylara önem veren bir frontend mühendisi; blog, projeler ve ViraStack ekosistemi."
			}
		]
	}),
	component: HomePage
})

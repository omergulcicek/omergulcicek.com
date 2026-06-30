import { createFileRoute } from "@tanstack/react-router"

import { AboutPage } from "@/features/about"

export const Route = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "Hakkımda · Ömer Gülçiçek" },
			{
				name: "description",
				content:
					"Frontend mühendisliği, ViraStack ve üretim kültürü hakkında kısa bir tanışma."
			}
		]
	}),
	component: AboutPage
})

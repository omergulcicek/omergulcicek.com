import { createFileRoute } from "@tanstack/react-router"

import { ServicesPage } from "@/features/services"

export const Route = createFileRoute("/services")({
	head: () => ({
		meta: [
			{ title: "Hizmetler · Ömer Gülçiçek" },
			{
				name: "description",
				content: "Freelance geliştirme ve frontend eğitimi."
			}
		]
	}),
	component: ServicesPage
})

import { createFileRoute } from "@tanstack/react-router"

import { BookmarksPage } from "@/features/bookmarks"

export const Route = createFileRoute("/bookmarks")({
	head: () => ({
		meta: [
			{ title: "Yer İmleri · Ömer Gülçiçek" },
			{
				name: "description",
				content:
					"Raindrop'ta topladığım frontend kaynakları, bloglar ve okuma listesi."
			}
		]
	}),
	component: BookmarksPage
})

import { createFileRoute, notFound } from "@tanstack/react-router"

import { getNotFoundHead } from "@/components/shared/not-found-page.constants"
import { NotFoundPage } from "@/components/shared/NotFoundPage"

export const Route = createFileRoute("/$")({
	// Throwing notFound() makes the server answer 404 instead of a soft-404 200.
	beforeLoad: () => {
		throw notFound()
	},
	head: () => getNotFoundHead(),
	notFoundComponent: NotFoundPage
})

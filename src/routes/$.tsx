import { createFileRoute } from "@tanstack/react-router"

import { getNotFoundHead } from "@/components/shared/not-found-page.constants"
import { NotFoundPage } from "@/components/shared/NotFoundPage"

export const Route = createFileRoute("/$")({
	head: () => getNotFoundHead(),
	component: NotFoundPage
})

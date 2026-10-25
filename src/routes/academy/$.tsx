import { createFileRoute, redirect } from "@tanstack/react-router"

import { getMeProject } from "@/constants/me.constants"

export const Route = createFileRoute("/academy/$")({
	beforeLoad: () => {
		throw redirect({
			href: getMeProject("academy").href,
			statusCode: 301
		})
	}
})

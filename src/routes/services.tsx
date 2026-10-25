import { createFileRoute, redirect } from "@tanstack/react-router"

export const Route = createFileRoute("/services")({
	beforeLoad: () => {
		throw redirect({
			to: "/about",
			hash: "birlikte-calisalim",
			replace: true,
			statusCode: 301
		})
	}
})

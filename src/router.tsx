import { QueryClient } from "@tanstack/react-query"
import { createRouter } from "@tanstack/react-router"
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query"

import { createQueryClient } from "@/lib/query/create-query-client"
import { routeTree } from "./routeTree.gen"

export type RouterContext = {
	queryClient: QueryClient
}

export function getRouter() {
	const queryClient = createQueryClient()

	const router = createRouter({
		routeTree,
		context: {
			queryClient
		},
		defaultPreloadStaleTime: 0,
		defaultViewTransition: false,
		scrollRestoration: true
	})

	setupRouterSsrQueryIntegration({
		router,
		queryClient,
		wrapQueryClient: true
	})

	return router
}

declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof getRouter>
	}
}

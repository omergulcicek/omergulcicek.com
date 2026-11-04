import type { ReactElement } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import {
	createMemoryHistory,
	createRootRoute,
	createRoute,
	createRouter,
	Outlet,
	RouterProvider
} from "@tanstack/react-router"
import { render } from "@testing-library/react"

/** A `QueryClient` that never retries, so failures show up at once. */
export function createTestQueryClient() {
	return new QueryClient({
		defaultOptions: { queries: { retry: false, gcTime: Infinity } }
	})
}

/** Renders with a fresh `QueryClient`; pass one to seed the cache. */
export function renderWithProviders(
	ui: ReactElement,
	queryClient = createTestQueryClient()
) {
	return render(
		<QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
	)
}

/**
 * Renders `ui` inside a real memory router so router hooks work. Every path resolves
 * (a splat route catches the rest), and `router.state.location` shows where it ended up.
 */
export async function renderWithRouter(
	ui: ReactElement,
	{ path = "/", queryClient = createTestQueryClient() } = {}
) {
	const rootRoute = createRootRoute({
		component: () => (
			<>
				{ui}
				<Outlet />
			</>
		)
	})
	const routeTree = rootRoute.addChildren([
		createRoute({ getParentRoute: () => rootRoute, path: "/" }),
		createRoute({ getParentRoute: () => rootRoute, path: "$" })
	])
	const router = createRouter({
		routeTree,
		history: createMemoryHistory({ initialEntries: [path] })
	})

	await router.load()
	render(
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	)

	return { router, queryClient }
}

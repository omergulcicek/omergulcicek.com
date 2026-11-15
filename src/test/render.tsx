import type { ReactElement, ReactNode } from "react"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider
} from "@tanstack/react-router"
import type { AnyRoute, RouterHistory } from "@tanstack/react-router"
import { render } from "@testing-library/react"
import type { RenderOptions } from "@testing-library/react"

export type UrlUpdateEvent = { queryString: string }

type TestRoute = { path: string } & Pick<AnyRoute["options"], "validateSearch" | "search">

type ProvidersOptions = Omit<RenderOptions, "wrapper"> & {
  /** Renders the component in this route, for components that read it. Content appears async. */
  route?: TestRoute
  /** The path the component starts on. Needed when `route.path` has a param, such as `{-$lang}`. */
  initialPath?: string
  /** The URL the component starts on, such as `"?page=2"`. */
  searchParams?: string
  onUrlUpdate?: (event: UrlUpdateEvent) => void
  /** A client with data already in its cache, for components that read suspense queries. */
  queryClient?: QueryClient
}

function makeRouter(ui: ReactElement, route: TestRoute, history: RouterHistory) {
  // The router scrolls after each navigation and jsdom does not implement that.
  window.scrollTo = () => {}

  const rootRoute = createRootRoute()
  const testRoute = createRoute({ getParentRoute: () => rootRoute, ...route, component: () => ui })

  return createRouter({ routeTree: rootRoute.addChildren([testRoute]), history })
}

/**
 * A QueryClient without retries. Seeded data never goes stale, so a test that fills the cache
 * with `setQueryData` makes no background request.
 */
export function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: { queries: { retry: false, staleTime: Number.POSITIVE_INFINITY } }
  })
}

/**
 * Renders a component with the app providers it expects.
 * Each call gets a fresh QueryClient without retries and its own URL state, so tests stay isolated.
 */
export function renderWithProviders(
  ui: ReactElement,
  {
    route,
    initialPath,
    searchParams = "",
    onUrlUpdate,
    queryClient = createTestQueryClient(),
    ...options
  }: ProvidersOptions = {}
) {
  const history = createMemoryHistory({
    initialEntries: [`${initialPath ?? route?.path ?? "/"}${searchParams}`]
  })
  history.subscribe(({ location }) => onUrlUpdate?.({ queryString: location.search }))

  function Wrapper({ children }: { children: ReactNode }) {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  }

  const content = route ? <RouterProvider router={makeRouter(ui, route, history)} /> : ui

  return { ...render(content, { wrapper: Wrapper, ...options }), history }
}

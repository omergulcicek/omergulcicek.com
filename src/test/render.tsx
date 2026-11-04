import type { ReactElement } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { render } from "@testing-library/react"

/** Renders with a fresh `QueryClient` that never retries, so failures show up at once. */
export function renderWithProviders(ui: ReactElement) {
	const queryClient = new QueryClient({
		defaultOptions: { queries: { retry: false, gcTime: Infinity } }
	})

	return render(
		<QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
	)
}

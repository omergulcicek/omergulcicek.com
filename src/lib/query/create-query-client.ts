import { QueryClient } from "@tanstack/react-query"

const BLOG_STALE_TIME_MS = 1000 * 60 * 60
const DEFAULT_GC_TIME_MS = 1000 * 60 * 30

export function createQueryClient() {
	return new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: BLOG_STALE_TIME_MS,
				gcTime: DEFAULT_GC_TIME_MS,
				refetchOnWindowFocus: false,
				retry: 1
			}
		}
	})
}

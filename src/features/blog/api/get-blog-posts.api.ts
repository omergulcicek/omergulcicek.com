import { queryOptions } from "@tanstack/react-query"

import { getBlogPostsFn } from "@/features/blog/api/blog-post.api"
import { blogKeys } from "@/features/blog/api/query-keys"
import { unwrapServerResult } from "@/lib/server-result"

const BLOG_LIST_STALE_TIME_MS = 1000 * 60 * 60

export function blogPostsQueryOptions() {
	return queryOptions({
		queryKey: blogKeys.list(),
		queryFn: async ({ signal }) => unwrapServerResult(await getBlogPostsFn({ signal })),
		staleTime: BLOG_LIST_STALE_TIME_MS
	})
}

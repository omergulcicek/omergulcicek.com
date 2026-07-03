import { blogKeys } from "@/features/blog/api/query-keys"
import { getBlogPostsFn } from "@/features/blog/api/blog-post.api"

const BLOG_LIST_STALE_TIME_MS = 1000 * 60 * 60

export function blogPostsQueryOptions() {
	return {
		queryKey: blogKeys.list(),
		queryFn: () => getBlogPostsFn(),
		staleTime: BLOG_LIST_STALE_TIME_MS
	}
}

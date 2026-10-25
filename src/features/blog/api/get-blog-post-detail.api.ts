import { queryOptions } from "@tanstack/react-query"
import { notFound } from "@tanstack/react-router"

import { getBlogPostDetailFn } from "@/features/blog/api/blog-post.api"
import { blogKeys } from "@/features/blog/api/query-keys"
import { normalizeBlogSlug } from "@/features/blog/helpers/blog-slug"
import { unwrapServerResult } from "@/lib/server-result"

const BLOG_DETAIL_STALE_TIME_MS = 1000 * 60 * 60

export function blogPostDetailQueryOptions(slug: string) {
	const normalizedSlug = normalizeBlogSlug(slug)

	return queryOptions({
		queryKey: blogKeys.detail(normalizedSlug),
		queryFn: async ({ signal }) => {
			const post = unwrapServerResult(
				await getBlogPostDetailFn({ data: { slug: normalizedSlug }, signal })
			)

			if (!post) {
				throw notFound()
			}

			return post
		},
		staleTime: BLOG_DETAIL_STALE_TIME_MS
	})
}

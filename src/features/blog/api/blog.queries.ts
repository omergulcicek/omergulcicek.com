import { queryOptions } from "@tanstack/react-query"
import { notFound } from "@tanstack/react-router"

import {
	getBlogPostDetailFn,
	getBlogPostsFn
} from "@/features/blog/api/blog-post.api"
import { blogKeys } from "@/features/blog/api/query-keys"
import { normalizeBlogSlug } from "@/features/blog/helpers/blog-slug"

const BLOG_LIST_STALE_TIME_MS = 1000 * 60 * 60
const BLOG_DETAIL_STALE_TIME_MS = 1000 * 60 * 60

export function blogPostsQueryOptions() {
	return queryOptions({
		queryKey: blogKeys.list(),
		queryFn: ({ signal }) => getBlogPostsFn({ signal }),
		staleTime: BLOG_LIST_STALE_TIME_MS
	})
}

export function blogPostDetailQueryOptions(slug: string) {
	const normalizedSlug = normalizeBlogSlug(slug)

	return queryOptions({
		queryKey: blogKeys.detail(normalizedSlug),
		queryFn: async ({ signal }) => {
			const post = await getBlogPostDetailFn({
				data: { slug: normalizedSlug },
				signal
			})

			if (!post) {
				throw notFound()
			}

			return post
		},
		staleTime: BLOG_DETAIL_STALE_TIME_MS
	})
}

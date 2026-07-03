import { notFound } from "@tanstack/react-router"

import { blogKeys } from "@/features/blog/api/query-keys"
import { getBlogPostDetailFn } from "@/features/blog/api/blog-post.api"
import { normalizeBlogSlug } from "@/features/blog/helpers/blog-slug"

const BLOG_DETAIL_STALE_TIME_MS = 1000 * 60 * 60

export function blogPostDetailQueryOptions(slug: string) {
	const normalizedSlug = normalizeBlogSlug(slug)

	return {
		queryKey: blogKeys.detail(normalizedSlug),
		queryFn: async () => {
			const post = await getBlogPostDetailFn({ data: { slug: normalizedSlug } })

			if (!post) {
				throw notFound()
			}

			return post
		},
		staleTime: BLOG_DETAIL_STALE_TIME_MS
	}
}

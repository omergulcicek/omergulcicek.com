import { useSuspenseQuery } from "@tanstack/react-query"

import { blogPostDetailQueryOptions } from "@/features/blog/api/get-blog-post-detail.api"
import { normalizeBlogSlug } from "@/features/blog/helpers/blog-slug"

export function useGetBlogPostDetail(slug: string) {
	const normalizedSlug = normalizeBlogSlug(slug)

	return useSuspenseQuery(blogPostDetailQueryOptions(normalizedSlug))
}

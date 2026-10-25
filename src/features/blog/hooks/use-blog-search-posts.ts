import { useQuery } from "@tanstack/react-query"

import { blogPostsQueryOptions } from "@/features/blog/api/get-blog-posts.api"

/** Blog posts for the command palette; fetched only while the palette is open. */
export function useBlogSearchPosts(enabled: boolean) {
	const { data = [] } = useQuery({ ...blogPostsQueryOptions(), enabled })

	return data
}

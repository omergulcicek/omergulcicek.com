import { useSuspenseQuery } from "@tanstack/react-query"

import { blogPostsQueryOptions } from "@/features/blog/api/blog.queries"

export function useGetBlogPosts() {
	return useSuspenseQuery(blogPostsQueryOptions())
}

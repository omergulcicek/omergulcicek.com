import { useSuspenseQuery } from "@tanstack/react-query"

import { blogPostsQueryOptions } from "@/features/blog/api/get-blog-posts.api"

export function useGetBlogPosts() {
	return useSuspenseQuery(blogPostsQueryOptions())
}

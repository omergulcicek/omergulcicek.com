import { createServerFn } from "@tanstack/react-start"

import { getFeedPosts } from "@/features/blog/api/get-feed-posts.api"
import { getBlogPostsInputSchema } from "@/features/blog/schemas/blog-post.schema"

/**
 * Published posts of one category with their descriptions, for the ⌘K palette to match against.
 * Its own query so the list that every blog page loads does not carry the descriptions.
 */
export const getSearchPosts = createServerFn({ method: "GET" })
  .validator(getBlogPostsInputSchema)
  // The query's signal cancels the server function request itself; the handler gets no signal of its own.
  .handler(({ data }) => getFeedPosts(data.category))

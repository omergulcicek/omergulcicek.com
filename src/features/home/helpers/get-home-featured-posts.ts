import type { BlogPost } from "@/features/blog/types/blog.types"
import {
	HOME_FEATURED_BLOG_CATEGORY,
	HOME_FEATURED_BLOG_COUNT
} from "@/features/home/constants/home-blog.constants"

/** Picks the newest technical posts for the home page; personal posts never appear there. */
export function getHomeFeaturedPosts(posts: BlogPost[]): BlogPost[] {
	return posts
		.filter((post) => post.category === HOME_FEATURED_BLOG_CATEGORY)
		.slice(0, HOME_FEATURED_BLOG_COUNT)
}

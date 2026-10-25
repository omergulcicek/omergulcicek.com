import { LATEST_TECHNICAL_POSTS_COUNT } from "@/features/blog/constants/blog.constants"
import type { BlogPost } from "@/features/blog/types/blog.types"

/** Picks the newest technical posts for the home page; personal posts never appear there. */
export function getLatestTechnicalPosts(posts: BlogPost[]): BlogPost[] {
	return posts
		.filter((post) => post.category === "technical")
		.slice(0, LATEST_TECHNICAL_POSTS_COUNT)
}

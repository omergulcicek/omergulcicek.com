import type { BlogPost } from "@/features/blog/types/blog.types"
import { slugToRouteParam } from "@/features/blog/helpers/blog-helpers"

export type BlogSearchItem = {
	slug: string
	title: string
	description: string
	tags: string[]
}

export function mapPostsToSearchItems(posts: BlogPost[]): BlogSearchItem[] {
	return posts
		.filter((post) => post.published)
		.map((post) => ({
			slug: slugToRouteParam(post.slug),
			title: post.title,
			description: post.description,
			tags: post.tags
		}))
}

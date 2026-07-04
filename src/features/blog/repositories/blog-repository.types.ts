import type { BlogPostNeighbours } from "@/features/blog/helpers/resolve-blog-neighbours"
import type { BlogPost } from "@/features/blog/types/blog.types"
import type { BlogHeading } from "@/features/blog/types/blog-heading.types"

export type BlogPostDetail = BlogPost & {
	contentHtml: string
	headings: BlogHeading[]
}

export type BlogRepository = {
	getAllPosts: () => Promise<BlogPost[]>
	getPostBySlug: (slug: string) => Promise<BlogPostDetail | null>
	getPostNeighbours: (slug: string) => Promise<BlogPostNeighbours>
}

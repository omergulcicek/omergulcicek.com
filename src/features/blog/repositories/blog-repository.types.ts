import type { BlogPostNeighbours } from "@/features/blog/helpers/resolve-blog-neighbours"
import type { BlogCategory, BlogPost } from "@/features/blog/types/blog.types"
import type { BlogHeading } from "@/features/blog/types/blog-heading.types"

export type BlogPostDetail = BlogPost & {
	contentHtml: string
	headings: BlogHeading[]
}

/** A post with its raw MDX source, for outputs that are not the rendered page. */
export type BlogPostSource = {
	post: BlogPost
	content: string
}

export type BlogRepository = {
	getAllPosts: () => Promise<BlogPost[]>
	getPostBySlug: (slug: string) => Promise<BlogPostDetail | null>
	getPostNeighbours: (slug: string) => Promise<BlogPostNeighbours>
	getPostSource: (slug: string) => Promise<BlogPostSource | null>
	/** Newest first. */
	getAllPostSources: (category: BlogCategory) => Promise<BlogPostSource[]>
}

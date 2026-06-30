import { mdxBlogRepository } from "@/features/blog/repositories/mdx-blog.repository"
import type { BlogRepository } from "@/features/blog/repositories/blog-repository.types"

export function getBlogRepository(): BlogRepository {
	return mdxBlogRepository
}

import { createMdxBlogRepository } from "@/features/blog/repositories/mdx-blog.repository"
import { createSupabaseBlogRepository } from "@/features/blog/repositories/supabase-blog.repository"
import type { BlogRepository } from "@/features/blog/repositories/blog-repository.types"
import { getRuntimeIsDev } from "@/lib/runtime/is-dev-runtime"
import { getServerEnv } from "@/lib/server-env"

export function getBlogRepository(isDev = getRuntimeIsDev()): BlogRepository {
	const { BLOG_DATA_SOURCE } = getServerEnv()

	if (BLOG_DATA_SOURCE === "supabase") {
		return createSupabaseBlogRepository({ isDev })
	}

	return createMdxBlogRepository({ isDev })
}

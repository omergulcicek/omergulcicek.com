import { createSupabaseBlogRepository } from "@/features/blog/repositories/supabase-blog.repository"
import type { BlogRepository } from "@/features/blog/repositories/blog-repository.types"
import { getRuntimeIsDev } from "@/lib/runtime/is-dev-runtime"

export function getBlogRepository(isDev = getRuntimeIsDev()): BlogRepository {
	return createSupabaseBlogRepository({ isDev })
}

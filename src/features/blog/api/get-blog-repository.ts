import { getRuntimeIsDev } from "@/helpers/runtime/is-dev-runtime"

import { createSupabaseBlogRepository } from "@/features/blog/api/supabase-blog.repository"
import type { BlogRepository } from "@/features/blog/types/blog-repository.types"

export function getBlogRepository(isDev = getRuntimeIsDev()): BlogRepository {
	return createSupabaseBlogRepository({ isDev })
}

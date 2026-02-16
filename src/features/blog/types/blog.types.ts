import type { z } from "zod"

import type { BlogPostSchema } from "@/features/blog/schemas/blog.schema"

export type BlogPostType = z.infer<typeof BlogPostSchema>

export interface BlogPropsType {
	posts: BlogPostType[]
}

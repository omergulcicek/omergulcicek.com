import {
	mapBlogPostDetailRow,
	mapBlogPostListRow
} from "@/features/blog/helpers/map-blog-post-row"
import { normalizeBlogSlug } from "@/features/blog/helpers/blog-slug"
import { sortBlogPosts } from "@/features/blog/helpers/blog-helpers"
import type {
	BlogPostDetail,
	BlogRepository
} from "@/features/blog/repositories/blog-repository.types"
import { fetchBlogPostNeighbours } from "@/features/blog/repositories/fetch-blog-post-neighbours"
import {
	blogPostDetailRowSchema,
	blogPostListRowsSchema
} from "@/features/blog/schemas/blog-post-row.schema"
import { getRuntimeIsDev } from "@/lib/runtime/is-dev-runtime"
import { createSupabaseServerClient } from "@/lib/supabase/create-supabase-server-client"

const LIST_COLUMNS =
	"slug, title, description, category, tags, locale, medium_url, interactive, published, published_at"

const DETAIL_COLUMNS = `${LIST_COLUMNS}, content, content_html, headings, og_image_path`

type SupabaseBlogRepositoryOptions = {
	isDev: boolean
}

export function createSupabaseBlogRepository({
	isDev
}: SupabaseBlogRepositoryOptions): BlogRepository {
	return {
		async getAllPosts() {
			const supabase = createSupabaseServerClient()
			let query = supabase
				.from("blog_posts")
				.select(LIST_COLUMNS)
				.order("published_at", { ascending: false, nullsFirst: false })

			if (!isDev) {
				query = query.eq("published", true)
			}

			const { data, error } = await query

			if (error) {
				throw new Error(`Failed to fetch blog posts: ${error.message}`)
			}

			const rows = blogPostListRowsSchema.parse(data ?? [])
			const posts = rows.map(mapBlogPostListRow)

			return sortBlogPosts(posts, "newest")
		},

		async getPostBySlug(slug) {
			const normalizedSlug = normalizeBlogSlug(slug)
			const supabase = createSupabaseServerClient()

			let query = supabase
				.from("blog_posts")
				.select(DETAIL_COLUMNS)
				.eq("slug", normalizedSlug)

			if (!isDev) {
				query = query.eq("published", true)
			}

			const { data, error } = await query.maybeSingle()

			if (error) {
				throw new Error(`Failed to fetch blog post: ${error.message}`)
			}

			if (!data) {
				return null
			}

			const row = blogPostDetailRowSchema.parse(data)
			const blogPost = mapBlogPostDetailRow(row)

			if (!isDev && !blogPost.published) {
				return null
			}

			let contentHtml = row.content_html
			let headings = row.headings

			if (!contentHtml || !headings) {
				// Fallback to runtime compilation if not migrated yet
				const { compileMdxToHtml } = await import("@/features/blog/lib/compile-mdx-content")
				const { enrichBlogContentHtml } = await import("@/features/blog/helpers/blog-content-html")
				
				const html = await compileMdxToHtml(row.content)
				const enriched = enrichBlogContentHtml(html)
				
				contentHtml = enriched.contentHtml
				headings = enriched.headings
			}

			return {
				...blogPost,
				contentHtml: contentHtml,
				headings: headings
			} satisfies BlogPostDetail
		},

		async getPostNeighbours(slug) {
			const normalizedSlug = normalizeBlogSlug(slug)
			const supabase = createSupabaseServerClient()

			return fetchBlogPostNeighbours({
				supabase,
				slug: normalizedSlug,
				isDev
			})
		}
	}
}

export const supabaseBlogRepository = createSupabaseBlogRepository({
	isDev: getRuntimeIsDev()
})

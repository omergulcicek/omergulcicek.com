import { enrichBlogContentHtml } from "@/features/blog/helpers/blog-content-html"
import {
	mapBlogPostDetailRow,
	mapBlogPostListRow
} from "@/features/blog/helpers/map-blog-post-row"
import { normalizeBlogSlug } from "@/features/blog/helpers/blog-slug"
import { sortBlogPosts } from "@/features/blog/helpers/blog-helpers"
import { compileMdxToHtml } from "@/features/blog/lib/compile-mdx-content"
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

const DETAIL_COLUMNS = `${LIST_COLUMNS}, content, og_image_path`

type SupabaseBlogRepositoryOptions = {
	isDev: boolean
}

type CompiledPostContent = ReturnType<typeof enrichBlogContentHtml>

const htmlCache = new Map<string, CompiledPostContent>()

async function compilePostContent(slug: string, content: string) {
	const cached = htmlCache.get(slug)

	if (cached) {
		return cached
	}

	const html = await compileMdxToHtml(content)
	const enriched = enrichBlogContentHtml(html)
	htmlCache.set(slug, enriched)

	return enriched
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

			const compiled = await compilePostContent(normalizedSlug, row.content)

			return {
				...blogPost,
				contentHtml: compiled.contentHtml,
				headings: compiled.headings
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

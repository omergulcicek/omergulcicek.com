import fs from "node:fs"
import path from "node:path"

import matter from "gray-matter"

import { mapBlogPostMetadata } from "@/features/blog/helpers/map-blog-post"
import { enrichBlogContentHtml } from "@/features/blog/helpers/blog-content-html"
import { normalizeBlogSlug } from "@/features/blog/helpers/blog-slug"
import { compileMdxToHtml } from "@/features/blog/lib/compile-mdx-content"
import {
	blogPostMetadataSchema,
	type BlogPostMetadata
} from "@/features/blog/schemas/blog.schema"
import type {
	BlogPostDetail,
	BlogRepository
} from "@/features/blog/repositories/blog-repository.types"
import type { BlogPost } from "@/features/blog/types/blog.types"
import { findBlogNeighbours, sortBlogPosts } from "@/features/blog/helpers/blog-helpers"
import { getRuntimeIsDev } from "@/lib/runtime/is-dev-runtime"

const CONTENT_DIR = path.join(process.cwd(), "src", "content")

type ParsedMdxPost = {
	metadata: BlogPostMetadata
	content: string
}

type MdxBlogRepositoryOptions = {
	isDev: boolean
}

let cachedPosts: ParsedMdxPost[] | null = null
let cacheTimestamp = 0
const CACHE_DURATION_MS = getRuntimeIsDev() ? 0 : 3_600_000

type CompiledPostContent = ReturnType<typeof enrichBlogContentHtml>

const htmlCache = new Map<string, CompiledPostContent>()

function readMdxFiles() {
	return fs
		.readdirSync(CONTENT_DIR)
		.filter((file) => file.endsWith(".mdx"))
}

function parseMdxFile(fileName: string): ParsedMdxPost {
	const raw = fs.readFileSync(path.join(CONTENT_DIR, fileName), "utf8")
	const file = matter(raw)
	const metadata = blogPostMetadataSchema.parse(file.data)

	return {
		metadata,
		content: file.content.trim()
	}
}

function loadParsedPosts() {
	const now = Date.now()

	if (cachedPosts && now - cacheTimestamp < CACHE_DURATION_MS) {
		return cachedPosts
	}

	const posts = readMdxFiles().map(parseMdxFile)
	cachedPosts = posts
	cacheTimestamp = now
	htmlCache.clear()

	return posts
}

function toVisiblePosts(posts: ParsedMdxPost[], isDev: boolean): BlogPost[] {
	const mapped = posts.map((post) => mapBlogPostMetadata(post.metadata))
	const visible = isDev ? mapped : mapped.filter((post) => post.published)

	return sortBlogPosts(visible, "newest")
}

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

export function createMdxBlogRepository({
	isDev
}: MdxBlogRepositoryOptions): BlogRepository {
	return {
		async getAllPosts() {
			return toVisiblePosts(loadParsedPosts(), isDev)
		},

		async getPostBySlug(slug) {
			const normalizedSlug = normalizeBlogSlug(slug)
			const post = loadParsedPosts().find(
				(entry) => entry.metadata.slug === normalizedSlug
			)

			if (!post) {
				return null
			}

			const blogPost = mapBlogPostMetadata(post.metadata)

			if (!isDev && !blogPost.published) {
				return null
			}

			const compiled = await compilePostContent(
				normalizedSlug,
				post.content
			)

			return {
				...blogPost,
				contentHtml: compiled.contentHtml,
				headings: compiled.headings
			} satisfies BlogPostDetail
		},

		async getPostNeighbours(slug) {
			const normalizedSlug = normalizeBlogSlug(slug)
			const posts = toVisiblePosts(loadParsedPosts(), isDev)

			return findBlogNeighbours(posts, normalizedSlug)
		}
	}
}

export const mdxBlogRepository = createMdxBlogRepository({
	isDev: getRuntimeIsDev()
})

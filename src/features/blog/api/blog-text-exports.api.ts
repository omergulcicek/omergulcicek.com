import {
	BLOG_PAGE_CACHE_CONTROL,
	BLOG_PAGE_DEV_CACHE_CONTROL
} from "@/features/blog/constants/blog-cache.constants"
import { resolveBlogSlugRedirect } from "@/features/blog/constants/blog-redirects.constants"
import { getBlogPostMarkdownPath } from "@/features/blog/helpers/blog-helpers"
import { routeParamToBlogSlug } from "@/features/blog/helpers/blog-slug"
import {
	getBlogPostUrl,
	renderBlogPostBody,
	renderBlogPostMarkdown,
	renderMarkdownToHtml
} from "@/features/blog/lib/render-blog-markdown"
import { getBlogRepository } from "@/features/blog/repositories"
import type { BlogPostSource } from "@/features/blog/repositories/blog-repository.types"
import type { BlogCategory, BlogPost } from "@/features/blog/types/blog.types"

/** Text outputs of the blog for agents and feed readers: Markdown copies and full text. */

const MARKDOWN_HEADERS = {
	"Content-Type": "text/markdown; charset=utf-8",
	"Cache-Control": import.meta.env.PROD
		? BLOG_PAGE_CACHE_CONTROL
		: BLOG_PAGE_DEV_CACHE_CONTROL
}

/**
 * Converts every post, skipping (and reporting) a post whose MDX cannot be converted,
 * so one broken post does not take the whole feed or llms-full.txt down.
 */
async function convertSources<T>(
	sources: BlogPostSource[],
	convert: (source: BlogPostSource) => T | Promise<T>
) {
	const results = await Promise.all(
		sources.map(async (source) => {
			try {
				return { post: source.post, value: await convert(source) }
			} catch (error) {
				console.error(`Could not convert blog post ${source.post.slug}`, error)
				return null
			}
		})
	)

	return results.filter(
		(result): result is { post: BlogPost; value: Awaited<T> } => result !== null
	)
}

/** Response for `/blog/<slug>.md` and `/notlar/<slug>.md`. */
export async function getBlogPostMarkdownResponse({
	routeSlug,
	category
}: {
	routeSlug: string
	category: BlogCategory
}) {
	const requestedSlug = routeParamToBlogSlug(routeSlug)
	const slug = resolveBlogSlugRedirect(requestedSlug)
	const source = await getBlogRepository().getPostSource(slug)

	if (!source) {
		return new Response("Not found\n", {
			status: 404,
			headers: { "Content-Type": "text/plain; charset=utf-8" }
		})
	}

	const { post } = source

	if (slug !== requestedSlug || post.category !== category) {
		return new Response(null, {
			status: 301,
			headers: { Location: getBlogPostMarkdownPath(post.slug, post.category) }
		})
	}

	return new Response(renderBlogPostMarkdown(source), {
		headers: {
			...MARKDOWN_HEADERS,
			// The HTML page stays the canonical document for search engines.
			Link: `<${getBlogPostUrl(post)}>; rel="canonical"`
		}
	})
}

/** Full post bodies as Markdown, newest first, for llms-full.txt. */
export async function getBlogPostBodies(category: BlogCategory) {
	const sources = await getBlogRepository(false).getAllPostSources(category)
	const bodies = await convertSources(sources, renderBlogPostBody)

	return bodies.map(({ post, value }) => ({ post, body: value }))
}

/** Full post HTML by slug for the RSS `content:encoded` element. */
export async function getBlogFeedContentHtml(category: BlogCategory) {
	const sources = await getBlogRepository(false).getAllPostSources(category)
	const html = await convertSources(sources, (source) =>
		renderMarkdownToHtml(renderBlogPostBody(source))
	)

	return new Map(html.map(({ post, value }) => [post.slug, value]))
}

import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import * as runtime from "react/jsx-runtime"
import { evaluate } from "@mdx-js/mdx"
import remarkGfm from "remark-gfm"

import { SITE } from "@/constants/site.constants"

import { getBlogPostPath } from "@/features/blog/helpers/blog-helpers"
import { convertMdxToMarkdown } from "@/features/blog/lib/mdx-to-markdown"
import type { BlogPostSource } from "@/features/blog/repositories/blog-repository.types"
import type { BlogPost } from "@/features/blog/types/blog.types"

/** Machine-facing note; the site itself is Turkish, but agents read English reliably. */
const INTERACTIVE_NOTE =
	"Interactive demos are left out of this Markdown copy; open the url for the full post."

export function getBlogPostUrl(post: BlogPost) {
	return `${SITE.url}${getBlogPostPath(post.slug, post.category)}`
}

/** A post's body as Markdown, with absolute links. */
export function renderBlogPostBody({ content }: BlogPostSource) {
	return convertMdxToMarkdown(content, { siteUrl: SITE.url })
}

/** Standalone Markdown copy of a post (`/blog/<slug>.md`), with YAML front matter. */
export function renderBlogPostMarkdown(source: BlogPostSource) {
	const { post } = source
	const frontMatter = [
		`title: ${JSON.stringify(post.title)}`,
		`description: ${JSON.stringify(post.description)}`,
		`url: ${getBlogPostUrl(post)}`,
		`author: ${JSON.stringify(SITE.name)}`,
		`published: ${post.publishedAt}`,
		`language: ${post.locale}`,
		`tags: ${JSON.stringify(post.tags)}`,
		...(post.interactive ? [`note: ${JSON.stringify(INTERACTIVE_NOTE)}`] : [])
	]

	return `---\n${frontMatter.join("\n")}\n---\n\n# ${post.title}\n\n${renderBlogPostBody(source)}\n`
}

/** Markdown to HTML for RSS readers: no syntax highlighting, no client-side widgets. */
export async function renderMarkdownToHtml(markdown: string) {
	const { default: Content } = await evaluate(markdown, {
		...runtime,
		format: "md",
		remarkPlugins: [remarkGfm],
		development: false
	})

	return renderToStaticMarkup(createElement(Content))
}

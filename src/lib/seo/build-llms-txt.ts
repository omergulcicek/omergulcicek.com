import { ME } from "@/constants/me.constants"
import { SITE_COPY } from "@/constants/site-copy.constants"
import { SITE } from "@/constants/site.constants"

import { STATIC_PAGE_SEO } from "@/lib/seo/page-seo.constants"

import type { BlogPost } from "@/features/blog"
import {
	BLOG_SECTIONS,
	getBlogPostMarkdownPath,
	getBlogPostPath
} from "@/features/blog"

/**
 * Machine-facing copy for /llms.txt (https://llmstxt.org). Page and post texts come from
 * the site's own Turkish copy; only these instructions for agents are written in English.
 */
const LLMS_COPY = {
	about: [
		"Language: Turkish (tr). A few posts are also published in English.",
		"Every post has a Markdown copy at its URL plus `.md`; the links below point to them."
	],
	fullText: "Full text of all technical posts in one file",
	pages: "Pages",
	blog: "Blog",
	projects: "Projects",
	optional: "Optional",
	newestFirst: "newest first",
	feeds: "RSS feeds",
	sourceCode: "Source code of this site",
	fullTextIntro: (count: number) =>
		`${count} technical posts, newest first. Each post starts with its title, URL, date, language and tags, followed by the body as Markdown.`
} as const

const PAGE_KEYS = [
	"about",
	"experiences",
	"projects",
	"journey",
	"setup",
	"bookmarks"
] as const satisfies readonly (keyof typeof STATIC_PAGE_SEO)[]

function absoluteUrl(path: string) {
	return `${SITE.url}${path}`
}

function toPostLine(post: BlogPost) {
	const url = absoluteUrl(getBlogPostMarkdownPath(post.slug, post.category))
	const language = post.locale === "tr" ? "" : `, ${post.locale}`

	return `- [${post.title}](${url}): ${post.description} (${post.publishedAt}${language})`
}

function publishedNewestFirst(
	posts: BlogPost[],
	category: BlogPost["category"]
) {
	return posts
		.filter((post) => post.published && post.category === category)
		.sort((left, right) => right.publishedAt.localeCompare(left.publishedAt))
}

/** /llms.txt: who the author is, the main pages and every post, linked as Markdown. */
export function buildLlmsTxt(posts: BlogPost[]): string {
	const technicalPosts = publishedNewestFirst(posts, "technical")
	const personalPosts = publishedNewestFirst(posts, "personal")
	const contact = ME.contact

	const sections = [
		`# ${ME.personal.fullName} — ${ME.personal.title}`,
		`> ${SITE_COPY.meta.home}`,
		[
			...LLMS_COPY.about.map((line) => `- ${line}`),
			`- ${LLMS_COPY.fullText}: ${absoluteUrl("/llms-full.txt")}`,
			`- Contact: ${contact.email} · [GitHub](${contact.github}) · [LinkedIn](${contact.linkedin}) · [X](${contact.x})`
		].join("\n"),
		[
			`## ${LLMS_COPY.pages}`,
			"",
			...PAGE_KEYS.map((key) => {
				const page = STATIC_PAGE_SEO[key]
				return `- [${page.title}](${absoluteUrl(page.path)}): ${page.description}`
			})
		].join("\n"),
		[
			`## ${LLMS_COPY.blog}`,
			"",
			`${SITE_COPY.blog.intro} (${LLMS_COPY.newestFirst})`,
			"",
			...technicalPosts.map(toPostLine)
		].join("\n"),
		[
			`## ${LLMS_COPY.projects}`,
			"",
			...ME.projects.map(
				(project) =>
					`- [${project.title}](${project.href}): ${project.description}`
			)
		].join("\n"),
		[
			`## ${LLMS_COPY.optional}`,
			"",
			`${SITE_COPY.notes.title}: ${SITE_COPY.notes.intro} (${LLMS_COPY.newestFirst})`,
			"",
			...personalPosts.map(toPostLine),
			"",
			`- [${LLMS_COPY.feeds}: ${BLOG_SECTIONS.technical.title}](${absoluteUrl(BLOG_SECTIONS.technical.feedPath)})`,
			`- [${LLMS_COPY.feeds}: ${BLOG_SECTIONS.personal.title}](${absoluteUrl(BLOG_SECTIONS.personal.feedPath)})`,
			`- [${LLMS_COPY.sourceCode}](${SITE.repository})`
		].join("\n")
	]

	return `${sections.join("\n\n")}\n`
}

export type LlmsFullTxtEntry = {
	post: BlogPost
	body: string
}

/** /llms-full.txt: the body of every technical post as Markdown, in one file. */
export function buildLlmsFullTxt(entries: LlmsFullTxtEntry[]): string {
	const header = [
		`# ${ME.personal.fullName} — ${BLOG_SECTIONS.technical.title}`,
		`> ${SITE_COPY.meta.blog}`,
		LLMS_COPY.fullTextIntro(entries.length)
	].join("\n\n")

	const posts = entries.map(({ post, body }) =>
		[
			`# ${post.title}`,
			[
				`URL: ${absoluteUrl(getBlogPostPath(post.slug, post.category))}`,
				`Published: ${post.publishedAt}`,
				`Language: ${post.locale}`,
				`Tags: ${post.tags.join(", ")}`
			].join("\n"),
			body
		].join("\n\n")
	)

	return `${[header, ...posts].join("\n\n---\n\n")}\n`
}

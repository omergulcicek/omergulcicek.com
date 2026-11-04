import { createProcessor } from "@mdx-js/mdx"
import type { Nodes, Parent } from "mdast"
import remarkGfm from "remark-gfm"

type MdxJsxNode = Extract<
	Nodes,
	{ type: "mdxJsxFlowElement" | "mdxJsxTextElement" }
>

type ConvertMdxToMarkdownOptions = {
	/** Turns root-relative links and images into absolute URLs. */
	siteUrl: string
}

const mdxParser = createProcessor({ remarkPlugins: [remarkGfm] })

const SPECIAL_NODE_TYPES = new Set([
	"mdxjsEsm",
	"mdxFlowExpression",
	"mdxTextExpression",
	"mdxJsxFlowElement",
	"mdxJsxTextElement"
])

const STRING_LITERAL_PATTERN = /^\s*(["'`])([\s\S]*)\1\s*$/

function isSpecialNode(node: Nodes) {
	return SPECIAL_NODE_TYPES.has(node.type)
}

function isParent(node: Nodes): node is Nodes & Parent {
	return "children" in node && Array.isArray(node.children)
}

function startOf(node: Nodes) {
	return node.position?.start.offset ?? 0
}

function endOf(node: Nodes) {
	return node.position?.end.offset ?? 0
}

function readAttribute(node: MdxJsxNode, name: string) {
	for (const attribute of node.attributes) {
		if (
			attribute.type === "mdxJsxAttribute" &&
			attribute.name === name &&
			typeof attribute.value === "string"
		) {
			return attribute.value
		}
	}

	return undefined
}

function dedent(value: string) {
	return value
		.split("\n")
		.map((line) => line.trim())
		.join("\n")
		.replace(/\n{3,}/g, "\n\n")
		.trim()
}

function toBlockquote(title: string | undefined, body: string) {
	const lines = [...(title ? [`**${title}**`, ""] : []), ...body.split("\n")]

	return lines.map((line) => (line ? `> ${line}` : ">")).join("\n")
}

/**
 * Converts a post's MDX source to plain Markdown for AI agents, llms-full.txt and RSS.
 * Markdown and code blocks are copied from the source as written; only MDX syntax
 * (imports, expressions, JSX) is rewritten. Interactive widgets have no Markdown form
 * and are dropped; notices become blockquotes and inline HTML becomes Markdown.
 */
export function convertMdxToMarkdown(
	source: string,
	{ siteUrl }: ConvertMdxToMarkdownOptions
) {
	const tree = mdxParser.parse(source)

	const absolutize = (url: string) =>
		url.startsWith("/") ? `${siteUrl}${url}` : url

	function collectSpecialNodes(node: Nodes, found: Nodes[]) {
		if (!isParent(node)) {
			return
		}

		for (const child of node.children) {
			if (isSpecialNode(child)) {
				found.push(child)
			} else {
				collectSpecialNodes(child, found)
			}
		}
	}

	/** Source text of a node's children, with nested MDX syntax rewritten. */
	function renderChildren(node: Nodes) {
		if (!isParent(node) || node.children.length === 0) {
			return ""
		}

		const first = node.children[0]
		const last = node.children.at(-1)

		if (!first || !last) {
			return ""
		}

		const specials: Nodes[] = []
		collectSpecialNodes(node, specials)

		let output = ""
		let cursor = startOf(first)

		for (const special of specials) {
			output += source.slice(cursor, startOf(special))
			output += renderSpecialNode(special)
			cursor = endOf(special)
		}

		return output + source.slice(cursor, endOf(last))
	}

	function renderJsx(node: MdxJsxNode) {
		const children = dedent(renderChildren(node))

		switch (node.name) {
			case "a": {
				const href = readAttribute(node, "href")
				return href ? `[${children}](${absolutize(href)})` : children
			}
			case "strong":
			case "b":
				return children ? `**${children}**` : ""
			case "em":
			case "i":
				return children ? `*${children}*` : ""
			case "code":
				return children ? `\`${children}\`` : ""
			case "br":
				return "\n"
			case "img": {
				const src = readAttribute(node, "src")
				return src
					? `![${readAttribute(node, "alt") ?? ""}](${absolutize(src)})`
					: ""
			}
			case "BlogNotice":
				return toBlockquote(readAttribute(node, "title"), children)
			default:
				return children
		}
	}

	function renderSpecialNode(node: Nodes): string {
		if (
			node.type === "mdxJsxFlowElement" ||
			node.type === "mdxJsxTextElement"
		) {
			return renderJsx(node)
		}

		if (
			node.type === "mdxFlowExpression" ||
			node.type === "mdxTextExpression"
		) {
			// `{" "}` and similar string literals keep their text; other expressions are code.
			return node.value.match(STRING_LITERAL_PATTERN)?.[2] ?? ""
		}

		return ""
	}

	return absolutizeMarkdownUrls(renderChildren(tree), absolutize)
		.replace(/\n{3,}/g, "\n\n")
		.trim()
}

/** Root-relative Markdown links and images outside code fences become absolute URLs. */
function absolutizeMarkdownUrls(
	markdown: string,
	absolutize: (url: string) => string
) {
	let isInFence = false

	return markdown
		.split("\n")
		.map((line) => {
			if (/^\s*(```|~~~)/.test(line)) {
				isInFence = !isInFence
				return line
			}

			if (isInFence) {
				return line
			}

			return line.replace(
				/\]\((\/[^)\s]*)/g,
				(_match, url: string) => `](${absolutize(url)}`
			)
		})
		.join("\n")
}

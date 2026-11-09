import { createProcessor } from "@mdx-js/mdx"
import remarkGfm from "remark-gfm"

/*
 * The few mdast fields the converter reads. Written out here rather than imported, because
 * `mdast` types are only a transitive dependency of @mdx-js/mdx.
 */
type MdNode = {
  type: string
  name?: string | null
  value?: string
  children?: MdNode[]
  attributes?: { type: string; name?: string; value?: unknown }[]
  position?: { start: { offset?: number }; end: { offset?: number } }
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

const startOf = (node: MdNode) => node.position?.start.offset ?? 0
const endOf = (node: MdNode) => node.position?.end.offset ?? 0

function readAttribute(node: MdNode, name: string) {
  const attribute = node.attributes?.find(
    (item) => item.type === "mdxJsxAttribute" && item.name === name
  )
  return typeof attribute?.value === "string" ? attribute.value : undefined
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

/** Root-relative Markdown links and images outside code fences become absolute URLs. */
function absolutizeMarkdownUrls(markdown: string, absolutize: (url: string) => string) {
  let isInFence = false

  return markdown
    .split("\n")
    .map((line) => {
      if (/^\s*(```|~~~)/.test(line)) {
        isInFence = !isInFence
        return line
      }
      if (isInFence) return line
      return line.replace(/\]\((\/[^)\s]*)/g, (_match, url: string) => `](${absolutize(url)}`)
    })
    .join("\n")
}

/**
 * A post's MDX as plain Markdown, for llms-full.txt. Markdown and code blocks are copied as
 * written; only MDX syntax (imports, expressions, JSX) is rewritten. Interactive demos have no
 * Markdown form and are dropped; notices become blockquotes. Ported from v10.
 */
export function convertMdxToMarkdown(source: string, siteUrl: string) {
  const tree = mdxParser.parse(source) as unknown as MdNode
  const absolutize = (url: string) => (url.startsWith("/") ? `${siteUrl}${url}` : url)

  function collectSpecialNodes(node: MdNode, found: MdNode[]) {
    for (const child of node.children ?? []) {
      if (SPECIAL_NODE_TYPES.has(child.type)) found.push(child)
      else collectSpecialNodes(child, found)
    }
  }

  /** Source text of a node's children, with nested MDX syntax rewritten. */
  function renderChildren(node: MdNode): string {
    const first = node.children?.[0]
    const last = node.children?.at(-1)
    if (!first || !last) return ""

    const specials: MdNode[] = []
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

  function renderJsx(node: MdNode) {
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
        return src ? `![${readAttribute(node, "alt") ?? ""}](${absolutize(src)})` : ""
      }
      case "BlogNotice":
        return toBlockquote(readAttribute(node, "title"), children)
      default:
        return children
    }
  }

  function renderSpecialNode(node: MdNode): string {
    if (node.type === "mdxJsxFlowElement" || node.type === "mdxJsxTextElement") {
      return renderJsx(node)
    }
    if (node.type === "mdxFlowExpression" || node.type === "mdxTextExpression") {
      // `{" "}` and similar string literals keep their text; other expressions are code.
      return node.value?.match(STRING_LITERAL_PATTERN)?.[2] ?? ""
    }
    return ""
  }

  return absolutizeMarkdownUrls(renderChildren(tree), absolutize)
    .replace(/\n{3,}/g, "\n\n")
    .trim()
}

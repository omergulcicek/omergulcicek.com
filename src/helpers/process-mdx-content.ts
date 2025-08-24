import { compileMDX } from "next-mdx-remote/rsc"

import rehypePrettyCode from "rehype-pretty-code"
import { visit } from "unist-util-visit"

import type {
	MdastJsxAttributeType,
	MdastJsxTextElementType,
	MdastNodeType,
	MdastParagraphNodeType,
	MdastTextNodeType
} from "@/types/mdast-nodes.type"

import { components } from "@/widgets"

function remarkRating() {
	return function transformer(tree: unknown) {
		visit(
			tree as MdastNodeType,
			"paragraph",
			(paragraphNode: MdastParagraphNodeType) => {
				const children = paragraphNode.children as MdastNodeType[]
				for (let i = 0; i < children.length; i += 1) {
					const child = children[i]
					if ((child as MdastTextNodeType)?.type === "text") {
						const textNode = child as MdastTextNodeType
						const parts: MdastNodeType[] = []
						const regex = /Kitaba puanım:\s*(\d{1,2})\s*\/\s*10\b/g
						let lastIndex = 0
						let match: RegExpExecArray | null
						while ((match = regex.exec(textNode.value)) !== null) {
							const before = textNode.value.slice(lastIndex, match.index)
							if (before)
								parts.push({ type: "text", value: before } as MdastTextNodeType)
							const valueNum = Math.max(0, Math.min(10, Number(match[1])))
							parts.push({
								type: "mdxJsxTextElement",
								name: "Rating",
								attributes: [
									{
										type: "mdxJsxAttribute",
										name: "value",
										value: valueNum
									} as MdastJsxAttributeType,
									{
										type: "mdxJsxAttribute",
										name: "max",
										value: 10
									} as MdastJsxAttributeType
								],
								children: []
							} as MdastJsxTextElementType)
							lastIndex = match.index + match[0].length
						}
						const after = textNode.value.slice(lastIndex)
						if (after)
							parts.push({ type: "text", value: after } as MdastTextNodeType)
						if (parts.length > 0) {
							children.splice(i, 1, ...(parts as MdastNodeType[]))
							i += parts.length - 1
						}
					}
				}
			}
		)
	}
}

export async function processMdxContent(content: string) {
	const { content: compiledContent } = await compileMDX({
		source: content,
		options: {
			parseFrontmatter: true,
			mdxOptions: {
				remarkPlugins: [remarkRating],
				rehypePlugins: [
					[
						rehypePrettyCode,
						{
							theme: "github-light"
						}
					]
				]
			}
		},
		components
	})

	return compiledContent
}

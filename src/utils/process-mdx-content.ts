import { compileMDX } from "next-mdx-remote/rsc"

import rehypePrettyCode from "rehype-pretty-code"

import { components } from "@/widgets"

export async function processMdxContent(content: string) {
	const { content: compiledContent } = await compileMDX({
		source: content,
		options: {
			parseFrontmatter: true,
			mdxOptions: {
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

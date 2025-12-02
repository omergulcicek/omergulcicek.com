import { compileMDX } from "next-mdx-remote/rsc"

import rehypePrettyCode from "rehype-pretty-code"

import type { MdxComponentsMapType } from "@/types/mdx-components.type"

export async function processMdxContent(
	content: string,
	components: MdxComponentsMapType
) {
	const { content: compiledContent } = await compileMDX({
		source: content,
		options: {
			parseFrontmatter: true,
			mdxOptions: {
				rehypePlugins: [
					[
						rehypePrettyCode,
						{
							theme: {
								light: "github-light",
								dark: "one-dark-pro"
							}
						}
					]
				]
			}
		},
		components
	})

	return compiledContent
}

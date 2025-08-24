import { compileMDX } from "next-mdx-remote/rsc"

import rehypePrettyCode from "rehype-pretty-code"

export async function processMdxContent(
	content: string,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	components: Record<string, any>
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

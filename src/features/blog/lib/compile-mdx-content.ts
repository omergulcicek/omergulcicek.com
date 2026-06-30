import { evaluate } from "@mdx-js/mdx"
import type { EvaluateOptions } from "@mdx-js/mdx"
import * as runtime from "react/jsx-runtime"
import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import rehypePrettyCode from "rehype-pretty-code"
import remarkGfm from "remark-gfm"

import { remarkStripCustomMdxComponents } from "@/features/blog/lib/remark-strip-custom-mdx-components"

const mdxEvaluateOptions: EvaluateOptions = {
	...runtime,
	baseUrl: import.meta.url,
	remarkPlugins: [remarkGfm, remarkStripCustomMdxComponents],
	rehypePlugins: [
		[
			rehypePrettyCode,
			{
				theme: {
					light: "github-light",
					dark: "one-dark-pro"
				},
				defaultLang: "plaintext",
				keepBackground: false
			}
		]
	],
	development: false
}

export async function compileMdxToHtml(content: string) {
	const { default: MDXContent } = await evaluate(content, mdxEvaluateOptions)

	return renderToStaticMarkup(createElement(MDXContent))
}

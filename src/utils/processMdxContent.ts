import rehypePrettyCode from "rehype-pretty-code"
import rehypeStringify from "rehype-stringify"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import { unified } from "unified"

export async function processMdxContent(content: string): Promise<string> {
	const file = await unified()
		.use(remarkParse)
		.use(remarkRehype)
		.use(rehypePrettyCode, {
			// keepBackground: false,
		})
		.use(rehypeStringify)
		.process(content)

	return String(file)
}

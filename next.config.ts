import createMDX from "@next/mdx"

import rehypePrettyCode from "rehype-pretty-code"

const withMDX = createMDX({
	options: {
		remarkPlugins: [],
		rehypePlugins: [rehypePrettyCode]
	}
})

const nextConfig = {
	images: {
		domains: ["api.microlink.io"]
	},
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"]
}

export default withMDX(nextConfig)

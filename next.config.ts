import createMDX from "@next/mdx"

import rehypePrettyCode from "rehype-pretty-code"

const withMDX = createMDX({
	options: {
		remarkPlugins: [],
		rehypePlugins: [rehypePrettyCode]
	}
})

const nextConfig = {
	output: "export" as const,
	images: {
		domains: ["api.microlink.io"],
		unoptimized: true
	},
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	trailingSlash: true
}

export default withMDX(nextConfig)

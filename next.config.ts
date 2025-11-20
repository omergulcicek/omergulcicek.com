import type { NextConfig } from "next"
import type { RemotePattern } from "next/dist/shared/lib/image-config"
import createMDX from "@next/mdx"

const withMDX = createMDX({
	options: {
		remarkPlugins: [],
		rehypePlugins: ["rehype-pretty-code"]
	}
})

const IMAGE_REMOTE_PATTERNS: RemotePattern[] = [
	{
		protocol: "https",
		hostname: "api.microlink.io"
	}
]

const nextConfig: NextConfig = {
	output: "export",
	images: {
		remotePatterns: IMAGE_REMOTE_PATTERNS,
		unoptimized: true
	},
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	trailingSlash: true
}

export default withMDX(nextConfig)

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

const withBundleAnalyzer = process.env.ANALYZE === "true"
	? // eslint-disable-next-line @typescript-eslint/no-require-imports
	  require("@next/bundle-analyzer")({
			enabled: true
		})
	: (config: NextConfig) => config

const nextConfig: NextConfig = {
	output: "export",
	images: {
		remotePatterns: IMAGE_REMOTE_PATTERNS,
		unoptimized: true
	},
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	trailingSlash: true
}

export default withBundleAnalyzer(withMDX(nextConfig))

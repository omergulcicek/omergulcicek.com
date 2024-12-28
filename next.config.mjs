import createMDX from "@next/mdx"

// @ts-check
/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
	output: "export",
	images: {
		unoptimized: true
	},
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	async rewrites() {
		return [
			{
				source: "/blog/:slug",
				destination: "/:slug"
			}
		]
	}
}

const withMDX = createMDX({
	// Add markdown plugins here, as desired
})

export default withMDX(nextConfig)

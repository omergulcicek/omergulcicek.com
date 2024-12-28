import createMDX from "@next/mdx"

// @ts-check
/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
	// output: "export",
  trailingSlash: true,
	images: {
		unoptimized: true
	},
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"]
}

const withMDX = createMDX({
	// Add markdown plugins here, as desired
})

export default withMDX(nextConfig)

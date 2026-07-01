export const HERO_IMAGE = {
	alt: "Ömer Gülçiçek",
	width: 672,
	height: 672,
	sources: {
		webp: {
			"1x": "/omergulcicek-672.webp",
			"2x": "/omergulcicek-1344.webp"
		},
		jpeg: "/omergulcicek-672.jpg"
	},
	lcpPreload: [
		{
			href: "/omergulcicek-672.webp",
			type: "image/webp",
			media: "(max-width: 671px)"
		},
		{
			href: "/omergulcicek-1344.webp",
			type: "image/webp",
			media: "(min-width: 672px)"
		}
	]
} as const

import { ME } from "@/constants/me.constants"

export const HERO_IMAGE = {
	alt: ME.personal.fullName,
	width: 216,
	height: 216,
	sources: {
		webp: {
			"1x": "/omergulcicek-216.webp",
			"2x": "/omergulcicek-432.webp"
		},
		jpeg: "/omergulcicek-216.jpg"
	},
	lcpPreload: [
		{
			href: "/omergulcicek-216.webp",
			type: "image/webp"
		}
	]
} as const

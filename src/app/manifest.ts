import type { MetadataRoute } from "next"

import { SITE, USER } from "@/constants"

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: SITE.name,
		short_name: USER.firstName,
		description: SITE.description,
		start_url: "/",
		display: "standalone",
		background_color: "#ffffff",
		theme_color: "#3b82f6",
		icons: [
			{
				src: USER.avatar,
				sizes: "192x192",
				type: "image/png"
			},
			{
				src: USER.avatar,
				sizes: "512x512",
				type: "image/png"
			}
		],
		categories: ["productivity", "utilities"],
		lang: "tr",
		dir: "ltr",
		orientation: "portrait",
		scope: "/",
		prefer_related_applications: false
	}
}

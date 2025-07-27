import type { MetadataRoute } from "next"

import { SITE } from "@/constants/site"

export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
	const baseUrl = SITE.url

	return {
		rules: {
			userAgent: "*",
			allow: "/"
		},
		sitemap: `${baseUrl}/sitemap.xml`
	}
}

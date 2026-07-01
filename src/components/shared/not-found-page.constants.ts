import { SITE } from "@/constants/site.constants"
import { SITE_CONTENT } from "@/constants/site-content.constants"
import { buildPageHead } from "@/lib/seo/build-page-head"

export function getNotFoundHead() {
	return buildPageHead({
		title: `${SITE_CONTENT.notFoundTitle} · ${SITE.name}`,
		description: SITE_CONTENT.notFoundDescription,
		path: "/404",
		robots: "noindex, nofollow",
		useTitleTemplate: false
	})
}

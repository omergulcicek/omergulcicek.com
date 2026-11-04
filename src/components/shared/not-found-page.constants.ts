import { SITE_COPY } from "@/constants/site-copy.constants"
import { SITE } from "@/constants/site.constants"

import { buildPageHead } from "@/helpers/seo/build-page-head"

export function getNotFoundHead() {
	return buildPageHead({
		title: `${SITE_COPY.notFound.title} · ${SITE.name}`,
		description: SITE_COPY.notFound.description,
		path: "/404",
		robots: "noindex, nofollow",
		useTitleTemplate: false
	})
}

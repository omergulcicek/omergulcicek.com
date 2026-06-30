import { SITE } from "@/constants/site.constants"
import { SITE_CONTENT } from "@/constants/site-content.constants"

export function getNotFoundHead() {
	return {
		meta: [
			{ title: `${SITE_CONTENT.notFoundTitle} · ${SITE.name}` },
			{
				name: "description",
				content: SITE_CONTENT.notFoundDescription
			},
			{ name: "robots", content: "noindex, nofollow" }
		]
	}
}

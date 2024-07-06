import { AnimationListLayout } from "@/layouts/animation-list-layout"

import { webSiteData } from "@/data/website-data"

export function WebSitesList() {
	if (!webSiteData) return null

	return <AnimationListLayout data={webSiteData} />
}

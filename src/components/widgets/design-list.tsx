import { AnimationListLayout } from "@/layouts/animation-list-layout"

import { designData } from "@/data/design-data"

export function DesignList() {
	if (!designData) return null

	return <AnimationListLayout data={designData} />
}

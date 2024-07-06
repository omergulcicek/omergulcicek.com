import { AnimationListLayout } from "@/layouts/animation-list-layout"

import { fontData } from "@/data/font-data"

export function FontList() {
	if (!fontData) return null

	return <AnimationListLayout data={fontData} />
}

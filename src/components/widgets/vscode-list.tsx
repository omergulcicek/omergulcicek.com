import { AnimationListLayout } from "@/layouts/animation-list-layout"

import { vsCodeData } from "@/data/vs-code-data"

export function VSCodeList() {
	if (!vsCodeData) return null

	return <AnimationListLayout data={vsCodeData} />
}

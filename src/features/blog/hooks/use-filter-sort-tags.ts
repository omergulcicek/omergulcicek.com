import { useMemo } from "react"

import { librariesAndTools, mainStack } from "@/constants"

export function useFilterSortTags(tags: string[]) {
	return useMemo(() => {
		const unique = Array.from(new Set(tags)).filter(Boolean)

		const mainStackSet = new Set(mainStack)
		const librariesSet = new Set(librariesAndTools)
		const vitrinList = unique.filter((t) => mainStackSet.has(t))
		const librariesList = unique.filter((t) => librariesSet.has(t))
		const othersList = unique.filter(
			(t) => !mainStackSet.has(t) && !librariesSet.has(t)
		)

		vitrinList.sort((a, b) => mainStack.indexOf(a) - mainStack.indexOf(b))
		librariesList.sort(
			(a, b) => librariesAndTools.indexOf(a) - librariesAndTools.indexOf(b)
		)
		othersList.sort((a, b) => a.localeCompare(b))

		return {
			vitrin: vitrinList,
			librariesAndToolsList: librariesList,
			others: othersList
		}
	}, [tags])
}

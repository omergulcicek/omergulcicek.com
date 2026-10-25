import { type ReactNode, type RefObject } from "react"

import { cn } from "@/lib/utils"

import {
	blogFilterTagsCollapsedClass,
	blogFilterTagsContainerClass,
	blogFilterTagsExpandedClass
} from "@/components/shared/filter-chip.styles"

export type FilterChipRowProps = {
	expanded: boolean
	rowRef: RefObject<HTMLDivElement | null>
	children: ReactNode
}

export function FilterChipRow({
	expanded,
	rowRef,
	children
}: FilterChipRowProps) {
	return (
		<div
			ref={rowRef}
			className={cn(
				blogFilterTagsContainerClass,
				expanded ? blogFilterTagsExpandedClass : blogFilterTagsCollapsedClass
			)}
		>
			{children}
		</div>
	)
}

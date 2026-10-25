import { cn } from "@/lib/utils"

import { surfaceDoubleFrameClass } from "@/components/shared/interactive-card.styles"
import { cardPaddingClass } from "@/components/shared/prose.styles"

export function getInterestCardClassName(colorClass: string, isLink: boolean) {
	return cn(
		surfaceDoubleFrameClass,
		"flex flex-col gap-3 rounded-2xl",
		cardPaddingClass,
		colorClass || "bg-card/50",
		isLink &&
			"group transition-[border-color,box-shadow] hover:border-foreground/10 hover:ring-foreground/8"
	)
}

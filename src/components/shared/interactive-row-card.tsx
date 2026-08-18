import { ChevronRight } from "lucide-react"
import type { ReactNode } from "react"

import { interactiveCardChevronClass } from "@/components/shared/interactive-card.styles"

type InteractiveRowCardProps = {
	visual: ReactNode
	title: ReactNode
	description: string
	trailing?: ReactNode
}

export function InteractiveRowCard({
	visual,
	title,
	description,
	trailing
}: InteractiveRowCardProps) {
	return (
		<div className="flex items-start gap-4">
			{visual}
			<div className="flex min-w-0 flex-1 flex-col gap-2">
				<div className="flex items-start justify-between gap-2 md:gap-3">
					{title}
					{trailing ?? (
						<ChevronRight
							className={interactiveCardChevronClass}
							aria-hidden
						/>
					)}
				</div>
				<p className="text-muted-foreground text-pretty text-xs leading-relaxed md:text-sm">
					{description}
				</p>
			</div>
		</div>
	)
}

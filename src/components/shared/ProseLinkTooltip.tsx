import type { ReactElement, ReactNode } from "react"

import {
	formatLinkTooltip,
	shouldShowLinkTooltip
} from "@/lib/format-link-tooltip"

import {
	Tooltip,
	TooltipContent,
	TooltipTrigger
} from "@/components/ui/tooltip"

type ProseLinkTooltipProps = {
	href?: string
	label: ReactNode
	children: ReactElement
}

/** Shows the destination of a prose link on hover when the visible label hides it. */
export function ProseLinkTooltip({
	href,
	label,
	children
}: ProseLinkTooltipProps) {
	if (!href || !shouldShowLinkTooltip(href, label)) {
		return children
	}

	return (
		<Tooltip>
			<TooltipTrigger asChild>{children}</TooltipTrigger>
			<TooltipContent side="top">{formatLinkTooltip(href)}</TooltipContent>
		</Tooltip>
	)
}

import type { ReactNode } from "react"

import { formatLinkTooltip } from "@/helpers/format-link-tooltip"
import { withOutboundUtm } from "@/helpers/outbound-url"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger
} from "@/components/ui/tooltip"

type IconLinkButtonProps = {
	href: string
	ariaLabel: string
	children: ReactNode
	className?: string
	tooltipSide?: "top" | "bottom"
}

export function IconLinkButton({
	href,
	ariaLabel,
	children,
	className,
	tooltipSide = "top"
}: IconLinkButtonProps) {
	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button
					variant="ghost"
					size="icon-sm"
					asChild
					className={cn("shrink-0", className)}
				>
					<a
						href={withOutboundUtm(href)}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={ariaLabel}
					>
						{children}
					</a>
				</Button>
			</TooltipTrigger>
			<TooltipContent side={tooltipSide}>
				{formatLinkTooltip(href)}
			</TooltipContent>
		</Tooltip>
	)
}

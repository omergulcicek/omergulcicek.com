import type { ReactNode } from "react"

import { Button } from "@/components/ui/button"
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger
} from "@/components/ui/tooltip"
import { formatLinkTooltip } from "@/lib/format-link-tooltip"
import { cn } from "@/lib/utils"

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
				<Button variant="ghost" size="icon-sm" asChild className={cn("shrink-0", className)}>
					<a
						href={href}
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

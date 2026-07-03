import type { ReactNode } from "react"

import { OpenToWorkBadge } from "@/components/shared/open-to-work-badge"
import { pageTitleClass } from "@/components/shared/prose.styles"
import { cn } from "@/lib/utils"

type PageHeaderProps = {
	title: string
	showOpenToWork?: boolean
	openToWorkPlacement?: "stacked" | "inline"
	children?: ReactNode
	className?: string
}

export function PageHeader({
	title,
	showOpenToWork = false,
	openToWorkPlacement = "stacked",
	children,
	className
}: PageHeaderProps) {
	const titleRow =
		openToWorkPlacement === "inline" ? (
			<div className="flex items-center justify-between gap-3">
				<h1 className={pageTitleClass}>{title}</h1>
				{showOpenToWork ? <OpenToWorkBadge className="shrink-0" /> : null}
			</div>
		) : (
			<div className="flex flex-col gap-2">
				<h1 className={pageTitleClass}>{title}</h1>
				{showOpenToWork ? <OpenToWorkBadge className="w-fit" /> : null}
			</div>
		)

	return (
		<header className={cn("flex flex-col gap-3 md:gap-4", className)}>
			{titleRow}
			{children}
		</header>
	)
}

import type { ReactNode } from "react"

import { OpenToWorkBadge } from "@/components/shared/open-to-work-badge"
import { pageTitleClass } from "@/components/shared/prose.styles"
import { cn } from "@/lib/utils"

type PageHeaderProps = {
	title: string
	showOpenToWork?: boolean
	children?: ReactNode
	className?: string
}

export function PageHeader({
	title,
	showOpenToWork = false,
	children,
	className
}: PageHeaderProps) {
	return (
		<header className={cn("flex flex-col gap-4", className)}>
			<div className="flex flex-wrap items-center gap-3">
				<h1 className={pageTitleClass}>{title}</h1>
				{showOpenToWork ? <OpenToWorkBadge /> : null}
			</div>
			{children}
		</header>
	)
}

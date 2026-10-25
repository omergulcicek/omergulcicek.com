import type { ReactNode } from "react"

import { pageTitleClass } from "@/components/shared/prose.styles"
import { cn } from "@/lib/utils"

type PageHeaderProps = {
	title: string
	children?: ReactNode
	className?: string
}

export function PageHeader({ title, children, className }: PageHeaderProps) {
	return (
		<header className={cn("flex flex-col gap-3 md:gap-4", className)}>
			<h1 className={pageTitleClass}>{title}</h1>
			{children}
		</header>
	)
}

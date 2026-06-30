import type { ReactNode } from "react"

import { sectionHeadingClass } from "@/components/shared/prose.styles"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
	children: ReactNode
	className?: string
}

export function SectionHeading({ children, className }: SectionHeadingProps) {
	return <h2 className={cn(sectionHeadingClass, className)}>{children}</h2>
}

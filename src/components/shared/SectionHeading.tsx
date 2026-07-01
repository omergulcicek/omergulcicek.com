import type { ReactNode } from "react"

import { AnchoredHeading } from "@/components/shared/anchored-heading"
import { sectionHeadingClass } from "@/components/shared/prose.styles"
import { slugifyHeading } from "@/lib/slugify-heading"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
	children: ReactNode
	className?: string
	id?: string
}

function resolveSectionHeadingId(children: ReactNode, id?: string) {
	if (id) {
		return id
	}

	return typeof children === "string" ? slugifyHeading(children) : undefined
}

export function SectionHeading({
	children,
	className,
	id
}: SectionHeadingProps) {
	const headingId = resolveSectionHeadingId(children, id)
	const anchorLabel =
		typeof children === "string" ? `${children} bölümüne git` : undefined

	return (
		<AnchoredHeading
			as="h2"
			id={headingId}
			anchorLabel={anchorLabel}
			className={cn(sectionHeadingClass, className)}
		>
			{children}
		</AnchoredHeading>
	)
}

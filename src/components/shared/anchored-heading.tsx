import type { ElementType, ReactNode } from "react"

import { HeadingAnchorLink } from "@/components/shared/heading-anchor-link"
import { cn } from "@/lib/utils"

type AnchoredHeadingProps = {
	as?: ElementType
	children: ReactNode
	className?: string
	id?: string
	anchorLabel?: string
}

export function AnchoredHeading({
	as: Tag = "h2",
	children,
	className,
	id,
	anchorLabel
}: AnchoredHeadingProps) {
	if (!id) {
		return <Tag className={className}>{children}</Tag>
	}

	return (
		<Tag id={id} className={cn("group/heading scroll-mt-24", className)}>
			<span className="inline-flex items-center gap-2">
				{children}
				<HeadingAnchorLink id={id} label={anchorLabel} />
			</span>
		</Tag>
	)
}

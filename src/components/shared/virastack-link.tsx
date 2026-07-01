import type { ReactNode } from "react"

import { ProseIconLink } from "@/components/shared/prose-link"
import { Virastack } from "@/components/ui/svgs/virastack"
import { EXTERNAL_LINKS } from "@/constants/site-content.constants"

const virastackLinkIconClass = "size-3.5 shrink-0"

type VirastackLinkProps = {
	children: ReactNode
	href?: string
}

export function VirastackLink({
	children,
	href = EXTERNAL_LINKS.virastack
}: VirastackLinkProps) {
	return (
		<ProseIconLink
			href={href}
			icon={<Virastack className={virastackLinkIconClass} aria-hidden />}
		>
			{children}
		</ProseIconLink>
	)
}

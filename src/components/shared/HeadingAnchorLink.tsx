import type { MouseEvent } from "react"
import { Link2 } from "lucide-react"

import { SITE_CONTENT } from "@/constants/site-content.constants"

import { navigateToHeading } from "@/lib/navigate-to-heading"

import { headingAnchorLinkClass } from "@/components/shared/heading-anchor.styles"

type HeadingAnchorLinkProps = {
	id: string
	label?: string
}

function handleHeadingAnchorClick(
	event: MouseEvent<HTMLAnchorElement>,
	id: string
) {
	if (
		event.metaKey ||
		event.ctrlKey ||
		event.shiftKey ||
		event.altKey ||
		event.button !== 0
	) {
		return
	}

	event.preventDefault()
	navigateToHeading(id)
}

export function HeadingAnchorLink({ id, label }: HeadingAnchorLinkProps) {
	return (
		<a
			href={`#${id}`}
			aria-label={label ?? SITE_CONTENT.headingAnchorAria}
			data-heading-anchor=""
			className={headingAnchorLinkClass}
			onClick={(event) => handleHeadingAnchorClick(event, id)}
		>
			<Link2 className="size-3.5" strokeWidth={2} aria-hidden />
		</a>
	)
}

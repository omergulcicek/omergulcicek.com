import { Link2 } from "lucide-react"
import type { MouseEvent } from "react"

import { navigateToHeading } from "@/lib/navigate-to-heading"
import { cn } from "@/lib/utils"

export const headingAnchorLinkClass = cn(
	"text-muted-foreground/70 hover:text-foreground inline-flex shrink-0 rounded-sm",
	"opacity-0 transition-opacity duration-150",
	"group-hover/heading:opacity-100 group-focus-within/heading:opacity-100",
	"focus-visible:opacity-100 focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
)

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
			aria-label={label ?? "Bu bölüme link"}
			data-heading-anchor=""
			className={headingAnchorLinkClass}
			onClick={(event) => handleHeadingAnchorClick(event, id)}
		>
			<Link2 className="size-3.5" strokeWidth={2} aria-hidden />
		</a>
	)
}

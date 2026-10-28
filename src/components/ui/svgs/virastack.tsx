import type { SVGProps } from "react"

import { VirastackLogo } from "@/components/shared/VirastackLogo"
import { cn } from "@/lib/utils"

type VirastackProps = SVGProps<SVGSVGElement>

const Virastack = ({
	className,
	"aria-label": ariaLabel,
	"aria-hidden": ariaHidden
}: VirastackProps) => (
	<VirastackLogo
		className={cn("size-full", className)}
		// A hidden icon sits next to the visible "ViraStack" text, so its alt stays empty.
		label={ariaHidden ? "" : typeof ariaLabel === "string" ? ariaLabel : "ViraStack"}
	/>
)

export { Virastack }

import type { SVGProps } from "react"

import { VirastackLogo } from "@/components/shared/virastack-logo"
import { cn } from "@/lib/utils"

type VirastackProps = SVGProps<SVGSVGElement>

const Virastack = ({ className, "aria-label": ariaLabel }: VirastackProps) => (
	<VirastackLogo
		className={cn("size-full", className)}
		label={typeof ariaLabel === "string" ? ariaLabel : "ViraStack"}
	/>
)

export { Virastack }

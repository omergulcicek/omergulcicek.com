import { cn } from "@/lib/utils"

export const headingAnchorLinkClass = cn(
	"text-muted-foreground/70 hover:text-foreground inline-flex shrink-0 rounded-sm",
	"opacity-0 transition-opacity duration-150",
	"group-hover/heading:opacity-100 group-focus-within/heading:opacity-100",
	"focus-visible:opacity-100 focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
)

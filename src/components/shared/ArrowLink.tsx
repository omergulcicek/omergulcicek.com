import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

type ArrowLinkProps = {
	children: string
	className?: string
}

export function ArrowLink({ children, className }: ArrowLinkProps) {
	return (
		<span
			className={cn(
				"inline-flex items-center gap-1 text-sm transition-colors group-hover:text-foreground",
				className
			)}
		>
			{children}
			<ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
		</span>
	)
}

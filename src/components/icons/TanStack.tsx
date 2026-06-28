import type { SVGProps } from "react"

import { cn } from "@/lib/utils"

const DEFAULT_SIZE = 16

export const TanStack = (props: SVGProps<SVGSVGElement>) => {
	const { className, width, height } = props
	const w = width != null ? Number(width) : DEFAULT_SIZE
	const h = height != null ? Number(height) : DEFAULT_SIZE
	const hasExplicitSize = width != null || height != null

	return (
		<figure
			className={cn(
				"inline-flex shrink-0 items-center justify-center",
				className
			)}
			style={hasExplicitSize ? { width: w, height: h } : undefined}
		>
			<img
				src="/logo/tanstack.png"
				alt="TanStack"
				className="size-full object-contain"
			/>
		</figure>
	)
}

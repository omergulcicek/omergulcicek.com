import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

export function Container({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			className={cn("mx-auto w-full max-w-2xl px-4 sm:px-6", className)}
			{...props}
		/>
	)
}

import { Check, Copy } from "lucide-react"

import { cn } from "@/lib/utils"

export function ShareIcon({ copied }: { copied: boolean }) {
	return (
		<span className="relative size-3.5" aria-hidden="true">
			<Copy
				className={cn(
					"absolute inset-0 size-3.5 transition-[opacity,transform,filter] duration-150 ease-out",
					copied
						? "pointer-events-none scale-75 opacity-0 blur-[4px]"
						: "scale-100 opacity-100 blur-0"
				)}
			/>
			<Check
				className={cn(
					"absolute inset-0 size-3.5 transition-[opacity,transform,filter] duration-150 ease-out",
					copied
						? "scale-100 opacity-100 blur-0"
						: "pointer-events-none scale-75 opacity-0 blur-[4px]"
				)}
			/>
		</span>
	)
}

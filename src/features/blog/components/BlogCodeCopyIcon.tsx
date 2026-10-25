import { Check, Copy } from "lucide-react"

import { cn } from "@/lib/utils"

export function BlogCodeCopyIcon({ copied }: { copied: boolean }) {
	return (
		<span className="relative size-3.5" aria-hidden="true">
			<Copy
				className={cn(
					"blog-code-copy-icon absolute inset-0 size-3.5",
					copied
						? "pointer-events-none scale-[0.25] opacity-0 blur-[4px]"
						: "scale-100 opacity-100 blur-0"
				)}
			/>
			<Check
				className={cn(
					"blog-code-copy-icon absolute inset-0 size-3.5",
					copied
						? "scale-100 opacity-100 blur-0"
						: "pointer-events-none scale-[0.25] opacity-0 blur-[4px]"
				)}
			/>
		</span>
	)
}

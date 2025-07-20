import { cn } from "@/lib/utils"

export function Container({
	children,
	className
}: {
	children: React.ReactNode
	className?: string
}) {
	return (
		<div
			className={cn(
				"py-24 gap-32 flex flex-col mx-auto max-w-2xl relative",
				className
			)}
		>
			{children}
		</div>
	)
}

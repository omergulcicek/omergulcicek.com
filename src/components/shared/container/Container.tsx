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
				"px-6 md:px-0 py-12 md:py-24 gap-16 md:gap-32 flex flex-col mx-auto max-w-3xl relative",
				className
			)}
		>
			{children}
		</div>
	)
}

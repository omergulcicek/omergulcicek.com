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
				"gap-16 md:gap-32 flex flex-col mx-auto max-w-3xl px-4 md:px-6 lg:px-8 relative",
				className
			)}
		>
			{children}
		</div>
	)
}

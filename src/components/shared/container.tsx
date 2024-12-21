import { cn } from "@/utils"

export function Container({
	children,
	className,
	...props
}: {
	children: React.ReactNode
	className?: string
} & React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn("flex flex-col w-full max-w-7xl mx-auto", className)}
			{...props}
		>
			{children}
		</div>
	)
}

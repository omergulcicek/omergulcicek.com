import { cn } from "@/utils"

interface MarqueeProps {
	className?: string
	reverse?: boolean
	pauseOnHover?: boolean
	children?: React.ReactNode
	vertical?: boolean
	repeat?: number
	[key: string]: any
}

export default function Marquee({
	className,
	reverse,
	pauseOnHover = false,
	children,
	vertical = false,
	repeat = 4,
	...props
}: MarqueeProps) {
	return (
		<div
			{...props}
			className={cn(
				"group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
				vertical ? "flex-col" : "flex-row",
				className
			)}
		>
			{Array(repeat)
				.fill(0)
				.map((_, i) => (
					<div
						key={i}
						className={cn(
							"flex shrink-0 justify-around [gap:var(--gap)]",
							vertical
								? "animate-marquee-vertical flex-col"
								: "animate-marquee flex-row",
							reverse && "[animation-direction:reverse]",
							pauseOnHover && "group-hover:[animation-play-state:paused]"
						)}
					>
						{children}
					</div>
				))}
		</div>
	)
}

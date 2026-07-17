import { cn } from "@/lib/utils"

const SIZE = 14
const STROKE_WIDTH = 2
const RADIUS = (SIZE - STROKE_WIDTH) / 2
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

type ScrollProgressRingProps = {
	value: number
	className?: string
}

/**
 * Compact circular progress ring inspired by Vercel Geist Gauge / papermark gauge-demo.
 */
export function ScrollProgressRing({
	value,
	className
}: ScrollProgressRingProps) {
	const clamped = Math.min(100, Math.max(0, value))
	const strokeDashoffset = CIRCUMFERENCE - (clamped / 100) * CIRCUMFERENCE

	return (
		<svg
			aria-hidden
			width={SIZE}
			height={SIZE}
			viewBox={`0 0 ${SIZE} ${SIZE}`}
			className={cn("-rotate-90", className)}
		>
			<circle
				cx={SIZE / 2}
				cy={SIZE / 2}
				r={RADIUS}
				fill="transparent"
				stroke="currentColor"
				strokeWidth={STROKE_WIDTH}
				className="text-muted-foreground/30"
			/>
			<circle
				cx={SIZE / 2}
				cy={SIZE / 2}
				r={RADIUS}
				fill="transparent"
				stroke="currentColor"
				strokeWidth={STROKE_WIDTH}
				strokeLinecap="round"
				strokeDasharray={CIRCUMFERENCE}
				strokeDashoffset={strokeDashoffset}
				className="text-foreground transition-[stroke-dashoffset] duration-150 ease-out"
			/>
		</svg>
	)
}

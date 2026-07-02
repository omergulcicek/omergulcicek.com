import { Star, StarHalf } from "lucide-react"

import { cn } from "@/lib/utils"

type BlogRatingProps = {
	value: number
	max?: number
	stars?: number
	className?: string
	showValue?: boolean
}

export function BlogRating({
	value,
	max = 5,
	stars = 5,
	className,
	showValue = true
}: BlogRatingProps) {
	const normalized = Math.max(0, Math.min(max, value))
	const scaled = (normalized / max) * stars
	const roundedToHalf = Math.round(scaled * 2) / 2
	const filledCount = Math.floor(roundedToHalf)
	const hasHalf = roundedToHalf - filledCount === 0.5
	const emptyCount = stars - filledCount - (hasHalf ? 1 : 0)
	const displayValue =
		Number.isInteger(normalized) ? String(normalized) : normalized.toFixed(1)

	return (
		<div
			className={cn("inline-flex items-center gap-2", className)}
			aria-label={`Puan: ${displayValue}/${max}`}
			role="img"
		>
			<span className="inline-flex items-center gap-0.5" aria-hidden="true">
				{Array.from({ length: filledCount }).map((_, index) => (
					<Star
						key={`filled-${index}`}
						className="size-3.5 fill-amber-500 text-amber-500"
					/>
				))}
				{hasHalf ? (
					<span className="relative inline-flex size-3.5 shrink-0">
						<Star
							className="absolute inset-0 size-3.5 text-muted-foreground/30"
							aria-hidden="true"
						/>
						<StarHalf
							className="relative size-3.5 fill-amber-500 text-amber-500"
							aria-hidden="true"
						/>
					</span>
				) : null}
				{Array.from({ length: emptyCount }).map((_, index) => (
					<Star
						key={`empty-${index}`}
						className="size-3.5 text-muted-foreground/30"
					/>
				))}
			</span>
			{showValue ? (
				<span className="text-foreground text-sm font-medium tabular-nums">
					{displayValue}/{max}
				</span>
			) : null}
		</div>
	)
}

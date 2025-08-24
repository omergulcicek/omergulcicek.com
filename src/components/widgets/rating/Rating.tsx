"use client"

import clsx from "clsx"
import { Star, StarHalf } from "lucide-react"

import type { RatingPropsType } from "@/types/rating.type"

export function Rating({
	value,
	max = 10,
	stars = 5,
	className
}: RatingPropsType) {
	const normalized = Math.max(0, Math.min(max, value))
	const scaled = (normalized / max) * stars
	const roundedToHalf = Math.round(scaled * 2) / 2
	const filledCount = Math.floor(roundedToHalf)
	const hasHalf = roundedToHalf - filledCount === 0.5

	return (
		<div
			className={clsx("inline-flex items-center gap-1 align-middle", className)}
			aria-label={`Rating: ${value}/${max}`}
			role="img"
		>
			{Array.from({ length: filledCount }).map((_, index) => (
				<Star
					key={`filled-${index}`}
					className="h-4 w-4 text-yellow-500 fill-yellow-500"
					aria-hidden="true"
				/>
			))}
			{hasHalf && (
				<StarHalf
					className="h-4 w-4 text-yellow-500 fill-yellow-500"
					aria-hidden="true"
				/>
			)}
		</div>
	)
}

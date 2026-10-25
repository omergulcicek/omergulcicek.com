import { AnimatePresence, motion } from "motion/react"
import { useState, type PointerEvent } from "react"

import { ContributionTooltip } from "@/features/projects/components/ContributionTooltip"
import {
	CELL_FADE,
	COLUMN_STAGGER,
	LABEL_BLUR,
	LABEL_REVEAL
} from "@/features/projects/constants/github-activity.constants"
import {
	gapFor,
	toMonthLabels,
	toWeeks,
	weeksFor
} from "@/features/projects/helpers/github-activity.helpers"
import { useFittedColumns } from "@/features/projects/hooks/use-fitted-columns"
import type {
	Contribution,
	HoveredDay,
	LevelStyle
} from "@/features/projects/types/github-activity.types"

type ContributionGridProps = {
	contributions: Contribution[]
	scale: LevelStyle[]
	cellSize: number
	months: number
	showMonths: boolean
	label: string
	reduceMotion: boolean | null
}

export function ContributionGrid({
	contributions,
	scale,
	cellSize,
	months,
	showMonths,
	label,
	reduceMotion
}: ContributionGridProps) {
	const weeks = toWeeks(contributions)
	const gap = gapFor(cellSize)
	const [ref, columns] = useFittedColumns(cellSize, gap)
	const [hovered, setHovered] = useState<HoveredDay>()

	const cap = Math.min(weeks.length, weeksFor(months))
	const visible = weeks.slice(-Math.min(cap, columns ?? cap))
	const sweepEnd = (visible.length - 1) * COLUMN_STAGGER + CELL_FADE.duration

	const hover = (day: Contribution) => (event: PointerEvent<HTMLDivElement>) => {
		const cell = event.currentTarget.getBoundingClientRect()
		setHovered({ day, x: cell.left + cell.width / 2, y: cell.top })
	}

	return (
		<div
			ref={ref}
			data-slot="github-activity-grid"
			role="img"
			aria-label={label}
			className="relative"
		>
			{showMonths ? (
				<motion.div
					className="flex justify-center"
					style={{ gap, marginBottom: gap }}
					initial={
						reduceMotion ? false : { opacity: 0, filter: `blur(${LABEL_BLUR}px)` }
					}
					animate={{ opacity: 1, filter: "blur(0px)" }}
					transition={{ ...LABEL_REVEAL, delay: reduceMotion ? 0 : sweepEnd }}
				>
					{toMonthLabels(visible).map((month) => (
						<div
							key={month.key}
							className="relative h-3 shrink-0"
							style={{ width: cellSize }}
						>
							{month.label ? (
								<span className="text-foreground/40 absolute top-0 left-0 text-[10px] leading-none">
									{month.label}
								</span>
							) : null}
						</div>
					))}
				</motion.div>
			) : null}

			<div
				className="flex justify-center overflow-hidden"
				style={{ gap }}
				onPointerLeave={() => setHovered(undefined)}
			>
				{visible.map((week, weekIndex) => (
					<div
						key={week[0]?.date ?? weekIndex}
						className="flex flex-col"
						style={{ gap }}
					>
						{week.map((day) => (
							<motion.div
								key={day.date}
								onPointerEnter={hover(day)}
								className="bg-foreground/[0.08] shrink-0 rounded-[3px]"
								style={{ width: cellSize, height: cellSize }}
								initial={reduceMotion ? false : { opacity: 0, scale: 0.4 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{
									...CELL_FADE,
									delay: reduceMotion ? 0 : weekIndex * COLUMN_STAGGER
								}}
							>
								<div
									className="size-full rounded-[3px]"
									style={scale[day.level] ?? scale[0]}
								/>
							</motion.div>
						))}
					</div>
				))}
			</div>

			<AnimatePresence initial={false}>
				{hovered ? (
					<ContributionTooltip
						key="tooltip"
						hovered={hovered}
						reduceMotion={reduceMotion}
					/>
				) : null}
			</AnimatePresence>
		</div>
	)
}

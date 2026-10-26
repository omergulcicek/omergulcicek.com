import { m } from "motion/react"
import { useLayoutEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

import {
	TOOLTIP_EDGE,
	TOOLTIP_FADE
} from "@/features/projects/constants/github-activity.constants"
import { describeDay } from "@/features/projects/helpers/github-activity.helpers"
import type { HoveredDay } from "@/features/projects/types/github-activity.types"

type ContributionTooltipProps = {
	hovered: HoveredDay
	reduceMotion: boolean | null
}

export function ContributionTooltip({
	hovered,
	reduceMotion
}: ContributionTooltipProps) {
	const ref = useRef<HTMLDivElement>(null)
	const [left, setLeft] = useState(hovered.x)

	useLayoutEffect(() => {
		const edge = TOOLTIP_EDGE + (ref.current?.offsetWidth ?? 0) / 2
		setLeft(Math.min(Math.max(hovered.x, edge), window.innerWidth - edge))
	}, [hovered])

	return createPortal(
		<div
			className="pointer-events-none fixed z-50"
			style={{
				left,
				top: hovered.y,
				transform: "translate(-50%, calc(-100% - 8px))"
			}}
		>
			<m.div
				ref={ref}
				className="bg-foreground text-background rounded-lg px-2 py-1 text-[11px] font-medium whitespace-nowrap shadow-md"
				initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
				transition={reduceMotion ? { duration: 0 } : TOOLTIP_FADE}
			>
				{describeDay(hovered.day)}
			</m.div>
		</div>,
		document.body
	)
}

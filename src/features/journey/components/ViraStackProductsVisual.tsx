import { useEffect, useRef, useState } from "react"
import { AnimatePresence, m, useInView, useReducedMotion } from "motion/react"

import { cn } from "@/lib/utils"

import {
	VIRASTACK_PRODUCT_DOTS,
	VIRASTACK_PRODUCT_DOTS_LABEL,
	VIRASTACK_PRODUCT_DOTS_STEP_MS
} from "@/features/journey/constants/virastack-products.constants"

/** Highlights each ViraStack product in turn, then rests before looping. */
export function ViraStackProductsVisual() {
	const ref = useRef<HTMLDivElement>(null)
	const inView = useInView(ref, { margin: "-80px" })
	const reduceMotion = useReducedMotion() === true
	const [autoIndex, setAutoIndex] = useState<number | null>(null)
	const [hoverIndex, setHoverIndex] = useState<number | null>(null)
	const activeIndex = hoverIndex ?? autoIndex

	useEffect(() => {
		if (!inView || reduceMotion) {
			return
		}

		let step = 0
		const timer = window.setInterval(() => {
			step = (step + 1) % (VIRASTACK_PRODUCT_DOTS.length + 2)
			setAutoIndex(step < VIRASTACK_PRODUCT_DOTS.length ? step : null)
		}, VIRASTACK_PRODUCT_DOTS_STEP_MS)

		setAutoIndex(0)

		return () => {
			window.clearInterval(timer)
			setAutoIndex(null)
		}
	}, [inView, reduceMotion])

	const active =
		activeIndex === null ? null : VIRASTACK_PRODUCT_DOTS[activeIndex]

	return (
		<div
			ref={ref}
			role="img"
			aria-label={VIRASTACK_PRODUCT_DOTS_LABEL}
			className="bg-card/50 flex aspect-video flex-col items-center justify-center gap-1"
		>
			<div
				aria-hidden
				className="flex items-center"
				onMouseLeave={() => setHoverIndex(null)}
			>
				{VIRASTACK_PRODUCT_DOTS.map((product, index) => (
					<span
						key={product.id}
						className="flex size-6 items-center justify-center"
						onMouseEnter={() => setHoverIndex(index)}
					>
						<m.span
							className={cn("block size-2.5 rounded-full", product.dotClass)}
							animate={{
								scale: activeIndex === index ? 1.5 : 1,
								opacity: activeIndex !== null && activeIndex !== index ? 0.35 : 1
							}}
							transition={
								reduceMotion
									? { duration: 0 }
									: { type: "spring", stiffness: 420, damping: 24 }
							}
						/>
					</span>
				))}
			</div>
			<div aria-hidden className="h-5 text-sm">
				<AnimatePresence mode="wait" initial={false}>
					{active ? (
						<m.span
							key={active.id}
							className="block whitespace-nowrap"
							initial={{ opacity: 0, y: 4, filter: "blur(2px)" }}
							animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
							exit={{ opacity: 0, y: -4, filter: "blur(2px)" }}
							transition={{ duration: 0.18, ease: "easeOut" }}
						>
							<span className="text-foreground font-semibold">ViraStack</span>{" "}
							<span className={cn("font-medium italic", active.textClass)}>
								{active.name}
							</span>
						</m.span>
					) : null}
				</AnimatePresence>
			</div>
		</div>
	)
}

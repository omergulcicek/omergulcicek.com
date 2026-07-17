import { useEffect, useRef } from "react"
import {
	createDotSystem,
	loadImageCached,
	mergeDitherParams,
	processImage,
	renderDots,
	updateDots,
	type DotSystem,
	type Shockwave
} from "@its-thepoe/dither-react"

import {
	VIRASTACK_DITHER_DISPLAY_PX,
	VIRASTACK_DITHER_GRID_SIZE,
	VIRASTACK_DITHER_IMAGE_SRC,
	VIRASTACK_DITHER_PARAMS
} from "@/features/projects/constants/virastack-dither.constants"
import {
	floydSteinbergDither,
	invertDitherWithMask
} from "@/features/projects/helpers/virastack-dither-algorithm"
import { useTheme } from "@/hooks/use-theme"
import { cn } from "@/lib/utils"

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)"
const INTERACTION_SCALE = 0.45

type VirastackDitherProps = {
	className?: string
}

type MouseState = {
	x: number
	y: number
	active: boolean
}

export function VirastackDither({ className }: VirastackDitherProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const systemRef = useRef<DotSystem | null>(null)
	const mouseRef = useRef<MouseState>({ x: 0, y: 0, active: false })
	const shockwavesRef = useRef<Shockwave[]>([])
	const animFrameRef = useRef(0)
	const runningRef = useRef(false)
	const interactionEnabledRef = useRef(true)
	const { theme } = useTheme()
	const isDark = theme === "dark"
	const dotColor = isDark ? "#f5f5f5" : "#000000"

	useEffect(() => {
		const canvas = canvasRef.current

		if (!canvas) {
			return
		}

		const ctx = canvas.getContext("2d")

		if (!ctx) {
			return
		}

		let cancelled = false
		const size = VIRASTACK_DITHER_DISPLAY_PX
		const params = mergeDitherParams({
			...VIRASTACK_DITHER_PARAMS,
			color: {
				dotLight: dotColor,
				bgLight: isDark ? "#0a0a0a" : "#ffffff",
				dotDark: dotColor,
				bgDark: isDark ? "#0a0a0a" : "#ffffff"
			}
		})
		const effDot = params.invert ? params.color.dotLight : params.color.dotDark

		const paintFrame = () => {
			const sys = systemRef.current

			if (!sys) {
				return
			}

			const dpr = window.devicePixelRatio || 1
			renderDots(ctx, sys, size, size, dpr, {
				dotColorHex: effDot,
				sampled: false
			})
		}

		const startLoop = () => {
			if (runningRef.current || cancelled) {
				return
			}

			runningRef.current = true

			const tick = () => {
				const sys = systemRef.current

				if (!sys || cancelled) {
					runningRef.current = false
					return
				}

				const needsMore = updateDots(
					sys,
					mouseRef.current.x,
					mouseRef.current.y,
					mouseRef.current.active,
					shockwavesRef.current,
					performance.now(),
					{
						interactionEnabled: interactionEnabledRef.current,
						interactionScale: INTERACTION_SCALE
					}
				)

				paintFrame()

				if (needsMore) {
					animFrameRef.current = requestAnimationFrame(tick)
				} else {
					runningRef.current = false
				}
			}

			animFrameRef.current = requestAnimationFrame(tick)
		}

		const reducedMotionQuery = window.matchMedia(REDUCED_MOTION_QUERY)
		const syncReducedMotion = () => {
			interactionEnabledRef.current = !reducedMotionQuery.matches

			if (!interactionEnabledRef.current) {
				mouseRef.current.active = false
				shockwavesRef.current = []
				startLoop()
			}
		}

		syncReducedMotion()
		reducedMotionQuery.addEventListener("change", syncReducedMotion)

		const build = async () => {
			try {
				const img = await loadImageCached(VIRASTACK_DITHER_IMAGE_SRC)

				if (cancelled) {
					return
				}

				const processed = processImage(
					img,
					VIRASTACK_DITHER_GRID_SIZE,
					1,
					params.image.contrast,
					params.image.gamma,
					params.image.blur,
					params.image.highlightsCompression
				)

				let positions = floydSteinbergDither(
					processed.grayscale,
					processed.width,
					processed.height,
					{
						threshold: params.image.threshold,
						serpentine: params.dither.serpentine,
						errorStrength: params.dither.errorStrength
					},
					processed.alpha
				)

				if (params.invert) {
					positions = invertDitherWithMask(
						positions,
						processed.width,
						processed.height,
						params.shape.cornerRadius,
						processed.alpha
					)
				}

				const dpr = window.devicePixelRatio || 1
				canvas.width = size * dpr
				canvas.height = size * dpr

				const gw = processed.width
				const gh = processed.height
				const scaleFactor = (size * params.scale) / Math.max(gw, gh)
				const offsetX = Math.round((size - gw * scaleFactor) / 2)
				const offsetY = Math.round((size - gh * scaleFactor) / 2)

				systemRef.current = createDotSystem(
					positions,
					scaleFactor,
					params.dotScale,
					offsetX,
					offsetY
				)

				paintFrame()
				startLoop()
			} catch (error) {
				if (!cancelled) {
					throw new Error("Failed to render ViraStack dither", {
						cause: error
					})
				}
			}
		}

		const handlePointerMove = (event: PointerEvent) => {
			if (!interactionEnabledRef.current) {
				return
			}

			const rect = canvas.getBoundingClientRect()
			mouseRef.current.x = event.clientX - rect.left
			mouseRef.current.y = event.clientY - rect.top
			mouseRef.current.active = true
			startLoop()
		}

		const handlePointerLeave = (event: PointerEvent) => {
			if (event.pointerType !== "mouse") {
				return
			}

			mouseRef.current.active = false
			startLoop()
		}

		const handlePointerCancel = () => {
			mouseRef.current.active = false
			startLoop()
		}

		const handlePointerUp = (event: PointerEvent) => {
			if (interactionEnabledRef.current) {
				const rect = canvas.getBoundingClientRect()
				shockwavesRef.current.push({
					x: event.clientX - rect.left,
					y: event.clientY - rect.top,
					start: performance.now()
				})
			}

			if (event.pointerType !== "mouse") {
				mouseRef.current.active = false
			}

			startLoop()
		}

		canvas.addEventListener("pointermove", handlePointerMove)
		canvas.addEventListener("pointerleave", handlePointerLeave)
		canvas.addEventListener("pointercancel", handlePointerCancel)
		canvas.addEventListener("pointerup", handlePointerUp)

		void build()

		return () => {
			cancelled = true
			cancelAnimationFrame(animFrameRef.current)
			runningRef.current = false
			systemRef.current = null
			shockwavesRef.current = []
			reducedMotionQuery.removeEventListener("change", syncReducedMotion)
			canvas.removeEventListener("pointermove", handlePointerMove)
			canvas.removeEventListener("pointerleave", handlePointerLeave)
			canvas.removeEventListener("pointercancel", handlePointerCancel)
			canvas.removeEventListener("pointerup", handlePointerUp)
		}
	}, [dotColor, isDark])

	return (
		<canvas
			ref={canvasRef}
			className={cn("touch-none cursor-default", className)}
			style={{
				width: VIRASTACK_DITHER_DISPLAY_PX,
				height: VIRASTACK_DITHER_DISPLAY_PX
			}}
			width={VIRASTACK_DITHER_DISPLAY_PX}
			height={VIRASTACK_DITHER_DISPLAY_PX}
			aria-hidden
		/>
	)
}

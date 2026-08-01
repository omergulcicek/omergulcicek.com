"use client"

import { ClientOnly } from "@tanstack/react-router"
import { useEffect } from "react"

import { useMotionEnvironment } from "@/lib/motion/use-motion-environment"

function MotionEnvironmentBootInner() {
	const { shouldUseSoftMotion, supportsViewTransitions } =
		useMotionEnvironment()

	useEffect(() => {
		const root = document.documentElement
		root.dataset.reducedMotion = shouldUseSoftMotion ? "true" : "false"
		root.dataset.viewTransitions = supportsViewTransitions ? "true" : "false"
	}, [shouldUseSoftMotion, supportsViewTransitions])

	return null
}

export function MotionEnvironmentBoot() {
	return (
		<ClientOnly fallback={null}>
			<MotionEnvironmentBootInner />
		</ClientOnly>
	)
}

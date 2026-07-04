import type { ReactNode } from "react"
import { useEffect } from "react"

import { useMotionEnvironment } from "@/lib/motion/use-motion-environment"

type MotionEnvironmentClientProps = {
	children: ReactNode
}

export function MotionEnvironmentClient({
	children
}: MotionEnvironmentClientProps) {
	const { shouldUseSoftMotion, supportsViewTransitions } =
		useMotionEnvironment()

	useEffect(() => {
		const root = document.documentElement
		root.dataset.reducedMotion = shouldUseSoftMotion ? "true" : "false"
		root.dataset.viewTransitions = supportsViewTransitions ? "true" : "false"
	}, [shouldUseSoftMotion, supportsViewTransitions])

	return children
}

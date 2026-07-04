import { useReducedMotion } from "motion/react"
import { useEffect, useMemo, useState } from "react"

export function useMotionEnvironment() {
	const prefersReducedMotion = useReducedMotion() === true
	const [supportsViewTransitions, setSupportsViewTransitions] = useState(false)

	useEffect(() => {
		setSupportsViewTransitions(
			typeof document !== "undefined" && "startViewTransition" in document
		)
	}, [])

	const shouldUseSoftMotion = useMemo(
		() => prefersReducedMotion,
		[prefersReducedMotion]
	)

	return {
		shouldUseSoftMotion,
		supportsViewTransitions
	}
}

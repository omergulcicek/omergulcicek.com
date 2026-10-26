import { LazyMotion } from "motion/react"
import type { ReactNode } from "react"

function loadMotionFeatures() {
	return import("@/lib/motion/motion-features").then((module) => module.motionFeatures)
}

/**
 * Components use the slim `m` element; animation features load in a separate chunk
 * after hydration. `strict` throws if a full `motion.*` component slips back in.
 */
export function MotionProvider({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<LazyMotion features={loadMotionFeatures} strict>
			{children}
		</LazyMotion>
	)
}

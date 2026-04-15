"use client"

import { motion } from "framer-motion"

import { useMotionEnvironment } from "@/lib/motion-environment"

import { AboutContact } from "./AboutContact"
import { AboutHobbies } from "./AboutHobbies"
import { AboutIntro } from "./AboutIntro"
import { AboutProductionCulture } from "./AboutProductionCulture"
import { AboutServices } from "./AboutServices"
import { AboutTechnicalApproach } from "./AboutTechnicalApproach"
import { AboutVision } from "./AboutVision"

const easeOut = [0.22, 1, 0.36, 1] as const

const sections = [
	{ id: "technical-approach", Component: AboutTechnicalApproach },
	{ id: "production-culture", Component: AboutProductionCulture },
	{ id: "services", Component: AboutServices },
	{ id: "hobbies", Component: AboutHobbies },
	{ id: "vision", Component: AboutVision },
	{ id: "contact", Component: AboutContact }
] as const

export function AboutPageContent() {
	const { shouldUseSoftMotion } = useMotionEnvironment()

	return (
		<>
			<AboutIntro />
			{sections.map(({ id, Component }, animationOrder) => (
				<motion.div
					key={id}
					initial={
						shouldUseSoftMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }
					}
					animate={{ opacity: 1, y: 0 }}
					transition={
						shouldUseSoftMotion
							? { duration: 0 }
							: {
									duration: 0.48,
									delay: animationOrder * 0.08,
									ease: easeOut
								}
					}
				>
					<Component />
				</motion.div>
			))}
		</>
	)
}

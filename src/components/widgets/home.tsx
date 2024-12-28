"use client"

import { cn } from "@/utils"
import { motion } from "framer-motion"

import { Container } from "@/shared/container"
import Hero from "@/widgets/hero"
import { TechStack } from "@/widgets/tech-stack"
import AnimatedShinyText from "@/ui/animated-shiny-text"

export function Home() {
	return (
		<Container className="gap-16 md:gap-20 mt-16 md:mt-56">
			<section className="flex flex-col gap-2 md:gap-6">
				{/* <div className="flex items-start">
					<motion.div
						initial={{ opacity: 0, filter: "blur(16px)" }}
						animate={{ opacity: 1, filter: "blur(0)" }}
						transition={{ delay: 1.75 }}
					>
						<div
							className={cn(
								"group rounded-full border border-black/5 bg-yellow-100 text-sm text-white transition-all ease-in select-none hover:cursor-default dark:border-white/5 dark:bg-yellow-900"
							)}
						>
							<AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-yellow-600 hover:duration-300 hover:dark:text-yellow-400">
								<span>🚧 Yapım aşamasında...</span>
							</AnimatedShinyText>
						</div>
					</motion.div>
				</div> */}

				<Hero>
					<div>
						<Hero.Hello />
						<Hero.Name />
					</div>

					<div className="max-w-2xl text-base md:text-[32px] md:leading-[44px]">
						<Hero.Strong /> <Hero.Desc />
					</div>
				</Hero>
			</section>

			<TechStack />
		</Container>
	)
}

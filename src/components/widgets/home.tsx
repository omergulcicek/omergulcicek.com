"use client"

import { Container } from "@/shared/container"
import Hero from "@/widgets/hero"
import { TechStack } from "@/widgets/tech-stack"

export function Home() {
	return (
		<Container className="gap-16 md:gap-20 mt-24 md:mt-56">
			<section className="flex flex-col gap-2 md:gap-6 md:px-6 xl:px-0">
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

"use client"

import Container from "@/shared/container"
import Hero from "@/widgets/hero"

export default function Home() {
	return (
		<Container className="gap-6 mt-32 px-4 md:mt-56 md:px-0">
			<Hero>
				<div>
					<Hero.Hello />
					<Hero.Name />
				</div>

				<div className="max-w-3xl text-xl md:text-[32px] md:leading-[44px]">
					<Hero.Strong /> <Hero.Desc />
				</div>
			</Hero>
		</Container>
	)
}

"use client"

import Container from "@/shared/container"
import Hero from "@/widgets/hero"

export default function Home() {
	return (
		<Container className="gap-6 pt-56">
			<Hero>
				<div>
					<Hero.Hello />
					<Hero.Name />
				</div>

				<div className="max-w-3xl text-[32px] leading-[44px]">
					<Hero.Strong /> <Hero.Desc />
				</div>
			</Hero>
		</Container>
	)
}

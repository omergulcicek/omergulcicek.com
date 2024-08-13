"use client"

import Container from "@/shared/container"
import Hero from "@/widgets/hero"

export default function Home() {
	return (
		<Container className="gap-6 pt-56">
			<Hero>
				<div>
					<div className="bg-red-200 text-red-800 text-sm inline-flex rounded py-1 px-3 mb-4">
						Site henüz yapım aşamasında :)
					</div>
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

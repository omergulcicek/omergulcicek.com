"use client"

import Image from "next/image"

import { Container } from "@/shared/container"
import Hero from "@/widgets/hero"
import { TechStack } from "@/widgets/tech-stack"

import { CardCarousel } from "./carousel"

export function Home() {
	return (
		<Container className="gap-16 md:gap-20 mt-24 md:mt-56">
			<Hero>
				<div className="flex gap-2 md:gap-20">
					<figure className="relative">
						<Image
							src="/nice-avatar.png"
							alt="Ömer Gülçiçek"
							width={240}
							height={240}
						/>
					</figure>
					<div className="flex flex-col	gap-2 md:gap-6">
						<div>
							<Hero.Hello />
							<Hero.Name />
						</div>

						<div className="max-w-2xl text-base md:text-[32px] md:leading-[44px]">
							<Hero.Strong /> <Hero.Desc />
						</div>
					</div>
				</div>
			</Hero>

			<TechStack />
		</Container>
	)
}

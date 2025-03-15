"use client"

import Image from "next/image"

import { Plus } from "lucide-react"

import { Container } from "@/shared/container"
import BlurFade from "@/ui/blur-fade"
import { Title } from "@/ui/title"

import { cn } from "@/utils"

import { journeyData } from "@/data/journey-data"

export default function JourneyPage() {
	return (
		<>
			<Container className="max-w-2xl mt-10 md:mt-24">
				<BlurFade delay={0.25} duration={0.1}>
					<Title tag="h1" className="md:mb-4">
						Anlar
					</Title>
				</BlurFade>
				<BlurFade delay={0.5}>
					<section className="mt-5 md:mt-12">
						{journeyData.map(({ year, entries }, index) => (
							<>
								<article
									className="relative flex flex-col mb-5 md:mb-8 pl-14 md:pl-28"
									key={`${year}-${index}`}
								>
									<div className="flex flex-col items-end absolute left-0 top-0">
										<strong className="font-medium text-base md:text-xl">
											{year}
										</strong>
									</div>

									{entries.map(
										({ title, description, month, image, logo }, index) => (
											<article
												className="relative flex flex-col items-start gap-2 pl-10 md:pl-12 pb-10"
												key={`${year}-${index}`}
											>
												{index !== entries.length - 1 && (
													<>
														<div className="absolute inset-0 flex w-6 items-center justify-center">
															<div className="pointer-events-none h-full w-px border-l border-gray-200"></div>
														</div>
													</>
												)}

												<figure
													className={cn(
														"absolute left-0 -translate-x-1 rounded-full overflow-hidden",
														!logo &&
															"bg-neutral-800 p-2 [&_svg]:size-3 md:[&_svg]:size-4 [&_svg]:text-white"
													)}
												>
													{logo ? (
														<Image
															src={`/img/journey/${logo}.png`}
															alt={title}
															width={32}
															height={32}
															className="size-7 md:size-8"
														/>
													) : (
														<Plus />
													)}
												</figure>

												<header className="flex flex-1 items-center justify-between  w-full">
													<h2 className="font-semibold text-lg">{title}</h2>
													<span className="text-xs bg-secondary px-2 py-1 rounded">
														{month}
													</span>
												</header>
												<p className="text-sm text-secondary-foreground">
													{description}
												</p>
												{image && (
													<figure className="border rounded-lg shadow-lg mt-4 p-2">
														<Image
															src={`/img/journey/${image}.png`}
															alt={title}
															width={500}
															height={500}
														/>
													</figure>
												)}
											</article>
										)
									)}
								</article>
							</>
						))}
					</section>
				</BlurFade>
			</Container>
		</>
	)
}

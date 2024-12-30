"use client"

import Link from "next/link"

import BlurFade from "@/components/ui/blur-fade"
import { formatDate } from "@/utils"

import { Separator } from "@/ui/separator"
import { Tag } from "@/ui/tag"
import { Title } from "@/ui/title"

export default async function BlogDetailHeader({
	title,
	date,
	keywords,
	medium
}: {
	title: string
	date: string
	keywords?: string[]
	medium?: string
}) {
	return (
		<>
			<BlurFade delay={0.15} duration={0.15}>
				<div className="flex flex-col gap-1 mb-20">
					<div className="flex items-center gap-6 h-6 mb-4">
						<span className="text-base text-secondary-foreground">
							{formatDate(date)}
						</span>
						{medium && (
							<>
								<Separator orientation="vertical" />
								<div>
									<Link
										href={medium}
										target="_blank"
										rel="noopener noreferrer"
										className=" !text-black text-base transition !no-underline hover:!underline"
									>
										<div className="flex items-center gap-2">
											<figure className="flex items-center justify-center size-4 transition duration-300 !my-0">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 640 512"
													height={16}
													width={16}
												>
													<path d="M180.5 74.3C80.8 74.3 0 155.6 0 256S80.8 437.7 180.5 437.7 361 356.4 361 256 280.2 74.3 180.5 74.3zm288.3 10.6c-49.8 0-90.2 76.6-90.2 171.1s40.4 171.1 90.3 171.1 90.3-76.6 90.3-171.1H559C559 161.5 518.6 84.9 468.8 84.9zm139.5 17.8c-17.5 0-31.7 68.6-31.7 153.3s14.2 153.3 31.7 153.3S640 340.6 640 256C640 171.4 625.8 102.7 608.3 102.7z" />
												</svg>
											</figure>

											<span>Medium'da Oku</span>
										</div>
									</Link>
								</div>
							</>
						)}
					</div>

					<Title>{title}</Title>

					{keywords && (
						<div className="flex items-center gap-2">
							<Tag text={keywords} />
						</div>
					)}
				</div>
			</BlurFade>
		</>
	)
}

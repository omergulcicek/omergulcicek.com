"use client"

import Link from "next/link"

import BlurFade from "@/ui/blur-fade"
import { Separator } from "@/ui/separator"
import { Tag } from "@/ui/tag"
import { Title } from "@/ui/title"

import { formatDate } from "@/utils"
import { Medium } from "@/utils/get-icon"

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
				<div className="flex flex-col gap-2">
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
										className="text-base transition !no-underline"
									>
										<div className="flex items-center gap-2">
											<figure className="size-4 transition duration-300 !my-0">
												<Medium />
											</figure>

											<span className="text-black dark:text-white">
												Medium'da Oku
											</span>
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

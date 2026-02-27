"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import { slugify } from "@/helpers/slugify"
import { DownloadIcon, EyeIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from "@/components/ui/dialog"
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger
} from "@/components/ui/drawer"
import { Heading } from "@/components/ui/typography"
import { ArrowButton, TagsBadge } from "@/shared"
import { experienceData } from "@/features/experience/data/experience.data"

interface ExperienceProps {
	showAll?: boolean
	title?: string
	showButton?: boolean
}

export function Experience({
	showAll = false,
	showButton = false
}: ExperienceProps) {
	const experiences = showAll ? experienceData : experienceData.slice(0, 3)
	const showTitle = showButton && experiences.length > 0
	const showTags = !showButton && experiences.length > 0
	const showDownloadButton = !showButton && experiences.length > 0

	return (
		<div className="flex flex-col gap-4">
			{showTitle && (
				<Heading id={slugify("Deneyimler")} as={"h2"}>
					Deneyimler
				</Heading>
			)}

			<div className="flex flex-col gap-2">
				<p className="text-muted-foreground">
					8 yılı aşkın tecrübemle, React ekosisteminde AI destekli ve yüksek
					performanslı mimariler kurgulayarak sürdürülebilir kullanıcı
					deneyimleri inşa ediyorum.
				</p>
				{showDownloadButton && (
					<div className="mt-4">
						<ResumeModal />
					</div>
				)}
				<div className="flex flex-col gap-6 md:gap-8 mt-10">
					{experiences.map((experience) => (
						<div
							key={experience.company}
							className="flex flex-col sm:flex-row sm:gap-6 gap-2 items-stretch sm:items-start"
						>
							<span className="text-sm text-muted-foreground tabular-nums shrink-0 pt-0.5 sm:min-w-24 order-first sm:order-0">
								{experience.period}
							</span>
							<div className="flex flex-col gap-2 min-w-0 flex-1">
								<div className="flex items-center gap-2 flex-wrap my-1 md:my-0">
									<span className="font-medium text-foreground text-base">
										{experience.role}
									</span>
									<span className="text-muted-foreground text-sm">·</span>
									<figure className="size-6 border rounded overflow-hidden shrink-0">
										<Image
											src={`/company/${experience.icon}.jpeg`}
											alt={experience.company}
											width={24}
											height={24}
											loading="lazy"
											quality={100}
										/>
									</figure>
									<span className="font-medium text-foreground text-base">
										{experience.company}
									</span>
								</div>

								{showTags && <TagsBadge tags={experience.technologies} />}

								<p className="text-sm text-muted-foreground leading-relaxed">
									{experience.responsibilities}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>

			{showButton && (
				<div className="flex justify-center mt-4 md:mt-6">
					<Link href="/experiences">
						<ArrowButton text="Tüm deneyimleri göster" />
					</Link>
				</div>
			)}
		</div>
	)
}

function ResumeModal() {
	const [open, setOpen] = React.useState(false)
	const isDesktop = useMediaQuery("(min-width: 768px)")
	const resumeUrl = "/omer-gulcicek-cv.pdf"

	if (isDesktop) {
		return (
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<Button variant="outline" size="sm" className="gap-2">
						<EyeIcon className="size-4" />
						Özgeçmişi İncele
					</Button>
				</DialogTrigger>
				<DialogContent className="min-w-3xl h-[95vh] flex flex-col">
					<DialogHeader>
						<DialogTitle>Özgeçmiş Önizleme</DialogTitle>
						<DialogDescription>
							Özgeçmişimi buradan inceleyebilir veya indirebilirsiniz.
						</DialogDescription>
					</DialogHeader>
					<div className="flex-1 w-full bg-muted rounded-md overflow-hidden border">
						<iframe
							src={resumeUrl}
							className="w-full h-full"
							title="Özgeçmiş Önizleme"
						/>
					</div>
					<DialogFooter>
						<Button asChild className="gap-2">
							<a href={resumeUrl} download="omer-gulcicek-cv.pdf">
								<DownloadIcon className="size-4" />
								İndir
							</a>
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		)
	}

	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild>
				<Button variant="outline" size="sm" className="gap-2">
					<EyeIcon className="size-4" />
					Özgeçmişi İncele
				</Button>
			</DrawerTrigger>
			<DrawerContent className="h-[90vh]">
				<DrawerHeader className="text-left">
					<DrawerTitle>Özgeçmiş Önizleme</DrawerTitle>
					<DrawerDescription>
						Özgeçmişimi buradan inceleyebilir veya indirebilirsiniz.
					</DrawerDescription>
				</DrawerHeader>
				<div className="flex-1 w-full bg-muted overflow-hidden border-y">
					<iframe
						src={resumeUrl}
						className="w-full h-full"
						title="Özgeçmiş Önizleme"
					/>
				</div>
				<DrawerFooter className="pt-2">
					<Button asChild className="gap-2">
						<a href={resumeUrl} download="omer-gulcicek-cv.pdf">
							<DownloadIcon className="size-4" />
							İndir
						</a>
					</Button>
					<DrawerClose asChild>
						<Button variant="outline">Kapat</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}

function useMediaQuery(query: string) {
	const [value, setValue] = React.useState(false)

	React.useEffect(() => {
		function onChange(event: MediaQueryListEvent) {
			setValue(event.matches)
		}

		const result = matchMedia(query)
		result.addEventListener("change", onChange)
		setValue(result.matches)

		return () => result.removeEventListener("change", onChange)
	}, [query])

	return value
}

import { useState } from "react"
import { Download, Eye } from "lucide-react"

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
import { SITE_CONTENT } from "@/constants/site-content.constants"
import {
	CV_FILES,
	DEFAULT_CV_LOCALE,
	type CvLocale
} from "@/features/experiences/constants/experiences.constants"
import { cn } from "@/lib/utils"

function getCvPreviewUrl(href: string) {
	return `${href}#view=FitH&toolbar=0&navpanes=0`
}

const CV_LOCALE_LABELS = {
	tr: {
		mobile: SITE_CONTENT.resumeLanguageTr,
		desktop: SITE_CONTENT.resumeLanguageTrShort
	},
	en: {
		mobile: SITE_CONTENT.resumeLanguageEn,
		desktop: SITE_CONTENT.resumeLanguageEnShort
	}
} as const satisfies Record<
	CvLocale,
	{ mobile: string; desktop: string }
>

export function ResumeModal() {
	const [open, setOpen] = useState(false)
	const [locale, setLocale] = useState<CvLocale>(DEFAULT_CV_LOCALE)
	const activeCv = CV_FILES[locale]

	function handleOpenChange(nextOpen: boolean) {
		setOpen(nextOpen)
		if (!nextOpen) {
			setLocale(DEFAULT_CV_LOCALE)
		}
	}

	return (
		<Dialog open={open} onOpenChange={handleOpenChange}>
			<DialogTrigger asChild>
				<Button variant="outline" size="sm" className="gap-2">
					<Eye className="size-4" aria-hidden />
					{SITE_CONTENT.resumeButton}
				</Button>
			</DialogTrigger>
			<DialogContent className="flex h-[90vh] w-[calc(100%-2rem)] max-w-4xl flex-col gap-3 overflow-hidden p-4 md:h-[65vh] md:gap-3 md:p-6">
				<DialogHeader className="shrink-0 gap-3">
					<div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:pr-8">
						<div className="flex min-w-0 flex-col gap-1.5 md:gap-2">
							<DialogTitle className="text-base md:text-lg">
								{SITE_CONTENT.resumeModalTitle}
							</DialogTitle>
							<DialogDescription className="text-xs md:text-sm">
								{SITE_CONTENT.resumeModalDescription}
							</DialogDescription>
						</div>
						<div
							role="group"
							aria-label={SITE_CONTENT.resumeLanguageGroup}
							className="bg-muted flex w-full shrink-0 rounded-md border p-0.5 md:inline-flex md:w-auto"
						>
							{(["tr", "en"] as const).map((value) => (
								<Button
									key={value}
									type="button"
									variant="ghost"
									size="sm"
									className={cn(
										"h-8 flex-1 px-2 text-xs md:h-7 md:min-w-10 md:flex-none md:px-3 md:text-sm",
										locale === value &&
											"bg-background text-foreground shadow-xs hover:bg-background"
									)}
									aria-pressed={locale === value}
									onClick={() => setLocale(value)}
								>
									<span className="md:hidden">
										{CV_LOCALE_LABELS[value].mobile}
									</span>
									<span className="hidden md:inline">
										{CV_LOCALE_LABELS[value].desktop}
									</span>
								</Button>
							))}
						</div>
					</div>
				</DialogHeader>
				<div className="bg-muted min-h-0 flex-1 overflow-hidden rounded-md border">
					<iframe
						key={locale}
						src={getCvPreviewUrl(activeCv.href)}
						className="size-full border-0"
						title={SITE_CONTENT.resumeModalTitle}
					/>
				</div>
				<DialogFooter className="shrink-0">
					<Button asChild className="gap-2">
						<a href={activeCv.href} download={activeCv.downloadName}>
							<Download className="size-4" aria-hidden />
							{SITE_CONTENT.resumeDownload}
						</a>
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}

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
			<DialogContent className="flex h-[65vh] w-[calc(100%-2rem)] max-w-4xl flex-col gap-3 overflow-hidden p-4 sm:p-6">
				<DialogHeader className="shrink-0 gap-3">
					<div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:pr-8">
						<div className="flex flex-col gap-2">
							<DialogTitle>{SITE_CONTENT.resumeModalTitle}</DialogTitle>
							<DialogDescription>
								{SITE_CONTENT.resumeModalDescription}
							</DialogDescription>
						</div>
						<div
							role="group"
							aria-label={SITE_CONTENT.resumeLanguageGroup}
							className="bg-muted inline-flex shrink-0 rounded-md border p-0.5"
						>
							{(["tr", "en"] as const).map((value) => (
								<Button
									key={value}
									type="button"
									variant="ghost"
									size="sm"
									className={cn(
										"h-7 min-w-10 px-3",
										locale === value &&
											"bg-background text-foreground shadow-xs hover:bg-background"
									)}
									aria-pressed={locale === value}
									onClick={() => setLocale(value)}
								>
									{value === "tr"
										? SITE_CONTENT.resumeLanguageTr
										: SITE_CONTENT.resumeLanguageEn}
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

export const proseParagraphClass =
	"text-base leading-relaxed text-pretty text-muted-foreground"

export const proseFlowClass = "flex flex-col gap-4"

export const proseEmphasisClass = "font-medium text-foreground"

export const pageTitleClass =
	"text-balance text-lg font-semibold tracking-tight text-foreground"

export const sectionHeadingClass =
	"text-balance text-base font-semibold tracking-tight text-foreground"

export const pageStackGapClass = "gap-12 md:gap-16"

export const pageShellClass = `flex flex-col py-10 md:py-16 ${pageStackGapClass}`

export const pageSectionClass = "flex flex-col gap-6"

export const bleedSectionClass = "mx-auto w-full max-w-5xl px-4 sm:px-6"

import { cn } from "@/lib/utils"

export const blogProseClass = "blog-prose"

export const blogTocClass = cn(
	"rounded-xl border border-border bg-muted/20 p-4"
)

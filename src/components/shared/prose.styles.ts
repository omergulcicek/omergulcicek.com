import { cn } from "@/lib/utils"

export const proseParagraphClass =
	"text-sm leading-relaxed text-pretty text-muted-foreground md:text-base"

export const proseFlowClass = "flex flex-col gap-3 md:gap-4"

export const proseEmphasisClass = "font-medium text-foreground"

export const pageTitleClass =
	"text-balance text-base font-semibold tracking-tight text-foreground md:text-lg"

export const heroSubtitleClass =
	"text-balance text-muted-foreground text-sm font-normal md:text-base"

export const cardTitleClass = "text-balance text-sm font-medium md:text-base"

export const listTitleClass =
	"text-balance min-w-0 flex-1 text-sm leading-6 font-normal md:text-base md:leading-7"

export const sectionHeadingClass =
	"text-balance text-sm font-semibold tracking-tight text-foreground md:text-base"

export const sectionHeadingSpacingClass = "mt-8 md:mt-12"

export const pageStackGapClass = "gap-12 md:gap-16"

export const pageShellClass = `flex flex-col py-8 md:py-16 ${pageStackGapClass}`

export const pageSectionClass = "flex flex-col gap-4 md:gap-6"

export const cardGridClass = "grid grid-cols-2 gap-3 md:gap-6"

export const bleedSectionClass = "mx-auto w-full max-w-5xl px-4 sm:px-6"

export const blogProseClass = "blog-prose"

export const blogTocClass = cn(
	"rounded-xl border border-border bg-muted/20 p-4"
)

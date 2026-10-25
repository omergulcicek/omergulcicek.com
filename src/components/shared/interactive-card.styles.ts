import { cardPaddingClass } from "@/components/shared/prose.styles"
import { cn } from "@/lib/utils"

export const surfaceDoubleFrameClass =
	"rounded-xl border border-border ring-1 ring-border ring-offset-4 ring-offset-background"

export const interactiveCardBaseClass = cn(
	"group flex flex-col gap-2 transition-[border-color,box-shadow] duration-150 ease-out md:gap-3",
	cardPaddingClass,
	surfaceDoubleFrameClass
)

export const interactiveSurfaceBgClass = "bg-surface"

export const surfacePanelClass = cn(
	surfaceDoubleFrameClass,
	interactiveSurfaceBgClass
)

export const interactiveSurfaceHoverBgClass =
	"hover:bg-surface"

export const interactiveSurfaceHoverBorderClass = "hover:border-foreground/10"

export const interactiveCardLiveClass = cn(
	interactiveSurfaceBgClass,
	"hover:border-foreground/10 hover:ring-foreground/8"
)

export const interactiveCardMutedClass =
	"border-dashed border-border/70 bg-muted/20 ring-border/60 hover:border-border hover:bg-muted/30 hover:ring-border"

export const interactiveCardChevronClass =
	"text-muted-foreground size-4 shrink-0 scale-[0.25] opacity-0 blur-[4px] transition-[transform,opacity,filter] duration-200 ease-[cubic-bezier(0.2,0,0,1)] fine-hover:group-hover:scale-100 fine-hover:group-hover:opacity-100 fine-hover:group-hover:blur-none motion-reduce:transition-none"

export const surfaceCardIconFrameClass =
	"mt-0.5 shrink-0 rounded-md border border-border/60 bg-muted/40 p-1.5"

export const interactiveRowCardVisualClass =
	"inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-muted"

export function getInteractiveCardClassName(isMuted = false) {
	return cn(
		interactiveCardBaseClass,
		isMuted ? interactiveCardMutedClass : interactiveCardLiveClass
	)
}

export const interactiveListRowClass = cn(
	"group relative rounded-xl border border-transparent ring-1 ring-transparent ring-offset-4 ring-offset-background transition-[border-color,background-color] duration-150 ease-out hover:z-10",
	interactiveSurfaceHoverBorderClass,
	interactiveSurfaceHoverBgClass,
	"hover:ring-foreground/8"
)

export const interactiveListRowBleedClass =
	"-mx-2.5 w-[calc(100%+1.25rem)] px-2.5 py-2.5 md:-mx-3 md:w-[calc(100%+1.5rem)] md:px-3 md:py-3"

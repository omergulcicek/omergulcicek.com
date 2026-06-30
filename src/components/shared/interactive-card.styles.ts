import { cn } from "@/lib/utils"

export const interactiveCardBaseClass =
	"group flex flex-col gap-3 rounded-xl border p-4 ring-1 ring-offset-4"

export const interactiveCardLiveClass =
	"border-border bg-[#fff] ring-border ring-offset-[#fcfcfc] hover:border-foreground/10 hover:ring-foreground/8 dark:bg-[#0b0b0b] dark:ring-offset-[#0f0f0f]"

export const interactiveCardMutedClass =
	"border-dashed border-border/70 bg-muted/20 ring-border/60 ring-offset-[#fcfcfc] hover:border-border hover:bg-muted/30 dark:ring-offset-[#0f0f0f]"

export const interactiveCardChevronClass =
	"text-muted-foreground size-4 shrink-0 scale-[0.25] opacity-0 transition-[transform,opacity] duration-200 ease-[cubic-bezier(0.2,0,0,1)] group-hover:scale-100 group-hover:opacity-100 motion-reduce:transition-none"

export function getInteractiveCardClassName(isMuted = false) {
	return cn(
		interactiveCardBaseClass,
		isMuted ? interactiveCardMutedClass : interactiveCardLiveClass
	)
}

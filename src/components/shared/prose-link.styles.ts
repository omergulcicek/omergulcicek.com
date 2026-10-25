import { cn } from "@/lib/utils"

export type ProseLinkVariant = "default" | "muted"

export const proseLinkBaseClass = "focus-link text-foreground underline"

export const proseLinkMutedClass =
	"focus-link text-muted-foreground text-sm underline-offset-4 hover:underline"

export function getProseLinkClassName(
	variant: ProseLinkVariant,
	className?: string
): string {
	return cn(
		variant === "muted" ? proseLinkMutedClass : proseLinkBaseClass,
		className
	)
}

/** External links open in a new tab; internal ones keep the default behaviour. */
export function getExternalLinkAttrs(href?: string) {
	if (!href?.startsWith("http")) {
		return {}
	}

	return {
		target: "_blank" as const,
		rel: "noopener noreferrer" as const
	}
}

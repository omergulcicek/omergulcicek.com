import type { ComponentPropsWithoutRef } from "react"

import { proseEmphasisClass } from "@/components/shared/prose.styles"
import { cn } from "@/lib/utils"

type ProseEmphasisProps = ComponentPropsWithoutRef<"span">

export function ProseEmphasis({ className, ...props }: ProseEmphasisProps) {
	return <span className={cn(proseEmphasisClass, className)} {...props} />
}

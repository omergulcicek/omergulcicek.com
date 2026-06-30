import type { ComponentProps } from "react"

import { Badge } from "@/components/ui/badge"
import { BlogTagIcon } from "@/features/blog/components/blog-tag-icon"
import { cn } from "@/lib/utils"

type BlogTagBadgeProps = {
	tag: string
	className?: string
} & Pick<ComponentProps<typeof Badge>, "variant">

export function BlogTagBadge({
	tag,
	className,
	variant = "outline"
}: BlogTagBadgeProps) {
	return (
		<Badge variant={variant} className={cn(className)}>
			<BlogTagIcon tag={tag} className="size-3 shrink-0" />
			{tag}
		</Badge>
	)
}

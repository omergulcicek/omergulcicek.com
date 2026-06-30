import type { ComponentProps } from "react"
import { Link } from "@tanstack/react-router"

import { Badge } from "@/components/ui/badge"
import { BlogTagIcon } from "@/features/blog/components/blog-tag-icon"
import { cn } from "@/lib/utils"

type BlogTagBadgeProps = {
	tag: string
	className?: string
	linkable?: boolean
} & Pick<ComponentProps<typeof Badge>, "variant">

export function BlogTagBadge({
	tag,
	className,
	variant = "outline",
	linkable = false
}: BlogTagBadgeProps) {
	const content = (
		<>
			<BlogTagIcon tag={tag} className="size-3 shrink-0" />
			{tag}
		</>
	)

	if (linkable) {
		return (
			<Badge variant={variant} className={cn(className)} asChild>
				<Link to="/blog" search={{ tag }} className="focus-link">
					{content}
				</Link>
			</Badge>
		)
	}

	return (
		<Badge variant={variant} className={cn(className)}>
			{content}
		</Badge>
	)
}

import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

import { Badge } from "@/components/ui/badge"
import { BlogSectionLink } from "@/features/blog/components/BlogSectionLink"
import { BlogTagIcon } from "@/features/blog/components/BlogTagIcon"
import type { BlogCategory } from "@/features/blog/types/blog.types"

type BlogTagBadgeProps = {
	tag: string
	className?: string
	/** When set, the badge links to that section's list filtered by the tag. */
	linkCategory?: BlogCategory
} & Pick<ComponentProps<typeof Badge>, "variant">

export function BlogTagBadge({
	tag,
	className,
	variant = "outline",
	linkCategory
}: BlogTagBadgeProps) {
	const content = (
		<>
			<BlogTagIcon tag={tag} className="size-3 shrink-0" />
			{tag}
		</>
	)

	if (linkCategory) {
		return (
			<Badge variant={variant} className={cn(className)} asChild>
				<BlogSectionLink
					category={linkCategory}
					tag={tag}
					className="focus-link"
				>
					{content}
				</BlogSectionLink>
			</Badge>
		)
	}

	return (
		<Badge variant={variant} className={cn(className)}>
			{content}
		</Badge>
	)
}

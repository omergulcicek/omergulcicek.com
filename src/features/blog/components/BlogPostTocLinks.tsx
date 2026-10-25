"use client"

import { navigateToHeading } from "@/lib/navigate-to-heading"
import { cn } from "@/lib/utils"

import type { TOCItemType } from "@/components/shared/TOCMinimap"

type BlogPostTocLinksProps = {
	items: TOCItemType[]
}

export function BlogPostTocLinks({ items }: BlogPostTocLinksProps) {
	return (
		<ol className="flex max-h-64 flex-col gap-1.5 overflow-y-auto overscroll-contain text-sm">
			{items.map((item) => (
				<li
					key={item.url}
					className={cn(item.depth === 3 && "ps-4", "text-muted-foreground")}
				>
					<a
						href={item.url}
						className="focus-link text-foreground hover:text-foreground/80 underline-offset-4 hover:underline"
						onClick={(event) => {
							if (
								event.metaKey ||
								event.ctrlKey ||
								event.shiftKey ||
								event.altKey ||
								event.button !== 0
							) {
								return
							}

							event.preventDefault()
							navigateToHeading(item.url.replace("#", ""))
						}}
					>
						{item.title}
					</a>
				</li>
			))}
		</ol>
	)
}

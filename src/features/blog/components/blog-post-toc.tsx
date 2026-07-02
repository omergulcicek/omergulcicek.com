"use client"

import { blogTocClass } from "@/components/shared/prose.styles"
import { TOCMinimap, type TOCItemType } from "@/components/toc-minimap"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@/components/ui/accordion"
import { BLOG_UI } from "@/features/blog/constants/blog.constants"
import {
	mapBlogHeadingsToTocItems,
	shouldShowBlogToc
} from "@/features/blog/helpers/blog-toc.helpers"
import type { BlogHeading } from "@/features/blog/types/blog-heading.types"
import { navigateToHeading } from "@/lib/navigate-to-heading"
import { cn } from "@/lib/utils"

type BlogPostTocProps = {
	headings: BlogHeading[]
	className?: string
}

type BlogPostTocLinksProps = {
	items: TOCItemType[]
}

function BlogPostTocLinks({ items }: BlogPostTocLinksProps) {
	return (
		<ol className="flex max-h-64 flex-col gap-1.5 overflow-y-auto overscroll-contain text-sm">
			{items.map((item) => (
				<li
					key={item.url}
					className={cn(
						item.depth === 3 && "ps-4",
						"text-muted-foreground"
					)}
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

export function BlogPostToc({ headings, className }: BlogPostTocProps) {
	if (!shouldShowBlogToc(headings)) {
		return null
	}

	const items = mapBlogHeadingsToTocItems(headings)

	return (
		<>
			<nav
				aria-label={BLOG_UI.tocAriaLabel}
				className={cn(blogTocClass, "lg:hidden", className)}
			>
				<Accordion type="single" collapsible>
					<AccordionItem value="toc" className="border-0">
						<AccordionTrigger className="py-0 hover:no-underline">
							<span className="text-muted-foreground text-sm font-medium">
								{BLOG_UI.tocLabel}
							</span>
						</AccordionTrigger>
						<AccordionContent className="pt-3 pb-0">
							<BlogPostTocLinks items={items} />
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</nav>

			<aside
				aria-label={BLOG_UI.tocMinimapAriaLabel}
				className="fixed top-1/2 right-3 z-30 hidden -translate-y-1/2 lg:block xl:right-6"
			>
				<TOCMinimap items={items} className="ml-0 w-14 xl:w-16" />
			</aside>
		</>
	)
}

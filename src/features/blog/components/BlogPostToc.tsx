"use client"

import { cn } from "@/lib/utils"

import { blogTocClass } from "@/components/shared/prose.styles"
import { TOCMinimap } from "@/components/shared/TOCMinimap"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@/components/ui/accordion"
import { BlogPostTocLinks } from "@/features/blog/components/BlogPostTocLinks"
import { BLOG_UI } from "@/features/blog/constants/blog.constants"
import {
	mapBlogHeadingsToTocItems,
	shouldShowBlogToc
} from "@/features/blog/helpers/blog-toc.helpers"
import type { BlogHeading } from "@/features/blog/types/blog-heading.types"

type BlogPostTocProps = {
	headings: BlogHeading[]
	className?: string
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

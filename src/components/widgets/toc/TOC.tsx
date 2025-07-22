"use client"

import { useMemo } from "react"

import { slugify } from "@/utils/slugify"

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@/ui"

interface TOCProps {
	content: string
}

export const TOC = ({ content }: TOCProps) => {
	const headings = useMemo(() => {
		const headingRegex = /^(#{1,6})\s+(.+)$/gm
		const matches = [...content.matchAll(headingRegex)]

		return matches.map((match, index) => ({
			id: `heading-${index}`,
			level: match[1].length,
			text: match[2],
			slug: slugify(match[2])
		}))
	}, [content])

	if (headings.length === 0) {
		return null
	}

	return (
		<Accordion
			type="single"
			collapsible
			className="w-full bg-secondary rounded-lg"
		>
			<AccordionItem value="toc">
				<AccordionTrigger className="px-4 py-3 hover:no-underline [& h3]:hidden">
					<span className="font-semibold text-sm">İçindekiler</span>
				</AccordionTrigger>
				<AccordionContent className="px-4 pb-4">
					<nav className="flex flex-col items-start">
						{headings.map((heading, index) => (
							<a
								key={index}
								href={`#${heading.slug}`}
								className="text-sm text-muted-foreground py-1 transition-colors hover:underline hover:text-foreground"
							>
								{heading.text}
							</a>
						))}
					</nav>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}

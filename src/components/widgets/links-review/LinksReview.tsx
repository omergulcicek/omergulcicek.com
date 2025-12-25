"use client"

import Link from "next/link"

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@/ui"

interface LinksReviewItem {
	href: string
	label: string
}

interface LinksReviewProps {
	title: string
	links: LinksReviewItem[]
}

export function LinksReview({ title, links }: LinksReviewProps) {
	return (
		<Accordion
			type="single"
			collapsible
			className="w-full my-4 border border-dashed rounded px-4 not-prose"
		>
			<AccordionItem value="links-review">
				<AccordionTrigger>{title}</AccordionTrigger>
				<AccordionContent>
					<ul className="list-disc pl-5 space-y-2">
						{links.map((link) => (
							<li key={link.href}>
								<Link
									href={link.href}
									className="hover:underline underline-offset-4"
									target="_blank"
									rel="noopener noreferrer"
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}

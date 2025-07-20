import React from "react"

import {
	CodeProps,
	ImageProps,
	LinkProps,
	MdxContentProps,
	PreProps
} from "@/types/mdx-type"

import { processMdxContent } from "@/utils/processMdxContent"

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	Button,
	Separator,
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger
} from "@/ui"
import { CopyButton } from "@/widgets"

const components = {
	Button,
	Separator,
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	CopyButton,

	pre: ({ children, ...props }: PreProps) => (
		<div className="relative">
			<pre {...props}>{children}</pre>
			<CopyButton value={String(children)} className="absolute top-2 right-2" />
		</div>
	),

	code: ({ children, ...props }: CodeProps) => (
		<code {...props}>{children}</code>
	),

	a: ({ href, children, ...props }: LinkProps) => {
		if (href?.startsWith("http")) {
			return (
				<a
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-600 hover:text-blue-800 underline"
					{...props}
				>
					{children}
				</a>
			)
		}

		return (
			<a
				href={href}
				className="text-blue-600 hover:text-blue-800 underline"
				{...props}
			>
				{children}
			</a>
		)
	},

	img: ({ src, alt, ...props }: ImageProps) => (
		<figure>
			<img
				src={src}
				alt={alt}
				className="rounded-lg max-w-full h-auto"
				loading="lazy"
				{...props}
			/>
		</figure>
	)
}

export async function MDX({ content }: MdxContentProps) {
	const processedContent = await processMdxContent(content)
	return <>{processedContent}</>
}

export { components }

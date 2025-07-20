import React from "react"

import { HeadingProps } from "@/types/heading-type"
import {
	CodeProps,
	ImageProps,
	LinkProps,
	MdxContentProps,
	PreProps
} from "@/types/mdx-type"

import { processMdxContent } from "@/utils/process-mdx-content"
import { slugify } from "@/utils/slugify"

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	Button,
	Heading,
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
	Heading,

	pre: ({ children, ...props }: PreProps) => {
		// children'ı string'e çevir
		const getCodeContent = (children: React.ReactNode): string => {
			if (typeof children === "string") {
				return children
			}
			if (Array.isArray(children)) {
				return children.map(getCodeContent).join("")
			}
			if (React.isValidElement(children)) {
				const element = children as React.ReactElement
				// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
				return getCodeContent((element as any).props.children)
			}
			return ""
		}

		const codeContent = getCodeContent(children)

		return (
			<div className="relative">
				<pre {...props}>{children}</pre>
				<CopyButton value={codeContent} className="absolute top-2 right-2" />
			</div>
		)
	},

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
	),

	h1: ({ children, ...props }: HeadingProps<"h1">) => (
		<Heading as="h1" {...props} id={slugify(children as string)}>
			{children}
		</Heading>
	),

	h2: ({ children, ...props }: HeadingProps<"h2">) => (
		<Heading as="h2" {...props} id={slugify(children as string)}>
			{children}
		</Heading>
	),

	h3: ({ children, ...props }: HeadingProps<"h3">) => (
		<Heading as="h3" {...props} id={slugify(children as string)}>
			{children}
		</Heading>
	),

	h4: ({ children, ...props }: HeadingProps<"h4">) => (
		<Heading as="h4" {...props} id={slugify(children as string)}>
			{children}
		</Heading>
	)
}

export async function MDX({ content }: MdxContentProps) {
	const processedContent = await processMdxContent(content)
	return <>{processedContent}</>
}

export { components }

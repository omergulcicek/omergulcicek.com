import React from "react"
import Image from "next/image"

import { processMdxContent } from "@/helpers/process-mdx-content"

import { HeadingProps } from "@/types/heading-type"
import {
	CodeProps,
	ImageProps,
	LinkProps,
	MdxContentProps,
	PreProps
} from "@/types/mdx-type"

import { slugify } from "@/utils/slugify"

import { MdxZoomProvider } from "@/components/widgets/mdx/mdx-zoom-provider"
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
import {
	BookInfo,
	ChartAreaLinear,
	CopyButton,
	MediaInfo,
	Rating
} from "@/widgets"

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
	BookInfo,
	MediaInfo,
	Rating,
	Heading,
	ChartAreaLinear,

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
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
		<code
			className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
			{...props}
		>
			{children}
		</code>
	),

	a: ({ href, children, ...props }: LinkProps) => {
		if (href?.startsWith("http")) {
			return (
				<a
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					className="underline underline-offset-4"
					{...props}
				>
					{children}
				</a>
			)
		}

		return (
			<a href={href} className="underline underline-offset-4" {...props}>
				{children}
			</a>
		)
	},

	img: ({ src, alt, ...props }: ImageProps) => (
		<figure className="md:my-6 md:-mx-20">
			<Image
				src={src || ""}
				alt={alt || ""}
				width={800}
				height={520}
				className="rounded-lg max-w-full max-h-[520px] w-auto h-auto mx-auto border"
				data-zoomable
				{...props}
			/>
			<figcaption className="text-center text-sm text-muted-foreground">
				{alt}
			</figcaption>
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
	),

	p: ({ children, ...props }: React.ComponentProps<"p">) => (
		<p className="leading-7 [&:not(:first-child)]:mt-6" {...props}>
			{children}
		</p>
	)
}

export async function MDX({ content }: MdxContentProps) {
	const processedContent = await processMdxContent(content, components)
	return <MdxZoomProvider>{processedContent}</MdxZoomProvider>
}

export { components }

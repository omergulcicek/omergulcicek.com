import React from "react"
import Image from "next/image"

import { slugify } from "@/helpers/slugify"

import { HeadingProps } from "@/types/heading.types"
import { CodeProps, ImageProps, LinkProps, PreProps } from "@/types/mdx.types"

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
import { BookInfo } from "@/features/blog/components/book-info"
import { ChartAreaLinear } from "@/features/blog/components/chart-area-linear"
import { CopyButton } from "@/features/blog/components/copy-button"
import { ImagesCarousel } from "@/features/blog/components/images-carousel"
import {
	ClipPath,
	CornerShape,
	PickerIcon,
	SiblingIndex,
	Stretch,
	TextBox
} from "@/features/blog/components/interactive"
import { LinksReview } from "@/features/blog/components/links-review"
import { MdxTable } from "@/features/blog/components/mdx-table"
import { MediaInfo } from "@/features/blog/components/media-info"
import { Rating } from "@/features/blog/components/rating"

export const components = {
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
	ImagesCarousel,
	LinksReview,
	CornerShape,
	ClipPath,
	PickerIcon,
	SiblingIndex,
	Stretch,
	TextBox,
	MdxTable,

	pre: ({ children, ...props }: PreProps) => {
		const getCodeContent = (node: React.ReactNode): string => {
			if (typeof node === "string") {
				return node
			}
			if (Array.isArray(node)) {
				return node.map(getCodeContent).join("")
			}
			if (React.isValidElement(node)) {
				const props = node.props as { children?: React.ReactNode }
				return getCodeContent(props.children)
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
			className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-prose-foreground"
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
					className="underline underline-offset-4 text-prose-foreground"
					{...props}
				>
					{children}
				</a>
			)
		}

		return (
			<a
				href={href}
				className="underline underline-offset-4 text-prose-foreground"
				{...props}
			>
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
				loading="lazy"
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
				data-zoomable
				{...props}
			/>
			<figcaption className="text-center text-sm text-muted-foreground">
				{alt}
			</figcaption>
		</figure>
	),

	h1: ({ children, ...props }: HeadingProps<"h1">) => (
		<Heading as="h1" {...props} id={slugify(String(children))}>
			{children}
		</Heading>
	),

	h2: ({ children, ...props }: HeadingProps<"h2">) => (
		<Heading as="h2" {...props} id={slugify(String(children))}>
			{children}
		</Heading>
	),

	h3: ({ children, ...props }: HeadingProps<"h3">) => (
		<Heading as="h3" {...props} id={slugify(String(children))}>
			{children}
		</Heading>
	),

	h4: ({ children, ...props }: HeadingProps<"h4">) => (
		<Heading as="h4" {...props} id={slugify(String(children))}>
			{children}
		</Heading>
	),

	p: ({ children, ...props }: React.ComponentProps<"p">) => (
		<p
			className="text-base leading-7 not-first:mt-6 text-prose-body"
			{...props}
		>
			{children}
		</p>
	)
}

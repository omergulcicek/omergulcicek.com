import React from "react"

import { LinkIcon } from "lucide-react"
import { Slot as SlotPrimitive } from "radix-ui"

import { HeadingProps, HeadingTypes } from "@/types/heading-type"

import { cn } from "@/lib/utils"

const Slot = SlotPrimitive.Slot

function Prose({
	className,
	asChild = false,
	...props
}: React.ComponentProps<"div"> & {
	asChild?: boolean
}) {
	const Comp = asChild ? Slot : "div"

	return (
		<Comp
			data-slot="prose"
			className={cn(
				"prose max-w-none font-mono text-foreground prose-zinc dark:prose-invert",
				"prose-headings:font-sans prose-headings:font-semibold prose-headings:text-balance",
				"prose-h1:text-5xl prose-h1:font-bold prose-h1:leading-tight",
				"prose-h2:border-b prose-h2:border-edge prose-h2:pb-2 prose-h2:text-2xl",
				"prose-lead:text-base",
				"prose-a:font-medium prose-a:break-words prose-a:text-foreground prose-a:underline prose-a:underline-offset-4",
				"prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none",
				"prose-hr:border-edge",
				className
			)}
			{...props}
		/>
	)
}

function Code({ className, ...props }: React.ComponentProps<"code">) {
	const isCodeBlock = "data-language" in props

	return (
		<code
			data-slot={isCodeBlock ? "code-block" : "code-inline"}
			className={cn(
				!isCodeBlock &&
					"not-prose rounded-md border bg-muted/50 px-[0.3rem] py-[0.2rem] font-mono text-sm",
				className
			)}
			{...props}
		/>
	)
}

function Heading<T extends HeadingTypes = "h1">({
	as,
	className,
	...props
}: HeadingProps<T>): React.ReactElement {
	const Comp = as ?? "h1"

	return (
		<Comp
			className={cn(
				"flex flex-row items-center gap-2 scroll-m-20",
				as === "h1" && "text-4xl font-extrabold tracking-tight text-balance",
				as === "h2" && "pb-2 text-3xl font-semibold tracking-tight first:mt-0",
				as === "h3" && "text-2xl font-semibold tracking-tight",
				as === "h4" && "text-xl font-semibold tracking-tight",
				className
			)}
			{...props}
		>
			<a href={`#${props.id}`} className="peer not-prose">
				{props.children}
			</a>

			<LinkIcon
				className="size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100"
				aria-label="Link to section"
			/>
		</Comp>
	)
}

export { Code, Heading, Prose }

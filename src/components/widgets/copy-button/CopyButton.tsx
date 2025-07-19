"use client"

import React, { useEffect, useState } from "react"

import { CheckIcon, CopyIcon } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "@/ui"

export function CopyButton({
	value,
	className,
	...props
}: {
	value: string
	className?: string
}) {
	const [hasCopied, setHasCopied] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setHasCopied(false)
		}, 2000)
	}, [hasCopied])

	return (
		<Button
			size="icon"
			variant="secondary"
			className={cn("z-10 size-6 rounded-md", className)}
			onClick={() => {
				navigator.clipboard.writeText(value)
				setHasCopied(true)
			}}
			{...props}
		>
			{hasCopied ? (
				<CheckIcon className="size-3" />
			) : (
				<CopyIcon className="size-3" />
			)}
			<span className="sr-only">Copy</span>
		</Button>
	)
}

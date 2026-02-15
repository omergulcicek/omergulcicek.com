"use client"

import { ChevronRight } from "lucide-react"

import { Button } from "@/ui"

export function ArrowButton({ text }: { text: string }) {
	return (
		<Button variant="outline" className="group">
			<span>{text}</span>
			<ChevronRight className="size-4 group-hover:translate-x-1 transition-transform duration-200" />
		</Button>
	)
}

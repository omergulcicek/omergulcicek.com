"use client"

import * as React from "react"
import Link from "next/link"

import { Button } from "@/ui/button"

import { GitHub } from "@/utils/get-icon"

export function GithubButton() {
	return (
		<>
			<Button
				variant="ghost"
				aria-label="Açık temaya geç"
				className="size-8 px-0"
			>
				<Link
					href="https://github.com/omergulcicek"
					rel="noopener noreferrer"
					target="_blank"
				>
					<GitHub />
				</Link>
			</Button>
		</>
	)
}

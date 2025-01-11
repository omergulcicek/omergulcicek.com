"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Moon, Sun } from "lucide-react"

import { Button } from "@/ui/button"

export function ThemeToggleButton() {
	const { theme, setTheme } = useTheme()

	console.log(theme)

	if (theme === "dark") {
		return (
			<>
				<Button
					variant="ghost"
					aria-label="Koyu temaya geç"
					className="size-8 px-0"
					onClick={() => setTheme("light")}
				>
					<Sun size={16} />
				</Button>
			</>
		)
	}

	return (
		<>
			<Button
				variant="ghost"
				aria-label="Açık temaya geç"
				className="size-8 px-0"
				onClick={() => setTheme("dark")}
			>
				<Moon size={16} />
			</Button>
		</>
	)
}

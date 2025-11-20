"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

import { Moon, Sun } from "lucide-react"

import { Button } from "@/ui"

export function ThemeToggle() {
	const { theme, setTheme } = useTheme()
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) {
		return (
			<Button
				variant="outline"
				size="sm"
				className="rounded-full size-8"
				aria-label="Tema yükleniyor"
				disabled
			>
				<Moon className="size-4" />
			</Button>
		)
	}

	const isDark = theme === "dark"

	const handleToggle = () => {
		setTheme(isDark ? "light" : "dark")
	}

	return (
		<Button
			type="button"
			variant="outline"
			size="sm"
			className="rounded-full size-8"
			onClick={handleToggle}
			aria-label={isDark ? "Aydınlık temaya geç" : "Karanlık temaya geç"}
		>
			{isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
		</Button>
	)
}

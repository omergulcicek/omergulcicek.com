import { useEffect, useState, type ReactNode } from "react"

import { CommandPaletteContext } from "@/components/shared/command-palette/use-command-palette"

export function CommandPaletteProvider({
	children
}: Readonly<{ children: ReactNode }>) {
	const [open, setOpen] = useState(false)

	useEffect(() => {
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
				event.preventDefault()
				setOpen((current) => !current)
			}
		}

		document.addEventListener("keydown", onKeyDown)
		return () => document.removeEventListener("keydown", onKeyDown)
	}, [])

	return (
		<CommandPaletteContext.Provider value={{ open, setOpen }}>
			{children}
		</CommandPaletteContext.Provider>
	)
}

import { useEffect, useRef, useState, type ReactNode } from "react"

import { CommandPaletteContext } from "@/components/shared/command-palette/use-command-palette"

/** Remembers what had focus before the palette opened; the dialog has no Radix Trigger to return focus to. */
function captureReturnFocus(): HTMLElement | null {
	const active = document.activeElement

	if (!(active instanceof HTMLElement) || active.closest("[role='dialog']")) {
		return null
	}

	return active
}

export function CommandPaletteProvider({
	children
}: Readonly<{ children: ReactNode }>) {
	const [open, setOpenState] = useState(false)
	const returnFocusRef = useRef<HTMLElement | null>(null)

	const setOpen = (nextOpen: boolean) => {
		if (nextOpen) {
			returnFocusRef.current = captureReturnFocus()
		}

		setOpenState(nextOpen)
	}

	useEffect(() => {
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
				event.preventDefault()
				returnFocusRef.current ??= captureReturnFocus()
				setOpenState((current) => !current)
			}
		}

		document.addEventListener("keydown", onKeyDown)
		return () => document.removeEventListener("keydown", onKeyDown)
	}, [])

	useEffect(() => {
		if (open) {
			return
		}

		returnFocusRef.current?.focus()
		returnFocusRef.current = null
	}, [open])

	return (
		<CommandPaletteContext.Provider value={{ open, setOpen }}>
			{children}
		</CommandPaletteContext.Provider>
	)
}

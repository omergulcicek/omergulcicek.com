import { createContext, useContext } from "react"

export type CommandPaletteContextValue = {
	open: boolean
	setOpen: (open: boolean) => void
}

export const CommandPaletteContext =
	createContext<CommandPaletteContextValue | null>(null)

export function useCommandPalette() {
	const context = useContext(CommandPaletteContext)

	if (!context) {
		throw new Error(
			"useCommandPalette must be used within CommandPaletteProvider"
		)
	}

	return context
}

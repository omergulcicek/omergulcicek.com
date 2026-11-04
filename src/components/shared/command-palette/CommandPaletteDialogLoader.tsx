import { lazy, Suspense, useState, type ReactNode } from "react"

import { useCommandPalette } from "@/hooks/use-command-palette"

import { preloadCommandPaletteDialog } from "@/components/shared/command-palette/preload-command-palette-dialog"

const CommandPaletteDialog = lazy(async () => {
	const module = await preloadCommandPaletteDialog()
	return { default: module.CommandPaletteDialog }
})

/**
 * Keeps cmdk, the dialog primitive and the search data out of the entry bundle:
 * the dialog is fetched on first open and stays mounted afterwards so closing
 * animations and later opens are instant.
 */
export function CommandPaletteDialogLoader({
	children
}: Readonly<{ children?: ReactNode }>) {
	const { open } = useCommandPalette()
	const [hasOpened, setHasOpened] = useState(false)

	if (open && !hasOpened) {
		setHasOpened(true)
	}

	if (!hasOpened) {
		return null
	}

	return (
		<Suspense fallback={null}>
			<CommandPaletteDialog>{children}</CommandPaletteDialog>
		</Suspense>
	)
}

import { lazy, Suspense, useState } from "react"

import { preloadCommandPaletteDialog } from "@/components/shared/command-palette/preload-command-palette-dialog"
import { useCommandPalette } from "@/components/shared/command-palette/use-command-palette"

const CommandPaletteDialog = lazy(async () => {
	const module = await preloadCommandPaletteDialog()
	return { default: module.CommandPaletteDialog }
})

/**
 * Keeps cmdk, the dialog primitive and the search data out of the entry bundle:
 * the dialog is fetched on first open and stays mounted afterwards so closing
 * animations and later opens are instant.
 */
export function CommandPaletteDialogLoader() {
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
			<CommandPaletteDialog />
		</Suspense>
	)
}

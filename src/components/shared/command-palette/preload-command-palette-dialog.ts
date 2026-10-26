/** Starts the dialog chunk download; safe to call repeatedly because the module is cached. */
export function preloadCommandPaletteDialog() {
	return import("@/components/shared/command-palette/CommandPaletteDialog")
}

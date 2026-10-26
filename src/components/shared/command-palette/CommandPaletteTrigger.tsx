import { Search } from "lucide-react"

import { SITE_CONTENT } from "@/constants/site-content.constants"

import { preloadCommandPaletteDialog } from "@/components/shared/command-palette/preload-command-palette-dialog"
import { useCommandPalette } from "@/components/shared/command-palette/use-command-palette"
import { Button } from "@/components/ui/button"

/** Header search button: icon on mobile, label and ⌘K hint from `sm` up. */
export function CommandPaletteTrigger() {
	const { setOpen } = useCommandPalette()

	return (
		<Button
			type="button"
			variant="outline"
			size="sm"
			onClick={() => setOpen(true)}
			onPointerEnter={preloadCommandPaletteDialog}
			onFocus={preloadCommandPaletteDialog}
			aria-label={SITE_CONTENT.searchTriggerLabel}
			aria-keyshortcuts="Meta+K"
			className="text-muted-foreground hover:text-foreground h-8 gap-1.5 rounded-lg border-border/70 px-2.5 text-sm font-normal shadow-none"
		>
			<Search className="size-4 shrink-0" aria-hidden />
			<span className="hidden sm:inline">
				{SITE_CONTENT.searchTriggerLabel}
			</span>
			<kbd
				aria-hidden
				className="bg-muted text-muted-foreground pointer-events-none hidden h-5 items-center gap-0.5 rounded border px-1 font-mono text-[11px] font-medium leading-none sm:inline-flex">
				<span>⌘</span>
				<span>K</span>
			</kbd>
		</Button>
	)
}

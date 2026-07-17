import { ArrowUp } from "lucide-react"

import { ScrollProgressRing } from "@/components/shared/scroll-progress-ring"
import { ThemeToggle } from "@/components/shared/ThemeToggle"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SITE_CONTENT } from "@/constants/site-content.constants"
import { CommandPaletteTrigger } from "@/features/search/components/CommandPalette"
import { useScrollProgress } from "@/hooks/use-scroll-progress"
import { cn } from "@/lib/utils"

const SCROLL_TO_TOP_THRESHOLD = 95
const dockSeparatorClassName =
	"mx-0.5 h-4 shrink-0 self-center data-[orientation=vertical]:h-4"

function scrollToTop() {
	window.scrollTo({ top: 0, behavior: "smooth" })
}

export function SiteDock() {
	const progress = useScrollProgress()
	const showProgress = progress > 0
	const isScrollToTop = progress >= SCROLL_TO_TOP_THRESHOLD

	return (
		<div
			className={cn(
				"pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center",
				"px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
			)}
		>
			<div
				className={cn(
					"pointer-events-auto flex h-10 items-center gap-0.5 rounded-full border bg-background/95 py-1 pl-1.5 pr-2 shadow-lg backdrop-blur",
					"supports-backdrop-filter:bg-background/80"
				)}
				role="toolbar"
				aria-label={SITE_CONTENT.siteDockToolbarAria}
			>
				<CommandPaletteTrigger variant="dock" />
				<Separator
					orientation="vertical"
					className={dockSeparatorClassName}
				/>
				<ThemeToggle size="icon-xs" />
				{showProgress ? (
					<>
						<Separator
							orientation="vertical"
							className={dockSeparatorClassName}
						/>
						{isScrollToTop ? (
							<Button
								type="button"
								variant="ghost"
								size="icon-xs"
								onClick={scrollToTop}
								aria-label={SITE_CONTENT.siteDockScrollToTop}
							>
								<ArrowUp className="size-3.5" />
							</Button>
						) : (
							<div
								className="flex size-6 items-center justify-center transition-transform duration-150 ease-out active:scale-[0.96]"
								role="progressbar"
								aria-label={SITE_CONTENT.siteDockScrollProgress}
								aria-valuemin={0}
								aria-valuemax={100}
								aria-valuenow={Math.round(progress)}
							>
								<ScrollProgressRing value={progress} />
							</div>
						)}
					</>
				) : null}
			</div>
		</div>
	)
}

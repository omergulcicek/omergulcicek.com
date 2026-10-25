import { ArrowUp } from "lucide-react"

import { ScrollProgressRing } from "@/components/shared/scroll-progress-ring"
import { Button } from "@/components/ui/button"
import { SITE_CONTENT } from "@/constants/site-content.constants"
import { useScrollProgress } from "@/hooks/use-scroll-progress"
import { cn } from "@/lib/utils"

const SCROLL_TO_TOP_THRESHOLD = 95

function scrollToTop() {
	window.scrollTo({ top: 0, behavior: "smooth" })
}

/** Bottom-right reading progress ring; becomes a scroll-to-top arrow near the end of the page. */
export function ScrollToTopIndicator() {
	const progress = useScrollProgress()

	if (progress <= 0) {
		return null
	}

	const isNearEnd = progress >= SCROLL_TO_TOP_THRESHOLD

	return (
		<div className="pointer-events-none fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50">
			<Button
				type="button"
				variant="outline"
				size="icon-sm"
				onClick={scrollToTop}
				aria-label={SITE_CONTENT.scrollToTop}
				className={cn(
					"bg-background/95 supports-backdrop-filter:bg-background/80 pointer-events-auto rounded-full shadow-md backdrop-blur",
					"motion-enter"
				)}
			>
				{isNearEnd ? (
					<ArrowUp className="size-3.5" aria-hidden />
				) : (
					<span
						role="progressbar"
						aria-label={SITE_CONTENT.scrollProgress}
						aria-valuemin={0}
						aria-valuemax={100}
						aria-valuenow={Math.round(progress)}
					>
						<ScrollProgressRing value={progress} />
					</span>
				)}
			</Button>
		</div>
	)
}

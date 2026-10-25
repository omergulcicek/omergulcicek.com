import { SITE_CONTENT } from "@/constants/site-content.constants"

export function ComingSoonBadge() {
	return (
		<span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-amber-600/30 bg-amber-500/15 px-1.5 py-0.5 text-xs font-medium text-amber-950 md:gap-1.5 md:px-2 dark:border-amber-400/30 dark:bg-amber-400/15 dark:text-amber-100">
			<span className="relative flex size-1.5" aria-hidden>
				<span className="absolute inline-flex size-full animate-ping rounded-full bg-amber-400 opacity-75 motion-reduce:animate-none" />
				<span className="relative inline-flex size-1.5 rounded-full bg-amber-500" />
			</span>
			{SITE_CONTENT.projectsBadgeComingSoon}
		</span>
	)
}

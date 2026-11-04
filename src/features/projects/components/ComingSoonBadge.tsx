import { SITE_CONTENT } from "@/constants/site-content.constants"

export function ComingSoonBadge() {
	return (
		<span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-warning/30 bg-warning/15 text-warning-foreground px-1.5 py-0.5 text-xs font-medium md:gap-1.5 md:px-2">
			<span className="relative flex size-1.5" aria-hidden>
				<span className="absolute inline-flex size-full animate-ping rounded-full bg-warning opacity-75 motion-reduce:animate-none" />
				<span className="relative inline-flex size-1.5 rounded-full bg-warning" />
			</span>
			{SITE_CONTENT.projectsBadgeComingSoon}
		</span>
	)
}

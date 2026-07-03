import { SITE_FLAGS } from "@/constants/site-flags.constants"
import { cn } from "@/lib/utils"

type OpenToWorkBadgeProps = {
	className?: string
}

export function OpenToWorkBadge({ className }: OpenToWorkBadgeProps) {
	if (!SITE_FLAGS.isOpenToWork) {
		return null
	}

	return (
		<span
			className={cn(
				"inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-400",
				className
			)}
		>
			<span className="relative flex size-2">
				<span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
				<span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
			</span>
			Yeni fırsatlara açık
		</span>
	)
}

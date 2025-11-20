import { cn } from "@/lib/utils"

export function JobSeekingBadge({ className }: { className?: string }) {
	return (
		<div
			className={cn(
				"inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-emerald-500",
				className
			)}
		>
			<span className="relative flex h-2 w-2">
				<span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
				<span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
			</span>
			<span>Yeni fırsatlara açık</span>
		</div>
	)
}

export function JobSeekingBadge() {
	return (
		<div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-emerald-500">
			<span className="relative flex h-2 w-2">
				<span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
				<span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
			</span>
			<span>Tekliflere açık</span>
		</div>
	)
}

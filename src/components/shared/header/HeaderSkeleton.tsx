import React from "react"

export function HeaderSkeleton() {
	const SKELETON_KEYS = ["sk-1", "sk-2", "sk-3", "sk-4"]
	return (
		<div className="hidden md:flex items-center gap-4 py-2">
			{SKELETON_KEYS.map((key) => (
				<div key={key} className="h-4 w-18 animate-pulse rounded-sm bg-muted" />
			))}
		</div>
	)
}

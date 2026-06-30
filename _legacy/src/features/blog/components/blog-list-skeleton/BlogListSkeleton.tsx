export function BlogListSkeleton() {
	const SKELETON_KEYS = ["bls-1", "bls-2", "bls-3", "bls-4", "bls-5"]
	return (
		<div className="space-y-6 mt-10">
			{SKELETON_KEYS.map((key) => (
				<div key={key} className="flex flex-col gap-1 animate-pulse">
					<div className="h-6 bg-muted rounded w-3/4" />
					<div className="h-4 bg-muted rounded w-1/2 mt-2" />
				</div>
			))}
		</div>
	)
}

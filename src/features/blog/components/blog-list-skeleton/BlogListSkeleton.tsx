export function BlogListSkeleton() {
	return (
		<div className="space-y-6 mt-10">
			{Array.from({ length: 5 }).map((_, i) => (
				<div key={i} className="flex flex-col gap-1 animate-pulse">
					<div className="h-6 bg-muted rounded w-3/4" />
					<div className="h-4 bg-muted rounded w-1/2 mt-2" />
				</div>
			))}
		</div>
	)
}


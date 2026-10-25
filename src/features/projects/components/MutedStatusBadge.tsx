
export function MutedStatusBadge({ label }: { label: string }) {
	return (
		<span className="inline-flex shrink-0 items-center rounded-full border border-border/60 bg-muted/40 px-1.5 py-0.5 text-xs font-medium text-muted-foreground md:px-2">
			{label}
		</span>
	)
}

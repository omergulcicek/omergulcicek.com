type CommandPaletteResultTextProps = {
	title: string
	description: string
}

export function CommandPaletteResultText({
	title,
	description
}: CommandPaletteResultTextProps) {
	return (
		<div className="flex min-w-0 flex-1 flex-col">
			<span>{title}</span>
			<span className="truncate text-[11px] text-muted-foreground">
				{description}
			</span>
		</div>
	)
}

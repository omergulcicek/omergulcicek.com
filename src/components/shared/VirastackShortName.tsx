const VIRASTACK_PREFIX = "ViraStack "

type VirastackShortNameProps = {
	title: string
}

/**
 * Shows "Start" for "ViraStack Start" but keeps the brand in the link text for screen
 * readers and crawlers: a bare "Start" reads as a generic call to action (Lighthouse
 * link-text audit).
 */
export function VirastackShortName({ title }: VirastackShortNameProps) {
	if (!title.startsWith(VIRASTACK_PREFIX)) {
		return title
	}

	return (
		<>
			<span className="sr-only">{VIRASTACK_PREFIX}</span>
			{title.slice(VIRASTACK_PREFIX.length)}
		</>
	)
}

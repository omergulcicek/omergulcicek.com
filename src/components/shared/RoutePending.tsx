import { SITE_CONTENT } from "@/constants/site-content.constants"

import { Container } from "@/components/shared/Container"
import { pageShellClass } from "@/components/shared/prose.styles"
import { Skeleton } from "@/components/ui/skeleton"

const PENDING_ROWS = ["a", "b", "c", "d", "e", "f"]

/**
 * Shown while a route loader is still running: the page shell with a title, a short
 * intro and list rows, so the real page replaces it without moving the layout.
 */
export function RoutePending() {
	return (
		<Container>
			<div role="status" aria-busy="true" className={pageShellClass}>
				<span className="sr-only">{SITE_CONTENT.routePendingLabel}</span>
				<div className="flex flex-col gap-3 md:gap-4" aria-hidden>
					<Skeleton className="h-9 w-40" />
					<Skeleton className="h-5 w-full max-w-md" />
				</div>
				<div className="flex flex-col gap-4" aria-hidden>
					{PENDING_ROWS.map((row) => (
						<Skeleton key={row} className="h-16 w-full" />
					))}
				</div>
			</div>
		</Container>
	)
}

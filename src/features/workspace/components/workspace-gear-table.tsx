import { ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from "@/components/ui/table"
import {
	WORKSPACE_CONTENT,
	WORKSPACE_GEAR_ITEMS
} from "@/features/workspace/constants/workspace.constants"
import { withOutboundUtm } from "@/lib/outbound-url"

export function WorkspaceGearTable() {
	const { tableColumns, reviewLinkLabel } = WORKSPACE_CONTENT

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>{tableColumns.product}</TableHead>
					<TableHead>{tableColumns.specs}</TableHead>
					<TableHead className="w-[1%] text-right">
						<span className="sr-only">{tableColumns.review}</span>
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{WORKSPACE_GEAR_ITEMS.map((item) => (
					<TableRow key={item.product}>
						<TableCell className="whitespace-normal font-medium text-foreground">
							{item.product}
						</TableCell>
						<TableCell className="whitespace-normal text-muted-foreground">
							{item.specs}
						</TableCell>
						<TableCell className="text-right">
							<Button variant="outline" size="icon-sm" asChild>
								<a
									href={withOutboundUtm(item.href)}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={`${reviewLinkLabel}: ${item.product}`}
								>
									<ExternalLink className="size-3.5" aria-hidden />
								</a>
							</Button>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}

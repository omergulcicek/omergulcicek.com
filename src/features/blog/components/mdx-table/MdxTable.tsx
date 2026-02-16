"use client"

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from "@/components/ui/table"
import type { MdxTablePropsType } from "@/features/blog/types/mdx-table.types"

export function MdxTable({ headers, rows }: MdxTablePropsType) {
	return (
		<div className="w-full overflow-x-auto">
			<Table>
				<TableHeader>
					<TableRow>
						{headers.map((header) => (
							<TableHead key={header}>{header}</TableHead>
						))}
					</TableRow>
				</TableHeader>
				<TableBody>
					{rows.map((row, rowIndex) => (
						<TableRow key={String(row[0] || rowIndex)}>
							{row.map((cell, cellIndex) => (
								<TableCell
									key={`${rowIndex}-${cellIndex}`}
									className="whitespace-normal text-prose-body"
								>
									{cell}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	)
}

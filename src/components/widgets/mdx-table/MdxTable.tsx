"use client"

import type { MdxTablePropsType } from "@/types/mdx-table.type"

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from "@/components/ui/table"

export function MdxTable({ headers, rows }: MdxTablePropsType) {
	return (
		<div className="w-full overflow-x-auto">
			<Table>
				<TableHeader>
					<TableRow>
						{headers.map((header, index) => (
							<TableHead key={index}>{header}</TableHead>
						))}
					</TableRow>
				</TableHeader>
				<TableBody>
					{rows.map((row, rowIndex) => (
						<TableRow key={rowIndex}>
							{row.map((cell, cellIndex) => (
								<TableCell
									key={cellIndex}
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

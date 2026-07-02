import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from "@/components/ui/table"
import type { BlogMdxTableProps } from "@/features/blog/types/mdx-table.types"

export function BlogMdxTable({ headers, rows }: BlogMdxTableProps) {
	return (
		<div className="blog-mdx-table my-8 md:my-10">
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
						<TableRow key={`row-${rowIndex}`}>
							{row.map((cell, cellIndex) => (
								<TableCell
									key={`${rowIndex}-${cellIndex}`}
									className="whitespace-normal text-foreground"
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

export const MdxTable = BlogMdxTable

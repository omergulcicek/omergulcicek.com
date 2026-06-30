"use client"

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from "@/components/ui/card"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

export const description = "A linear area chart"

export function ChartAreaLinear({
	title,
	description,
	data,
	config
}: {
	title: string
	description: string
	data: {
		year: string
		count: number
	}[]
	config: ChartConfig
}) {
	return (
		<Card className="mb-10">
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={config}>
					<AreaChart accessibilityLayer data={data}>
						<CartesianGrid vertical={true} horizontal={true} />
						<XAxis
							dataKey="year"
							tickLine={true}
							axisLine={true}
							tickMargin={8}
						/>
						<YAxis
							dataKey="count"
							tickLine={true}
							axisLine={true}
							tickCount={data?.length}
							tickMargin={8}
							width={40}
						/>
						<Area
							dataKey="count"
							type="step"
							fill="var(--chart-2)"
							fillOpacity={0.5}
							stroke="var(--chart-2)"
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>
		</Card>
	)
}

import type { ChartConfig } from "@/components/ui/chart"

export type BlogChartAreaLinearDataPoint = {
	year: string
	count: number
}

export type BlogChartAreaLinearProps = {
	title: string
	description: string
	data: BlogChartAreaLinearDataPoint[]
	config: ChartConfig
}

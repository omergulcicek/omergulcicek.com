import Marquee from "@/ui/marquee"
import { StackItem } from "@/ui/stack-item"
import { stackData } from "@/data/stack-data"

export function TechStack() {
	const firstRow = stackData.slice(0, stackData.length / 2)
	const secondRow = stackData.slice(stackData.length / 2)

	return (
		<div className="max-w-5xl mx-auto relative flex gap-4 py-20 w-full flex-col items-center justify-center overflow-hidden">
			<Marquee className="[--duration:40s]">
				{firstRow.map((stackData) => (
					<StackItem key={stackData.name} {...stackData} />
				))}
			</Marquee>

			<Marquee reverse className="[--duration:40s]">
				{secondRow.map((stackData) => (
					<StackItem key={stackData.name} {...stackData} />
				))}
			</Marquee>

			<div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
			<div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
		</div>
	)
}

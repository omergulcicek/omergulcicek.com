import Marquee from "@/ui/marquee"
import { StackItem } from "@/ui/stack-item"

export function TechStack() {
	const stackData = [
		{
			name: "HTML5",
			img: "https://omergulcicek.com/svg/skills/html5.svg"
		},
		{
			name: "CSS3",
			img: "https://omergulcicek.com/svg/skills/css3.svg"
		},
		{
			name: "SASS",
			img: "https://omergulcicek.com/svg/skills/sass.svg"
		},
		{
			name: "Styled Components",
			img: "https://omergulcicek.com/svg/skills/styledcomponents.svg"
		},
		{
			name: "CSS Modules",
			img: "https://omergulcicek.com/svg/skills/cssmodules.svg"
		},
		{
			name: "BEM",
			img: "https://omergulcicek.com/svg/skills/bem.svg"
		},
		{
			name: "Tailwind CSS",
			img: "https://omergulcicek.com/svg/skills/tailwindcss.svg"
		},
		{
			name: "JavaScript",
			img: "https://omergulcicek.com/svg/skills/javascript.svg"
		},
		{
			name: "React",
			img: "https://omergulcicek.com/svg/skills/react.svg"
		},
		{
			name: "Redux",
			img: "https://omergulcicek.com/svg/skills/redux.svg"
		},
		{
			name: "Next.js",
			img: "https://omergulcicek.com/svg/skills/nextjs.svg"
		},
		{
			name: "GraphQL",
			img: "https://omergulcicek.com/svg/skills/graphql.svg"
		}
	]

	const firstRow = stackData.slice(0, stackData.length / 2)
	const secondRow = stackData.slice(stackData.length / 2)

	return (
		<div className="relative flex py-20 w-full flex-col items-center justify-center overflow-hidden">
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

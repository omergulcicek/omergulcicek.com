import { About, Blog, Experience, Hero, Projects, Stack } from "@/widgets"

export default function Home() {
	return (
		<div className="py-56 gap-48 flex flex-col mx-auto max-w-2xl relative">
			<Hero />
			<About />
			<Stack />
			<Experience />
			<Blog />
			<Projects />
		</div>
	)
}

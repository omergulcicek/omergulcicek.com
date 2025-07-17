import { About, Blog, Experience, Hero, Projects } from "@/widgets"

export default function Home() {
	return (
		<div className="p-20 gap-48 flex flex-col mx-auto max-w-3xl">
			<Hero />
			<Experience />
			<About />
			<Blog />
			<Projects />
		</div>
	)
}

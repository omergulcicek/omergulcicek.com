import { About, Blog, Experience, Hero, Projects } from "@/widgets"

export default function Home() {
	return (
		<div className="px-20 py-40 gap-48 flex flex-col mx-auto max-w-3xl">
			<Hero />
			<About />
			<Blog />
			<Experience />
			<Projects />
		</div>
	)
}

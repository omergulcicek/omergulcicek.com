import {
	About,
	Blog,
	Container,
	Experience,
	Hero,
	Projects,
	Stack
} from "@/widgets"

export default function Home() {
	return (
		<Container>
			<Hero />
			<About />
			<Stack />
			<Experience />
			<Blog />
			<Projects />
		</Container>
	)
}

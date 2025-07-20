import {
	About,
	Blog,
	Container,
	Experience,
	Hero,
	Projects,
	Stack
} from "@/widgets"

import { getLastNewestPosts } from "@/data/blog"

export default function Home() {
	const posts = getLastNewestPosts()

	return (
		<Container>
			<Hero />
			<About />
			<Stack />
			<Experience />
			<Blog posts={posts} />
			<Projects />
		</Container>
	)
}

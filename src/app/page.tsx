import { Container } from "@/shared"
import { About, Blog, Experience, Hero, Projects, Stack } from "@/widgets"

import { getLastNewestPosts } from "@/data/blog-data"

export default function Home() {
	const posts = getLastNewestPosts()

	return (
		<Container>
			<Hero />
			<About />
			<Stack />
			<Blog posts={posts} />
			<Experience showAll={false} showButton />
			<Projects />
		</Container>
	)
}

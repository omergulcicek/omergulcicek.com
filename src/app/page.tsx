import { Container } from "@/shared"
import { About, Blog, Experience, Projects, Stack } from "@/widgets"

import { getLastNewestPosts } from "@/data/blog.data"

export default function Home() {
	const posts = getLastNewestPosts()

	return (
		<Container>
			<About />
			<Stack />
			<Blog posts={posts} />
			<Experience showAll={false} showButton />
			<Projects />
		</Container>
	)
}

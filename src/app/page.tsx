import { getLastNewestPosts } from "@/lib/blog-posts"

import { Container, Stack } from "@/shared"
import { About } from "@/features/about"
import { Blog } from "@/features/blog"
import { Experience } from "@/features/experience"
import { Hero } from "@/features/home"
import { Projects } from "@/features/projects"

export default function Home() {
	const posts = getLastNewestPosts()

	return (
		<Container>
			<Hero />
			<About />
			<Stack />
			<Blog posts={posts} />
			<Projects />
			<Experience showAll={false} showButton />
		</Container>
	)
}

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
		<div className="flex flex-col gap-16 md:gap-32">
			<div className="mx-auto w-full max-w-6xl relative px-4 pt-16 md:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 mt-10">
					<Hero />
					<About />
				</div>
			</div>
			<section className="max-w-6xl mx-auto">
				<Stack />
			</section>
			<Container>
				<Blog posts={posts} />
				<Projects />
				<Experience showAll={false} showButton />
			</Container>
		</div>
	)
}

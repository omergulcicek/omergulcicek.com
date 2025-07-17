import Link from "next/link"

import { Button } from "@/ui"

export function Blog() {
	const posts = [
		{
			title: "Nevşehir Tatili",
			link: "/nevsehir-tatili/",
			description: "2 Temmuz 2025"
		},
		{
			title: "2025 Yılında Frontend Developer Olmak",
			link: "/2025-yilinda-frontend-developer-olmak/",
			description: "19 Haziran 2025"
		},
		{
			title: "CSS attr() İçin Yeni Yetkinlikler",
			link: "/css-attr-icin-yeni-yetkinlikler/",
			description: "20 Ocak 2025"
		},
		{
			title: "Tailwind CSS v4.0",
			link: "/tailwind-css-v4/",
			description: "7 Şubat 2025"
		},
		{
			title: "İzmir, Marmaris, Ölüdeniz Tatili",
			link: "/izmir-marmaris-oludeniz-tatili/",
			description: "9 Ağustos 2021"
		}
	]

	return (
		<section className="flex flex-col gap-10">
			<h2 className="text-2xl font-medium">Blog</h2>

			<nav className="flex flex-col items-start gap-6">
				{posts.slice(0, 3).map((post, index) => (
					<Link
						href={post.link}
						key={post.title}
						className="flex items-center justify-start gap-4"
					>
						<span className="text-muted-foreground tabular-nums">
							0{index + 1}
						</span>
						<div>
							<h3 className="text-base font-medium">{post.title}</h3>
							<p className="text-sm text-muted-foreground">
								{post.description}
							</p>
						</div>
					</Link>
				))}
			</nav>

			<div className="flex justify-center">
				<Link href="/blog">
					<Button variant="outline">Show all posts</Button>
				</Link>
			</div>
		</section>
	)
}

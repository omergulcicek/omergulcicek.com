"use client"

import Link from "next/link"

import { Container } from "@/shared"
import { BookmarkCard, Section } from "@/widgets"

import { bookmarksData } from "@/data"

export default function Bookmarks() {
	return (
		<>
			<Container>
				<Section title="Yer İmleri">
					<p className="text-muted-foreground">
						Yer imlerimi{" "}
						<Link
							href="https://raindrop.io/omergulcicek"
							target="_blank"
							className="text-primary underline font-medium underline-offset-4"
						>
							raindrop.io
						</Link>
						'da saklıyorum; özellikle frontend kaynaklarımı, kitaplığımı,
						okuduğum makaleleri, günlük takip ettiğim blogları, teknik
						içerikleri ve kullandığım uygulama-eklentileri burada tutuyorum.
					</p>
				</Section>
			</Container>
			<Container className="max-w-5xl md:py-0">
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
					{bookmarksData.map((bookmark) => (
						<BookmarkCard key={bookmark.title} {...bookmark} />
					))}
				</div>
			</Container>
		</>
	)
}

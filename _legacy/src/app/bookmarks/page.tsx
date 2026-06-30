"use client"

import Link from "next/link"

import { motion } from "framer-motion"

import { useMotionEnvironment } from "@/lib/motion-environment"

import { Container, Section } from "@/shared"
import { BookmarkCard, bookmarksData } from "@/features/bookmarks"

export default function Bookmarks() {
	const { shouldUseSoftMotion } = useMotionEnvironment()

	return (
		<>
			<Container>
				<Section title="Yer İmleri" className="pt-10 md:pt-24">
					<p className="text-muted-foreground text-base leading-relaxed md:text-lg">
						Yer imlerimi{" "}
						<Link
							href="https://raindrop.io/omergulcicek"
							target="_blank"
							className="text-primary underline font-medium underline-offset-4"
						>
							raindrop.io
						</Link>
						'da saklıyorum; özellikle{" "}
						<span className="text-primary">frontend kaynaklarımı</span>,{" "}
						<span className="text-primary">kitaplığımı</span>, okuduğum{" "}
						<span className="text-primary">makaleleri</span>, günlük takip
						ettiğim <span className="text-primary">blogları</span>,{" "}
						<span className="text-primary">teknik içerikleri</span> ve
						kullandığım{" "}
						<span className="text-primary">uygulama-eklentileri</span> burada
						tutuyorum.
					</p>
				</Section>
			</Container>
			<Container className="max-w-5xl md:py-0 mt-10">
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
					{bookmarksData.map((bookmark, animationOrder) => (
						<motion.div
							key={bookmark.title}
							initial={
								shouldUseSoftMotion
									? { opacity: 1, y: 0 }
									: { opacity: 0, y: 32 }
							}
							animate={{ opacity: 1, y: 0 }}
							transition={
								shouldUseSoftMotion
									? { duration: 0 }
									: {
											duration: 0.48,
											delay: animationOrder * 0.05,
											ease: [0.22, 1, 0.36, 1]
										}
							}
						>
							<BookmarkCard {...bookmark} />
						</motion.div>
					))}
				</div>
			</Container>
		</>
	)
}

import Image from "next/image"
import Link from "next/link"

import { Container } from "@/shared"

export function Footer() {
	return (
		<header className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 min-h-56">
			<Container className="py-4">
				<div className="flex items-center justify-between">
					<Link href="/">
						<Image
							src="/omergulcicek.png"
							alt="Ömer Gülçiçek"
							width={32}
							height={32}
						/>
					</Link>

					<nav className="flex flex-col items-end gap-2 mt-4 text-sm font-medium">
						<Link href="/blog">Blog</Link>
						<Link href="/projects">Projeler</Link>
						<Link href="/about">Hakkımda</Link>
					</nav>
				</div>
			</Container>
		</header>
	)
}

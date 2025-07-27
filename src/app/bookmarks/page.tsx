import Link from "next/link"

import { Container } from "@/shared"
import { Section } from "@/widgets"

export default function Bookmarks() {
	return (
		<>
			<Container>
				<Section title="Yer İmleri">
					<p>
						Yer imlerimi{" "}
						<Link
							href="https://raindrop.io/omergulcicek"
							target="_blank"
							className="text-blue-600 underline font-medium underline-offset-4"
						>
							raindrop.io
						</Link>
						&apos;da saklıyorum. Kullandığım ekipmanlar, kod yazarken
						kullandığım eklentiler, okuduğum kitaplar ve beğendiğim siteleri
						burada saklıyorum.
					</p>
				</Section>
			</Container>
			<Container className="max-w-6xl md:py-0">
				<Section type="h2">
					<iframe
						style={{
							border: "0",
							width: "100%",
							height: "664px"
						}}
						allowFullScreen
						src="https://raindrop.io/omergulcicek/embed/me/no-header=true&theme=light"
					></iframe>
				</Section>
			</Container>
		</>
	)
}

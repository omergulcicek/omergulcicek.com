import Link from "next/link"

import { ArrowButton, Section } from "@/shared"

export function About() {
	return (
		<Section>
			<div className="flex flex-col gap-4 text-base leading-7 [&_p]:text-muted-foreground">
				<p>
					<strong className="font-medium text-foreground">React</strong> ve{" "}
					<strong className="font-medium text-foreground">Next.js</strong>{" "}
					ekosisteminde, yapay zekâ entegrasyonuyla optimize edilmiş{" "}
					<strong className="font-medium text-foreground">
						yüksek performanslı ürün mimarilerine
					</strong>{" "}
					liderlik ediyorum.
				</p>
				<p>
					<Link
						href="https://virastack.com"
						target="_blank"
						rel="noopener noreferrer"
						className="font-medium text-foreground font-medium underline underline-offset-4"
					>
						ViraStack
					</Link>{" "}
					çatısı altında,{" "}
					<strong className="font-medium text-foreground">
						karmaşık konfigürasyonları
					</strong>{" "}
					disiplinli ve ölçeklenebilir{" "}
					<strong className="font-medium text-foreground">
						açık kaynak standartlarını
					</strong>{" "}
					inşa ediyorum.
				</p>
				<p>
					<strong className="font-medium text-foreground">Fotoğraf</strong>,{" "}
					<strong className="font-medium text-foreground">satranç</strong> ve{" "}
					<strong className="font-medium text-foreground">tarih</strong>{" "}
					alanlarıyla yakından ilgiliyim.
				</p>

				<div className="flex justify-center">
					<Link href="/about">
						<ArrowButton text="Detaylı teknik bilgi" />
					</Link>
				</div>
			</div>
		</Section>
	)
}

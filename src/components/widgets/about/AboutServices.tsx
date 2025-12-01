import Link from "next/link"

import { Heading } from "@/ui"
import { Section } from "@/widgets"

export function AboutServices() {
	return (
		<Section title="Hizmetlerim" type="h2">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<article className="flex flex-col gap-4">
					<Heading as="h3">Freelance Geliştirme</Heading>
					<p>
						<span className="text-primary">React</span> ve{" "}
						<span className="text-primary">Next.js</span> ile modern, hızlı ve
						ölçeklenebilir web uygulamaları geliştiriyorum. Ürününüze teknik
						katkı sağlamak veya yeni bir proje başlatmak isterseniz iletişim
						bölümünden bana ulaşabilirsiniz.
					</p>
				</article>

				<article className="flex flex-col gap-4">
					<Heading as="h3">Özel Ders</Heading>
					<p>
						Frontend alanında birebir veya grup dersleri veriyorum.{" "}
						<Link
							href="https://kodluyoruz.org"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 text-primary underline font-medium underline-offset-4"
						>
							kodluyoruz.org
						</Link>{" "}
						'da geniş katılımlı eğitimler yönetme deneyimim var. Öğrenme
						hedeflerinize göre kişisel bir program oluşturmak için iletişim
						bölümünden yazabilirsiniz.
					</p>
				</article>
			</div>
		</Section>
	)
}

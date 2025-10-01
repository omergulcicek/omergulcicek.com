import Link from "next/link"

import { ArrowButton, Section } from "@/widgets"

export function About() {
	return (
		<Section title="Hakkımda" type="h2">
			<div className="flex flex-col gap-4 text-base leading-relaxed text-neutral-600">
				<p>
					Merhaba, ben <span className="text-black font-medium">Ömer</span>,{" "}
					<span className="text-black font-medium">Sakarya</span>&apos;da
					yaşayan bir{" "}
					<span className="text-black font-medium">yazılım mühendisi</span>yim.{" "}
					<br />
					<span className="text-black font-medium">
						Uygulama mimarisi
					</span>,{" "}
					<span className="text-black font-medium">
						performans optimizasyonu
					</span>
					, <span className="text-black font-medium">tasarım sistemleri</span>{" "}
					ve <span className="text-black font-medium">mikro frontend</span>{" "}
					yapıları üzerine çalışıyorum. Amacım, temiz ve ölçeklenebilir
					frontend&apos;ler inşa ederken{" "}
					<span className="text-black font-medium">UI/UX</span>,{" "}
					<span className="text-black font-medium">erişilebilirlik</span> ve{" "}
					<span className="text-black font-medium">Web Vitals</span> gibi kalite
					ölçütlerini önceliklendirmek.
				</p>
				<p>
					Kod yazmadığım zamanlarda{" "}
					<span className="text-black font-medium">fotoğrafçılık</span> ile
					ilgileniyor, <span className="text-black font-medium">satranç</span>,{" "}
					<span className="text-black font-medium">tarih</span> ve{" "}
					<span className="text-black font-medium">ekonomi</span> alanlarında
					kendimi geliştirmeye çalışıyorum. <br /> Bu siteyi deneyimlerimi
					paylaşmak, açık kaynak topluluğuna katkıda bulunmak ve benzer düşünen
					geliştiricilerle tanışmak için kurdum.
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

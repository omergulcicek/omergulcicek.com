import Link from "next/link"

import { ArrowButton, Section } from "@/widgets"

export function About() {
	return (
		<Section title="Hakkımda" type="h2">
			<div className="flex flex-col gap-4 text-base md:text-lg leading-relaxed">
				<p>
					Merhaba, ben <strong className="font-medium">Ömer</strong>,{" "}
					<strong className="font-medium">Sakarya</strong>&apos;da yaşayan bir{" "}
					<strong className="font-medium">yazılım mühendisi</strong>yim. <br />
					<strong className="font-medium">Uygulama mimarisi</strong>,{" "}
					<strong className="font-medium">performans optimizasyonu</strong>,{" "}
					<strong className="font-medium">tasarım sistemleri</strong> ve{" "}
					<strong className="font-medium">mikro frontend</strong> yapıları
					üzerine çalışıyorum. Amacım, temiz ve ölçeklenebilir frontend&apos;ler
					inşa ederken <strong className="font-medium">UI/UX</strong>,{" "}
					<strong className="font-medium">erişilebilirlik</strong> ve{" "}
					<strong className="font-medium">Web Vitals</strong> gibi kalite
					ölçütlerini önceliklendirmek.
				</p>
				<p>
					Kod yazmadığım zamanlarda{" "}
					<strong className="font-medium">fotoğrafçılık</strong> ile
					ilgileniyor, <strong className="font-medium">satranç</strong>,{" "}
					<strong className="font-medium">tarih</strong> ve{" "}
					<strong className="font-medium">ekonomi</strong> alanlarında kendimi
					geliştirmeye çalışıyorum. <br /> Bu siteyi deneyimlerimi paylaşmak,
					açık kaynak topluluğuna katkıda bulunmak ve benzer düşünen
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

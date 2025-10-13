import Link from "next/link"

import { Turkiye } from "@/components/icons"
import { ArrowButton, Section } from "@/widgets"

export function About() {
	return (
		<Section title="Hakkımda" type="h2">
			<div className="flex flex-col gap-4 text-base leading-7 [&_p]:text-neutral-500">
				<p>
					Merhaba, ben <span className="text-black">Ömer</span>,{" "}
					<span className="text-black inline-flex items-center gap-1.5 mr-1.5">
						Sakarya <Turkiye className="size-6" />
					</span>
					&apos;da yaşayan bir{" "}
					<span className="text-black">yazılım mühendisi</span>yim. <br />
					<span className="text-black">Uygulama mimarisi</span>,{" "}
					<span className="text-black">performans optimizasyonu</span>,{" "}
					<span className="text-black">tasarım sistemleri</span> ve{" "}
					<span className="text-black">mikro frontend</span> yapıları üzerine
					çalışıyorum. Amacım, temiz ve ölçeklenebilir frontend&apos;ler inşa
					ederken <span className="text-black">UI/UX</span>,{" "}
					<span className="text-black">erişilebilirlik</span> ve{" "}
					<span className="text-black">Web Vitals</span> gibi kalite ölçütlerini
					önceliklendirmek.
				</p>
				<p>
					Kod yazmadığım zamanlarda{" "}
					<span className="text-black">fotoğrafçılık</span> ile ilgileniyor,{" "}
					<span className="text-black">satranç</span>,{" "}
					<span className="text-black">tarih</span> ve{" "}
					<span className="text-black">ekonomi</span> alanlarında kendimi
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

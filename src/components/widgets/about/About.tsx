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
					<strong className="font-medium">mikro frontend</strong> yapıları gibi
					konulara odaklanıyorum. Projeler geliştirirken temiz, ölçeklenebilir
					frontend&apos;ler oluşturmayı hedefliyorum. Her zaman{" "}
					<strong className="font-medium">UI/UX</strong>,{" "}
					<strong className="font-medium">erişilebilirlik</strong> ve{" "}
					<strong className="font-medium">Web Vitals</strong> gibi kalite odaklı
					alanları önceliklendiriyorum.
				</p>
				<p>
					Kod yazmadığım zamanlarda fotoğrafçılıkla ilgileniyorum, satranç,
					tarih ve ekonomi konularında meraklıyım; bu alanlarda sürekli daha
					fazla öğrenmeye çalışıyorum. Bu siteyi deneyimlerimi paylaşmak, açık
					kaynak topluluğuna katkıda bulunmak ve benzer düşünen geliştiricilerle
					bağlantı kurmak için oluşturdum.
				</p>
				<div className="flex justify-center">
					<Link href="/about/#hakkimda">
						<ArrowButton text="Detaylı teknik bilgi" />
					</Link>
				</div>
			</div>
		</Section>
	)
}

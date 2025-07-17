import { Section } from "@/widgets"

export function About() {
	return (
		<Section title="Hakkımda">
			<div className="flex flex-col gap-4 text-lg leading-relaxed">
				<p>
					Merhaba, ben <strong className="font-semibold">Ömer</strong>,{" "}
					<strong className="font-semibold">Sakarya</strong>&apos;da yaşayan bir{" "}
					<strong className="font-semibold">yazılım mühendisi</strong>yim.{" "}
					<strong className="font-semibold">Uygulama mimarisi</strong>,{" "}
					<strong className="font-semibold">performans optimizasyonu</strong>,{" "}
					<strong className="font-semibold">tasarım sistemleri</strong> ve{" "}
					<strong className="font-semibold">mikro frontend</strong> yapıları
					gibi konulara odaklanıyorum. Projeler geliştirirken temiz,
					ölçeklenebilir frontend&apos;ler oluşturmayı hedefliyorum, her zaman{" "}
					<strong className="font-semibold">UI/UX</strong>,{" "}
					<strong className="font-semibold">erişilebilirlik</strong> ve{" "}
					<strong className="font-semibold">web vitals</strong> gibi kalite
					odaklı alanları önceliklendiriyorum.
				</p>
				<p>
					Kod yazmadığım zamanlarda fotoğrafçılıkla ilgileniyorum, satranç,
					tarih ve ekonomi konularında meraklıyım; bu alanlarda sürekli daha
					fazla öğrenmeye çalışıyorum. Bu siteyi deneyimlerimi paylaşmak, açık
					kaynak topluluğuna katkıda bulunmak ve benzer düşünen geliştiricilerle
					bağlantı kurmak için oluşturdum.
				</p>
			</div>
		</Section>
	)
}

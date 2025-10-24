import Link from "next/link"

import { ArrowButton, Section } from "@/widgets"

export function About() {
	return (
		<Section>
			<div className="flex flex-col gap-4 text-base leading-7 [&_p]:text-neutral-500">
				<p>
					Merhaba, ben <span className="text-black">Ömer</span>,{" "}
					<span className="text-black inline-flex items-center gap-1.5">
						Sakarya
					</span>
					&apos;da yaşayan bir{" "}
					<span className="text-black">yazılım mühendisi</span>yim.{" "}
				</p>
				<p>
					Modern web teknolojileriyle{" "}
					<span className="text-black">
						ölçeklenebilir, performanslı ve kullanıcı odaklı arayüzler
					</span>{" "}
					geliştiriyorum. <span className="text-black">Uygulama mimarisi</span>,{" "}
					<span className="text-black">performans optimizasyonu</span>,{" "}
					<span className="text-black">tasarım sistemleri</span> ve{" "}
					<span className="text-black">mikro frontend yapıları</span> üzerine
					odaklanıyorum. Amacım,{" "}
					<span className="text-black">temiz ve sürdürülebilir arayüzler</span>{" "}
					inşa ederken <span className="text-black">UI/UX</span>,{" "}
					<span className="text-black">erişilebilirlik</span> ve{" "}
					<span className="text-black">Web Vitals</span> gibi kalite ölçütlerini
					önceliklendirmek.
				</p>

				<p>
					Kod yazmadığım zamanlarda{" "}
					<span className="text-black">fotoğrafçılıkla</span> ilgileniyor,{" "}
					<span className="text-black">satranç</span>,{" "}
					<span className="text-black">tarih</span> ve{" "}
					<span className="text-black">ekonomi</span> alanlarında kendimi
					geliştiriyorum.
				</p>

				<p>
					Bu siteyi deneyimlerimi paylaşmak, açık kaynak dünyasına katkıda
					bulunmak ve benzer tutkuları paylaşan insanlarla buluşmak için kurdum.
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

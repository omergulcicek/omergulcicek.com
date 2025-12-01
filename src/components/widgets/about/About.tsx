import Link from "next/link"

import { ArrowButton, Section } from "@/widgets"

export function About() {
	return (
		<Section>
			<div className="flex flex-col gap-4 text-base leading-7 [&_p]:text-muted-foreground">
				<p>
					<span className="text-primary">Modern web teknolojileriyle</span>{" "}
					<span className="text-primary">
						ölçeklenebilir, performanslı ve kullanıcı odaklı arayüzler
					</span>{" "}
					geliştiriyorum. <span className="text-primary">React</span>,{" "}
					<span className="text-primary">Next.js</span> ve{" "}
					<span className="text-primary">TypeScript</span> ekosisteminde{" "}
					<span className="text-primary">
						AI destekli araçları çalışma süreçlerime entegre ederek
					</span>{" "}
					<span className="text-primary">mimari tasarım</span>,{" "}
					<span className="text-primary">tasarım sistemleri</span> ve{" "}
					<span className="text-primary">sürdürülebilir frontend yapıları</span>{" "}
					üzerine odaklanıyor; ekiplerin{" "}
					<span className="text-primary">teknik kararlarına</span> yön veren bir
					rol üstleniyorum.
				</p>
				<p>
					Çeşitli sektörlerde geliştirdiğim modern uygulamaları{" "}
					<span className="text-primary">UI/UX</span>,{" "}
					<span className="text-primary">erişilebilirlik</span> ve{" "}
					<span className="text-primary">Web Vitals</span> odaklı bir yaklaşımla
					inşa ediyorum. Kod dışında{" "}
					<span className="text-primary">fotoğraf</span>,{" "}
					<span className="text-primary">satranç</span> ve{" "}
					<span className="text-primary">tarih</span> alanlarıyla ilgileniyor;{" "}
					<span className="text-primary">açık kaynak projeler</span> ve{" "}
					<span className="text-primary">blog yazılarıyla</span> topluluğa katkı
					sağlıyorum.
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

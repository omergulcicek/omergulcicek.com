import Link from "next/link"

import Container from "@/shared/container"
import Title from "@/ui/title"

export default function About() {
	return (
		<Container className="mt-10 md:mt-24 max-w-3xl">
			<Title tag="h1">Hakkında</Title>

			<div className="flex flex-col gap-4 mt-4 font-medium text-black/80">
				<p className="text-xl leading-9 font-light">
					Merhaba 👋🏻, İstanbul'da yaşayan bir yazılım mühendisiyim. <br /> Şu
					anda{" "}
					<Link
						href="https://www.alisgidis.com/"
						rel="noopener noreferrer"
						target="_blank"
						className="text-slate-950 dark:text-white font-medium underline"
					>
						@Alışgidiş
					</Link>
					'te bir NextJS projesi üzerinde çalışıyorum. <br />{" "}
					<strong className="font-medium text-black">UI/UX,</strong>{" "}
					<strong className="font-medium text-black">Web Vitals</strong> ve{" "}
					<strong className="font-medium text-black">A11Y Project</strong>{" "}
					konularına ilgi duyuyorum.
				</p>

				<p className="text-xl leading-9 font-light">
					Projeler geliştirirken yaratıcılığın sınırlarını zorlamak ve yenilikçi
					çözümler üretmek bana büyük bir tatmin sağlıyor. Çalışmalarımda
					sadelik ve ölçeklenebilirliğe odaklanarak, küçük detaylarla güçlü
					duygusal bağlar kurmayı hedefliyorum. Uzun vadeli düşünme ve kullanıcı
					deneyimini derinlemesine anlamanın önemini vurguluyorum.
				</p>

				<p className="text-xl leading-9 font-light">
					<strong className="font-medium text-black">Turkuaz</strong> ve{" "}
					<strong className="font-medium text-black">Türkçe Doküman</strong>{" "}
					projeleri, açık kaynak çalışmalarımda öncelikli projelerim arasında
					yer alıyor ve tüm projelerimi açık kaynak olarak paylaşıyorum. Ayrıca,
					yazılım alanındaki bilgi birikimimi artırmak amacıyla düzenli olarak
					çeviriler yapıyor ve makaleler yazıyorum.
				</p>

				<p className="text-xl leading-9 font-light">
					Yazılım dışında beni en çok mutlu eden şeyler satranç oynamak ve yeni
					yerler keşfetmek. Tarih, siyaset ve ekonomi alanlarına ilgim var ve bu
					konularda sürekli olarak kendimi geliştirmeye çalışıyorum.
				</p>

				<p className="text-xl leading-9 font-light">
					Bu siteyi, öğrendiklerimi paylaşmak, yazılım topluluğuna katkıda
					bulunmak ve başkalarıyla bağlantı kurmak amacıyla oluşturuyorum.{" "}
					<br />{" "}
				</p>

				<p className="text-xl leading-9 font-light">
					Bana her zaman{" "}
					<Link
						href="mailto:iletisim@omergulcicek.com"
						rel="noopener noreferrer"
						target="_blank"
						className="text-slate-950 dark:text-white font-medium underline"
					>
						iletisim@omergulcicek.com
					</Link>{" "}
					adresinden ulaşabilirsin.
				</p>
			</div>
		</Container>
	)
}

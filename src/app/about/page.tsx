import Link from "next/link"

import Container from "@/shared/container"
import Title from "@/ui/title"

export default function About() {
	return (
		<Container className="mt-10 md:mt-24 max-w-2xl font-light">
			<Title tag="h1">Hakkında</Title>

			<p className="text-lg leading-8 text-neutral-500 my-2">
				Merhaba 👋🏻, İstanbul'da yaşayan bir yazılım mühendisiyim. <br /> Şu anda{" "}
				<Link
					href="https://www.alisgidis.com/"
					rel="noopener noreferrer"
					target="_blank"
					className="text-slate-950 dark:text-white font-medium underline"
				>
					@Alışgidiş
				</Link>
				'te bir NextJS projesi üzerinde çalışıyorum. <br />{" "}
				<span className="text-black font-medium">UI/UX,</span>{" "}
				<span className="text-black font-medium">Web Vitals</span> ve{" "}
				<span className="text-black font-medium">A11Y Project</span> konularına
				ilgi duyuyorum.
			</p>

			<p className="text-lg leading-8 text-neutral-500 my-2">
				Projeler geliştirirken yaratıcılığın sınırlarını zorlamak ve yenilikçi
				çözümler üretmek bana büyük bir tatmin sağlıyor. Çalışmalarımda sadelik
				ve ölçeklenebilirliğe odaklanarak, küçük detaylarla güçlü duygusal
				bağlar kurmayı hedefliyorum. Uzun vadeli düşünme ve kullanıcı deneyimini
				derinlemesine anlamanın önemini vurguluyorum.
			</p>

			<p className="text-lg leading-8 text-neutral-500 my-2">
				<span className="text-black font-medium">Turkuaz</span> ve{" "}
				<span className="text-black font-medium">Türkçe Doküman</span>{" "}
				projeleri, açık kaynak çalışmalarımda öncelikli projelerim arasında yer
				alıyor ve tüm projelerimi açık kaynak olarak paylaşıyorum. Ayrıca,
				yazılım alanındaki bilgi birikimimi artırmak amacıyla düzenli olarak
				çeviriler yapıyor ve makaleler yazıyorum.
			</p>

			<p className="text-lg leading-8 text-neutral-500 my-2">
				Yazılım dışında beni en çok mutlu eden şeyler satranç oynamak ve yeni
				yerler keşfetmek. Tarih, siyaset ve ekonomi alanlarına ilgim var ve bu
				konularda sürekli olarak kendimi geliştirmeye çalışıyorum.
			</p>

			<p className="text-lg leading-8 text-neutral-500 my-2">
				Bu siteyi, öğrendiklerimi paylaşmak, yazılım topluluğuna katkıda
				bulunmak ve başkalarıyla bağlantı kurmak amacıyla oluşturuyorum. <br />{" "}
			</p>

			<p className="text-lg leading-8 text-neutral-500 my-2">
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
		</Container>
	)
}

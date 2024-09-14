"use client"

import Link from "next/link"

import { motion } from "framer-motion"

import Container from "@/shared/container"
import Title from "@/ui/title"

export default function About() {
	return (
		<Container className="mt-10 md:mt-24 max-w-3xl">
			<motion.h1
				initial={{ opacity: 0, translateY: "100px" }}
				animate={{ opacity: 1, translateY: "0px" }}
				transition={{ delay: 0.05 }}
			>
				<Title tag="h1">Hakkında</Title>
			</motion.h1>

			<div className="flex flex-col gap-4 mt-4 font-medium text-black/80">
				<motion.p
					initial={{ opacity: 0, translateY: "100px" }}
					animate={{ opacity: 1, translateY: "0px" }}
					transition={{ delay: 0.15 }}
					className="text-xl leading-9 font-light"
				>
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
				</motion.p>
				<motion.p
					initial={{ opacity: 0, translateY: "100px" }}
					animate={{ opacity: 1, translateY: "0px" }}
					transition={{ delay: 0.25 }}
					className="text-xl leading-9 font-light"
				>
					Projeler geliştirirken yaratıcılığın sınırlarını zorlamak ve yenilikçi
					çözümler üretmek bana büyük bir tatmin sağlıyor. Çalışmalarımda
					sadelik ve ölçeklenebilirliğe odaklanarak, küçük detaylarla güçlü
					duygusal bağlar kurmayı hedefliyorum. Uzun vadeli düşünme ve kullanıcı
					deneyimini derinlemesine anlamanın önemini vurguluyorum.
				</motion.p>
				<motion.p
					initial={{ opacity: 0, translateY: "100px" }}
					animate={{ opacity: 1, translateY: "0px" }}
					transition={{ delay: 0.35 }}
					className="text-xl leading-9 font-light"
				>
					<strong className="font-medium text-black">Turkuaz</strong> ve{" "}
					<strong className="font-medium text-black">Türkçe Doküman</strong>{" "}
					projeleri, açık kaynak çalışmalarımda öncelikli projelerim arasında
					yer alıyor ve tüm projelerimi açık kaynak olarak paylaşıyorum. Ayrıca,
					yazılım alanındaki bilgi birikimimi artırmak amacıyla düzenli olarak
					çeviriler yapıyor ve makaleler yazıyorum.
				</motion.p>
				<motion.p
					initial={{ opacity: 0, translateY: "100px" }}
					animate={{ opacity: 1, translateY: "0px" }}
					transition={{ delay: 0.45 }}
					className="text-xl leading-9 font-light"
				>
					Yazılım dışında beni en çok mutlu eden şeyler satranç oynamak ve yeni
					yerler keşfetmek. Tarih, siyaset ve ekonomi alanlarına ilgim var ve bu
					konularda sürekli olarak kendimi geliştirmeye çalışıyorum.
				</motion.p>
				<motion.p
					initial={{ opacity: 0, translateY: "100px" }}
					animate={{ opacity: 1, translateY: "0px" }}
					transition={{ delay: 0.55 }}
					className="text-xl leading-9 font-light"
				>
					Bu siteyi, öğrendiklerimi paylaşmak, yazılım topluluğuna katkıda
					bulunmak ve başkalarıyla bağlantı kurmak amacıyla oluşturuyorum.
				</motion.p>
				<motion.p
					initial={{ opacity: 0, translateY: "100px" }}
					animate={{ opacity: 1, translateY: "0px" }}
					transition={{ delay: 0.65 }}
					className="text-xl leading-9 font-light"
				>
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
					<br />
				</motion.p>
			</div>
		</Container>
	)
}

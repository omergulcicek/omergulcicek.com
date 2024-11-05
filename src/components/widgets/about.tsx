"use client"

import Link from "next/link"

import { motion } from "framer-motion"

import Container from "@/shared/container"
import Title from "@/ui/title"

export function About() {
	return (
		<Container className="px-4 md:px-0 mt-10 md:mt-24 max-w-3xl">
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
					className="text-base md:text-xl leading-normal md:leading-9 font-light"
				>
					Merhaba 👋🏻, İstanbul'da yaşayan bir yazılım mühendisiyim. <br /> Şu
					anda{" "}
					<Link
						href="https://www.alisgidis.com/"
						rel="noopener noreferrer"
						target="_blank"
						className="text-slate-950 dark:text-white font-medium hover:underline"
					>
						@Alışgidiş
					</Link>
					'te bir Next.js projesi üzerinde çalışıyorum. <br />{" "}
					<strong className="font-medium text-black">UI/UX,</strong>{" "}
					<Link
						href="https://web.dev/articles/vitals?hl=tr"
						rel="noopener noreferrer"
						target="_blank"
						className="text-slate-950 dark:text-white font-medium hover:underline"
					>
						Web Vitals
					</Link>{" "}
					ve{" "}
					<Link
						href="https://www.a11yproject.com/"
						rel="noopener noreferrer"
						target="_blank"
						className="text-slate-950 dark:text-white font-medium hover:underline"
					>
						A11Y Project
					</Link>{" "}
					konularına ilgi duyuyorum.
				</motion.p>
				<motion.p
					initial={{ opacity: 0, translateY: "100px" }}
					animate={{ opacity: 1, translateY: "0px" }}
					transition={{ delay: 0.25 }}
					className="text-base md:text-xl leading-normal md:leading-9 font-light"
				>
					Projeler geliştirirken yaratıcılığımı zorlamak ve yenilikçi çözümler
					üretmek bana büyük bir tatmin sağlıyor. Çalışmalarımda sadelik ve
					ölçeklenebilirliğe odaklanıyor, aynı zamanda küçük detaylara büyük
					özen gösteriyorum.
				</motion.p>
				<motion.p
					initial={{ opacity: 0, translateY: "100px" }}
					animate={{ opacity: 1, translateY: "0px" }}
					transition={{ delay: 0.35 }}
					className="text-base md:text-xl leading-normal md:leading-9 font-light"
				>
					<Link
						href="https://turkuazcss.com/"
						rel="noopener noreferrer"
						target="_blank"
						className="text-slate-950 dark:text-white font-medium hover:underline"
					>
						Turkuaz
					</Link>{" "}
					ve{" "}
					<Link
						href="https://turkcedokuman.com/"
						rel="noopener noreferrer"
						target="_blank"
						className="text-slate-950 dark:text-white font-medium hover:underline"
					>
						Türkçe Doküman
					</Link>{" "}
					projeleri, çalışmalarımda öncelikli yer alıyor ve tüm projelerimi açık
					kaynak olarak paylaşıyorum. Ayrıca, yazılım alanındaki bilgi
					birikimimi artırmak için düzenli olarak çeviriler yapıyor ve makaleler
					yazıyorum.
				</motion.p>
				<motion.p
					initial={{ opacity: 0, translateY: "100px" }}
					animate={{ opacity: 1, translateY: "0px" }}
					transition={{ delay: 0.45 }}
					className="text-base md:text-xl leading-normal md:leading-9 font-light"
				>
					Kod yazmadığım zamanlarda yürüyüş yapmayı ve{" "}
					<Link
						href="https://www.instagram.com/omerilekesfet/"
						rel="noopener noreferrer"
						target="_blank"
						className="text-slate-950 dark:text-white font-medium hover:underline"
					>
						fotoğraf çekmeyi seviyorum
					</Link>
					. Hafta sonlarımı İstanbul'a ayırıyorum; gittiğim yerleri
					fotoğraflayıp, çeşitli bilgiler paylaşıyorum. Satranç, tarih, siyaset
					ve ekonomi alanlarına ilgim var ve bu konularda kendimi sürekli
					geliştirmeye çalışıyorum.
				</motion.p>
				<motion.p
					initial={{ opacity: 0, translateY: "100px" }}
					animate={{ opacity: 1, translateY: "0px" }}
					transition={{ delay: 0.55 }}
					className="text-base md:text-xl leading-normal md:leading-9 font-light"
				>
					Bu siteyi, öğrendiklerimi paylaşmak, yazılım topluluğuna katkıda
					bulunmak ve başkalarıyla bağlantı kurmak amacıyla oluşturuyorum.
				</motion.p>
				<motion.p
					initial={{ opacity: 0, translateY: "100px" }}
					animate={{ opacity: 1, translateY: "0px" }}
					transition={{ delay: 0.65 }}
					className="text-base md:text-xl leading-normal md:leading-9 font-light"
				>
					Bana her zaman{" "}
					<Link
						href="mailto:iletisim@omergulcicek.com"
						rel="noopener noreferrer"
						target="_blank"
						className="text-slate-950 dark:text-white font-medium hover:underline"
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

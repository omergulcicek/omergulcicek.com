"use client"

import Link from "next/link"

import { motion } from "framer-motion"

import { Container } from "@/shared/container"
import { HoverCardWithLogo } from "@/widgets/hover-card-with-logo"
import { Title } from "@/ui/title"

export function About() {
	return (
		<>
			<Container className="mt-10 md:mt-24 max-w-3xl">
				<motion.h1
					initial={{ opacity: 0, translateY: "100px" }}
					animate={{ opacity: 1, translateY: "0px" }}
					transition={{ delay: 0.05 }}
				>
					<Title tag="h1" className="md:mb-4">
						Hakkında
					</Title>
				</motion.h1>

				<div className="flex flex-col gap-4 mt-4 font-medium">
					<motion.div
						initial={{ opacity: 0, translateY: "100px" }}
						animate={{ opacity: 1, translateY: "0px" }}
						transition={{ delay: 0.15 }}
						className="text-base md:text-xl leading-normal md:leading-9 font-light"
					>
						Merhaba 👋🏻, İstanbul'da yaşayan bir yazılım mühendisiyim.
					</motion.div>

					<motion.div
						initial={{ opacity: 0, translateY: "100px" }}
						animate={{ opacity: 1, translateY: "0px" }}
						transition={{ delay: 0.15 }}
						className="text-base md:text-xl leading-normal md:leading-9 font-light"
					>
						Şu anda{" "}
						<HoverCardWithLogo
							title="Fibabanka"
							content="Fibabanka"
							fallback="FB"
							img="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/16/cc/05/16cc0561-12cd-8b1e-b6d9-3afc00de7ead/AppIcon-0-0-1x_U007emarketing-0-8-0-sRGB-85-220.png/460x0w.webp"
							desc="Hızlı ve Kolay Bankacılık"
							link="www.fibabanka.com.tr?utm_source=omergulcicek.com"
						/>{" "}
						<HoverCardWithLogo
							title="Alışgidiş"
							content="Alışgidiş"
							fallback="AG"
							img="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/3e/55/15/3e55155f-76b6-bce2-8ee7-9bf4734ae3de/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/460x0w.webp"
							desc="Dünyanın parmakla gezilen ilk alışveriş merkezi"
							link="www.alisgidis.com?utm_source=omergulcicek.com"
							className="w-full"
						/>{" "}
						projesinde Sr Frontend Dev olarak çalışıyorum. <br />{" "}
						<strong className="font-medium">UI/UX,</strong>{" "}
						<strong className="font-medium">Web Vitals</strong> ve{" "}
						<strong className="font-medium">A11Y Project</strong> konularına
						ilgi duyuyorum.
					</motion.div>
					<motion.div
						initial={{ opacity: 0, translateY: "100px" }}
						animate={{ opacity: 1, translateY: "0px" }}
						transition={{ delay: 0.25 }}
						className="text-base md:text-xl leading-normal md:leading-9 font-light"
					>
						Projeler geliştirirken yaratıcılığımı zorlamak ve yenilikçi çözümler
						üretmek bana büyük bir tatmin sağlıyor. Çalışmalarımda sadelik ve
						ölçeklenebilirliğe odaklanıyor, aynı zamanda küçük detaylara büyük
						özen gösteriyorum.
					</motion.div>
					<motion.div
						initial={{ opacity: 0, translateY: "100px" }}
						animate={{ opacity: 1, translateY: "0px" }}
						transition={{ delay: 0.35 }}
						className="text-base md:text-xl leading-normal md:leading-9 font-light"
					>
						<HoverCardWithLogo
							title="Turkuaz"
							content="Turkuaz"
							fallback="TR"
							img="https://turkuazcss.com/favicon.png"
							desc="Hızlı ve kolay web sayfaları geliştirin"
							link="www.turkuazcss.com"
						/>{" "}
						ve{" "}
						<HoverCardWithLogo
							title="Türkçe Doküman"
							content="Türkçe Doküman"
							fallback="TD"
							img="https://turkcedokuman.com/favicon.svg"
							desc="Yazılım alanında sıfırdan eğitim veren Türkçe dokümanlar"
							link="www.turkcedokuman.com"
						/>{" "}
						projeleri, çalışmalarımda öncelikli yer alıyor ve tüm projelerimi
						açık kaynak olarak paylaşıyorum. Ayrıca, yazılım alanındaki bilgi
						birikimimi artırmak için düzenli olarak çeviriler yapıyor ve
						makaleler yazıyorum.
					</motion.div>
					<motion.div
						initial={{ opacity: 0, translateY: "100px" }}
						animate={{ opacity: 1, translateY: "0px" }}
						transition={{ delay: 0.45 }}
						className="text-base md:text-xl leading-normal md:leading-9 font-light"
					>
						Kod yazmadığım zamanlarda yürüyüş yapmayı ve{" "}
						<HoverCardWithLogo
							title="@omerilekesfet"
							content="fotoğraf çekmeyi seviyorum"
							fallback="IG"
							img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
							desc="Hafta içi mühendis, hafta sonu gezgin 🌀"
							link="www.instagram.com/omerilekesfet"
							className="w-full"
						/>
						. Hafta sonlarımı İstanbul'a ayırıyorum; gittiğim yerleri
						fotoğraflayıp, çeşitli bilgiler paylaşıyorum. Satranç, tarih,
						siyaset ve ekonomi alanlarına ilgim var ve bu konularda kendimi
						sürekli geliştirmeye çalışıyorum.
					</motion.div>
					<motion.div
						initial={{ opacity: 0, translateY: "100px" }}
						animate={{ opacity: 1, translateY: "0px" }}
						transition={{ delay: 0.55 }}
						className="text-base md:text-xl leading-normal md:leading-9 font-light"
					>
						Bu siteyi, öğrendiklerimi paylaşmak, yazılım topluluğuna katkıda
						bulunmak ve başkalarıyla bağlantı kurmak amacıyla oluşturuyorum.
					</motion.div>
					<motion.div
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
					</motion.div>
				</div>
			</Container>

			<Container className="mt-10 md:mt-24 max-w-3xl">
				<motion.h1
					initial={{ opacity: 0, translateY: "100px" }}
					animate={{ opacity: 1, translateY: "0px" }}
					transition={{ delay: 0.85 }}
				>
					<Title tag="h2" className="md:mb-4">
						Fırsatlar
					</Title>

					<motion.div
						initial={{ opacity: 0, translateY: "100px" }}
						animate={{ opacity: 1, translateY: "0px" }}
						transition={{ delay: 0.95 }}
						className="text-base md:text-xl leading-normal md:leading-9 font-light"
					>
						Freelance iş, birebir yada grupça özel ders talepleriniz için
						iletişime geçebilirsiniz. Detaylar için{" "}
						<Link
							href="/opportunities"
							className="text-slate-950 dark:text-white font-medium hover:underline"
						>
							fırsatlar
						</Link>{" "}
						sayfasını inceleyin.
						<br />
					</motion.div>
				</motion.h1>
			</Container>
		</>
	)
}

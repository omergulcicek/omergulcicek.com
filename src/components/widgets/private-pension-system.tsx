"use client"

import { Tweet } from "react-tweet"
import Link from "next/link"

import { motion } from "framer-motion"

import Container from "@/shared/container"

export function PrivatePensionSystemContent() {
	return (
		<>
			<Container className="px-4 md:px-0 mt-10 md:mt-12 max-w-3xl">
				<motion.section
					initial={{ opacity: 0, translateY: "100px" }}
					animate={{ opacity: 1, translateY: "0px" }}
					transition={{ delay: 0.05 }}
				>
					<div className="flex flex-col gap-4 font-medium text-black/80">
						<p className="text-base md:text-xl leading-normal md:leading-9 font-light">
							Kasım 2024 tarihi itibariyle kendime ve eşime{" "}
							<Link
								href="https://www.anadoluhayat.com.tr/bireysel-emeklilik"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500"
							>
								Anadolu Hayat Emeklilik
							</Link>
							ten BES hesabı açtım. Kendim için <em>Geleceğe Yatırım Planı</em>,
							eşim için ise <em>Ev Hanımları Emeklilik Planı</em> aldım. Kendi
							portföyümü riski yüksek hisse senedi fonu ağırlıklı tercih
							ederken, nişanlımda altın odaklı bir portföy tercih ettim.
						</p>

						<p className="text-base md:text-xl leading-normal md:leading-9 font-light">
							Yatırımlarımı düzenli yapmaya çalışıyor ve bunları paylaşmaya önem
							veriyorum.{" "}
							<Link
								href="https://twitter.com/omergulcicek"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500"
							>
								X (Twitter) hesabımdan takip edebilirsiniz
							</Link>{" "}
							.
						</p>

						<p className="text-base md:text-xl leading-normal md:leading-9 font-light">
							Güncel portföylerimiz şu şekilde:
						</p>
					</div>

					<Tweet id={"1853858555750723879"} />
				</motion.section>
			</Container>
		</>
	)
}

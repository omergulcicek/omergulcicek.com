"use client"

import { Tweet } from "react-tweet"
import Link from "next/link"

import { motion } from "framer-motion"

import { Container } from "@/shared/container"
import { Title } from "@/ui/title"

export function Bootcamp() {
	return (
		<>
			<Container className="mt-10 md:mt-24 max-w-3xl">
				<motion.h2
					initial={{ opacity: 0, translateY: "100px" }}
					animate={{ opacity: 1, translateY: "0px" }}
					transition={{ delay: 0.2 }}
				>
					<Title tag="h2" className="md:mb-4">
						Bootcamp
					</Title>
				</motion.h2>

				<div className="flex flex-col gap-4 font-medium">
					<motion.div
						initial={{ opacity: 0, translateY: "100px" }}
						animate={{ opacity: 1, translateY: "0px" }}
						transition={{ delay: 0.25 }}
						className="text-base md:text-xl leading-normal md:leading-9 font-light"
					>
						<Link
							href="https://www.kodluyoruz.org/"
							target="_blank"
							rel="noopener noreferrer"
							title="Kodluyoruz.org"
							className="text-slate-950 dark:text-white font-medium hover:underline"
						>
							Kodluyoruz
						</Link>{" "}
						bünyesinde yaklaşık 30 öğrenciye sıfırdan başlayarak HTML, CSS,
						JavaScript, React ve Git konularında kapsamlı bir Frontend eğitimi
						verdim. Bu süreçte temel becerilerden ileri seviye teknolojilere
						kadar rehberlik ettim. Tecrübelerimi aktarmayı seviyorum ve bu tarz
						fırsatlara her zaman açığım.
					</motion.div>

					<motion.div
						initial={{ opacity: 0, translateY: "100px" }}
						animate={{ opacity: 1, translateY: "0px" }}
						transition={{ delay: 0.25 }}
					>
						<Tweet id={"1339491895312068609"} />
					</motion.div>
				</div>
			</Container>
		</>
	)
}

"use client"

import { motion } from "framer-motion"

import { Container } from "@/shared/container"
import { Title } from "@/ui/title"

export function PrivateLesson() {
	return (
		<>
			<Container className="mt-10 md:mt-24 max-w-3xl">
				<motion.h2
					initial={{ opacity: 0, translateY: "100px" }}
					animate={{ opacity: 1, translateY: "0px" }}
					transition={{ delay: 0.55 }}
				>
					<Title tag="h2" className="md:mb-4">
						Özel Ders
					</Title>
				</motion.h2>

				<div className="flex flex-col gap-4 font-medium">
					<motion.div
						initial={{ opacity: 0, translateY: "100px" }}
						animate={{ opacity: 1, translateY: "0px" }}
						transition={{ delay: 0.6 }}
						className="text-base md:text-xl leading-normal md:leading-9 font-light"
					>
						Birebir ya da grup eğitimleri veriyorum. Sıfırdan başlayan birçok
						kişiyi sektörde çalışabilecek seviyeye getirdim. Frontend
						becerilerinizi geliştirmek için bireysel veya grup dersleriyle
						destek alabilirsiniz.
					</motion.div>
				</div>
			</Container>
		</>
	)
}

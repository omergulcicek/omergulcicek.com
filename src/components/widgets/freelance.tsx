"use client"

import { motion } from "framer-motion"

import { Container } from "@/shared/container"
import { Title } from "@/ui/title"

export function Freelance() {
	return (
		<>
			<Container className="mt-10 md:mt-24 max-w-3xl">
				<motion.h2
					initial={{ opacity: 0, translateY: "100px" }}
					animate={{ opacity: 1, translateY: "0px" }}
					transition={{ delay: 0.45 }}
				>
					<Title tag="h2" className="md:mb-4">
						Freelance
					</Title>
				</motion.h2>

				<div className="flex flex-col gap-4 font-medium">
					<motion.div
						initial={{ opacity: 0, translateY: "100px" }}
						animate={{ opacity: 1, translateY: "0px" }}
						transition={{ delay: 0.5 }}
						className="text-base md:text-xl leading-normal md:leading-9 font-light"
					>
						React, Next.js ve CSS konularında uzmanım. Bu teknolojilerle yeni
						projelerde çalışarak değer katmaya hazırım. Eğer bu alanlarda
						kaliteli bir çözüm arıyorsanız, birlikte çalışabiliriz.
					</motion.div>
				</div>
			</Container>
		</>
	)
}

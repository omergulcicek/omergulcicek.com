"use client"

import Link from "next/link"

import { motion } from "framer-motion"

import { Container } from "@/shared/container"
import { Title } from "@/ui/title"

export function Roadmap() {
	return (
		<>
			<Container className="flex flex-col gap-6 mt-10 md:mt-24 max-w-3xl">
				<motion.h2
					initial={{ opacity: 0, translateY: "100px" }}
					animate={{ opacity: 1, translateY: "0px" }}
					transition={{ delay: 0.3 }}
				>
					<Title tag="h2">Frontend Yol Haritası</Title>
				</motion.h2>

				<motion.div
					initial={{ opacity: 0, translateY: "100px" }}
					animate={{ opacity: 1, translateY: "0px" }}
					transition={{ delay: 0.35 }}
					className="text-base md:text-xl leading-normal md:leading-9 font-light"
				>
					Frontend developer olmak isteyenler için kendi deneyimlerimle
					oluşturduğum bir yol haritası hazırladım. Bu yol haritasında hangi
					teknolojilere odaklanmanız gerektiğini ve öğrenme sürecinizi nasıl
					planlayabileceğinizi bulabilirsiniz.
				</motion.div>

				<motion.div
					initial={{ opacity: 0, translateY: "100px" }}
					animate={{ opacity: 1, translateY: "0px" }}
					transition={{ delay: 0.4 }}
					className="text-base md:text-xl leading-normal md:leading-9 font-light"
				>
					Detaylar için{" "}
					<Link
						href="https://roadmap.sh/r/embed?id=65ed002373b4b18a31f6f307"
						target="_blank"
						rel="noopener noreferrer"
						title="Frontend Yol Haritası"
						className="text-slate-950 dark:text-white font-medium hover:underline"
					>
						frontend yol haritası
					</Link>{" "}
					sayfasını ziyaret edin.
				</motion.div>
			</Container>
		</>
	)
}

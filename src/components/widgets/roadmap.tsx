"use client"

import Link from "next/link"

import { motion } from "framer-motion"

import { Container } from "@/shared/container"
import { Title } from "@/ui/title"

export function Roadmap() {
	return (
		<>
			<Container className="flex flex-col gap-6 px-4 md:px-0 mt-10 md:mt-24 max-w-3xl">
				<motion.h1
					initial={{ opacity: 0, translateY: "100px" }}
					animate={{ opacity: 1, translateY: "0px" }}
					transition={{ delay: 0.05 }}
				>
					<Title tag="h1">Yol Haritası</Title>
				</motion.h1>

				<motion.h2
					initial={{ opacity: 0, translateY: "100px" }}
					animate={{ opacity: 1, translateY: "0px" }}
					transition={{ delay: 0.15 }}
				>
					<Title tag="h2">Frontend yol haritası</Title>
				</motion.h2>
			</Container>

			<motion.section
				initial={{ opacity: 0, filter: "blur(64px)" }}
				animate={{ opacity: 1, filter: "blur(0)" }}
				transition={{ delay: 0.15, duration: 0.5 }}
			>
				<div className="mt-10 md:mt-24">
					<iframe
						src="https://roadmap.sh/r/embed?id=65ed002373b4b18a31f6f307"
						width="100%"
						height="1000px"
					></iframe>
				</div>
			</motion.section>
		</>
	)
}

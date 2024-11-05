"use client"

import Link from "next/link"

import { motion } from "framer-motion"

import Container from "@/shared/container"

export function FinancialFreedomCart() {
	return (
		<>
			<Container className="px-4 md:px-0 mt-10 md:mt-12 max-w-3xl">
				<section className="grid grid-cols-3 gap-2">
					<motion.article
						initial={{ opacity: 0, translateY: "100px" }}
						animate={{ opacity: 1, translateY: "0px" }}
						transition={{ delay: 0.05 }}
					>
						<Link href="/financial-freedom/stock">
							<div className="bg-red-500/10 text-red-600 p-6 rounded-lg cursor-pointer duration-200 hover:-translate-y-1 active:scale-95">
								<strong>Hisse</strong>
							</div>
						</Link>
					</motion.article>

					<motion.article
						initial={{ opacity: 0, translateY: "100px" }}
						animate={{ opacity: 1, translateY: "0px" }}
						transition={{ delay: 0.1 }}
					>
						<Link href="/financial-freedom/investment-fund">
							<div className="bg-blue-500/10 text-blue-600 p-6 rounded-lg cursor-pointer duration-200 hover:-translate-y-1 active:scale-95">
								<strong>Fon, ETF</strong>
							</div>
						</Link>
					</motion.article>

					<motion.article
						initial={{ opacity: 0, translateY: "100px" }}
						animate={{ opacity: 1, translateY: "0px" }}
						transition={{ delay: 0.15 }}
					>
						<Link href="/financial-freedom/private-pension-system">
							<div className="bg-teal-500/10 text-teal-600 p-6 rounded-lg cursor-pointer duration-200 hover:-translate-y-1 active:scale-95">
								<strong>Bireysel Emeklilik</strong>
							</div>
						</Link>
					</motion.article>
				</section>
			</Container>
		</>
	)
}

"use client"

import Link from "next/link"

import { motion } from "framer-motion"

import { Container } from "@/shared/container"
import ShineBorder from "@/ui/shine-border"

export function FinancialFreedomCart() {
	return (
		<>
			<Container className="px-4 md:px-0 mt-10 md:mt-20 max-w-3xl">
				<section className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
					<motion.article
						initial={{ opacity: 0, translateY: "100px" }}
						animate={{ opacity: 1, translateY: "0px" }}
						transition={{ delay: 0.05 }}
					>
						<Link href="/financial-freedom/stock">
							<ShineBorder
								className="relative flex h-10 sm:h-20 w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-rose-50 md:shadow-xl min-w-10"
								color={["#ffe4e6", "#e11d48", "#881337"]}
							>
								<span className="pointer-events-none whitespace-pre-wrap text-center text-base sm:text-lg text-red-600 font-semibold leading-none dark:from-white dark:to-slate-900/10">
									Hisse Senedi
								</span>
							</ShineBorder>
						</Link>
					</motion.article>

					<motion.article
						initial={{ opacity: 0, translateY: "100px" }}
						animate={{ opacity: 1, translateY: "0px" }}
						transition={{ delay: 0.1 }}
					>
						<Link href="/financial-freedom/investment-fund">
							<ShineBorder
								className="relative flex h-10 sm:h-20 w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-blue-50 md:shadow-xl min-w-10"
								color={["#dbeafe", "#2563eb", "#1e40af"]}
							>
								<span className="pointer-events-none whitespace-pre-wrap text-center text-base sm:text-lg text-blue-700 font-semibold leading-none dark:from-white dark:to-slate-900/10">
									Fon ve ETF
								</span>
							</ShineBorder>
						</Link>
					</motion.article>

					<motion.article
						initial={{ opacity: 0, translateY: "100px" }}
						animate={{ opacity: 1, translateY: "0px" }}
						transition={{ delay: 0.15 }}
					>
						<Link href="/financial-freedom/private-pension-system">
							<ShineBorder
								className="relative flex h-10 sm:h-20 w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-teal-50 md:shadow-xl min-w-10"
								color={["#ccfbf1", "#0d9488", "#115e59"]}
							>
								<span className="pointer-events-none whitespace-pre-wrap  text-center text-base sm:text-lg text-teal-700 font-semibold leading-none dark:from-white dark:to-slate-900/10">
									Bireysel Emeklilik
								</span>
							</ShineBorder>
						</Link>
					</motion.article>
				</section>
			</Container>
		</>
	)
}

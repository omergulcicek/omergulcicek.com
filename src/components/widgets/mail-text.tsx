"use client"

import Link from "next/link"

import { motion } from "framer-motion"

import { Container } from "@/shared/container"

export function MailText() {
	return (
		<>
			<Container className="mt-10 md:mt-24 max-w-3xl">
				<div className="flex flex-col gap-4 mt-4 font-medium">
					<motion.div
						initial={{ opacity: 0, translateY: "100px" }}
						animate={{ opacity: 1, translateY: "0px" }}
						transition={{ delay: 0.15 }}
						className="text-base md:text-xl leading-normal md:leading-9 font-light"
					>
						<p>
							Herhangi bir sorunuz, iş birliği veya eğitim talebiniz için
							benimle iletişime geçebilirsiniz. 📩 E-posta:{" "}
							<Link
								href="mailto:iletisim@omergulcicek.com"
								rel="noopener noreferrer"
								target="_blank"
								className="text-slate-950 dark:text-white font-medium hover:underline"
							>
								iletisim@omergulcicek.com
							</Link>
						</p>
					</motion.div>
				</div>
			</Container>
		</>
	)
}

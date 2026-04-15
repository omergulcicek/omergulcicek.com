"use client"

import Link from "next/link"

import { motion } from "framer-motion"
import { useMediaQuery } from "usehooks-ts"

import { useMotionEnvironment } from "@/lib/motion-environment"

import { ArrowButton, Section } from "@/shared"

const easeOut = [0.22, 1, 0.36, 1] as const

export function About() {
	const { shouldUseSoftMotion, supportsViewTransitions } =
		useMotionEnvironment()
	const isLg = useMediaQuery("(min-width: 1024px)")

	return (
		<section className="min-h-0 justify-start">
			<motion.div
				data-vt-enabled={supportsViewTransitions}
				initial={{
					opacity: 0,
					x: shouldUseSoftMotion ? 0 : isLg ? 22 : 0,
					y: shouldUseSoftMotion ? 0 : isLg ? 0 : 10
				}}
				whileInView={{ opacity: 1, x: 0, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={
					shouldUseSoftMotion
						? { duration: 0.2, ease: easeOut }
						: { duration: 0.3, ease: easeOut, delay: 0.05 }
				}
				className="flex flex-col gap-6 md:gap-10 leading-7 [&_p]:text-muted-foreground [&_p]:text-base [&_p]:leading-relaxed [&_p]:md:text-lg motion-gpu vt-about-block"
			>
				<p>
					<span className="text-primary">React</span> ve{" "}
					<span className="text-primary">Next.js</span> ekosisteminde, yapay
					zekâ entegrasyonuyla optimize edilmiş{" "}
					<span className="text-primary">
						yüksek performanslı ürün mimarilerine
					</span>{" "}
					liderlik ediyorum.
				</p>
				<p>
					<Link
						href="https://virastack.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-primary underline underline-offset-4"
					>
						ViraStack
					</Link>{" "}
					çatısı altında,{" "}
					<span className="text-primary">karmaşık konfigürasyonları</span>{" "}
					disiplinli ve ölçeklenebilir{" "}
					<span className="text-primary">açık kaynak standartlarını</span> inşa
					ediyorum.
				</p>
				<p>
					<span className="text-primary">Fotoğraf</span>,{" "}
					<span className="text-primary">satranç</span> ve{" "}
					<span className="text-primary">tarih</span> alanlarıyla yakından
					ilgiliyim.
				</p>

				<div className="flex justify-end">
					<Link href="/about">
						<ArrowButton text="Detaylı teknik bilgi" />
					</Link>
				</div>
			</motion.div>
		</section>
	)
}

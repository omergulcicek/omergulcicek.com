"use client"

import { Tweet } from "react-tweet"

import { motion } from "framer-motion"

import Container from "@/shared/container"

export function Stock() {
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
							Yatırım yaparken ilk kural, iyi bir sepet oluşturmaktır. Sepetimi
							fonlarla çeşitlendirdiğim için, az sayıda hisseye yatırım yaparak
							hisse yükselişlerinden doğrudan yararlanabiliyorum. Böylece
							riskimi azaltırken daha fazla getiri elde etmeyi planlıyorum.
						</p>
						<p className="text-base md:text-xl leading-normal md:leading-9 font-light">
							Borsa İstanbul:
							<ul className="flex flex-col gap-1 list-disc pl-8 mt-1">
								<StockCartItem logo="aselsan--big.svg" name="Aselsan" />
								<StockCartItem logo="enka-insaat--big.svg" name="Enka İnşaat" />
								<StockCartItem
									logo="turk-hava-yollari--big.svg"
									name="Türk Hava Yolları"
								/>
								<StockCartItem logo="tupras--big.svg" name="Tüpraş" />
							</ul>
						</p>

						<p className="text-base md:text-xl leading-normal md:leading-9 font-light">
							Amerikan borsaları:
							<ul className="flex flex-col gap-1 list-disc pl-8 mt-1">
								<StockCartItem logo="nvidia--big.svg" name="Nvidia" />
								<StockCartItem logo="apple--big.svg" name="Apple" />
								<StockCartItem logo="walmart--big.svg" name="Walmart" />
							</ul>
						</p>

						<p className="text-base md:text-xl leading-normal md:leading-9 font-light">
							Kripto:
							<ul className="flex flex-col gap-1 list-disc pl-8 mt-1">
								<StockCartItem logo="crypto/XTVCBTC--big.svg" name="Bitcoin" />
								<StockCartItem logo="crypto/XTVCETH--big.svg" name="Ethereum" />
							</ul>
						</p>

						<p className="text-base md:text-xl leading-normal md:leading-9 font-light">
							Güncel portföyüm şu şekilde:
						</p>
					</div>

					<Tweet id={"1866052525599920302"} />
				</motion.section>
			</Container>
		</>
	)
}

export const StockCartItem = ({
	logo,
	name
}: {
	logo: string
	name: string
}) => {
	return (
		<>
			<li className="inline-flex items-center gap-4">
				<figure className="rounded-lg overflow-hidden">
					<img
						src={`https://s3-symbol-logo.tradingview.com/${logo}`}
						alt={name}
						height={40}
						width={40}
					/>
				</figure>
				<span className="text-base">{name}</span>
			</li>
		</>
	)
}

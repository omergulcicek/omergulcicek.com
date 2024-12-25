"use client"

import { Tweet } from "react-tweet"

import { motion } from "framer-motion"

import { Container } from "@/shared/container"

export function InvestmentFund() {
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
							Her kategoride yatırım yapmaya çalışıyorum. Çeşitli alanlarda
							takip ettiğim fonlar aşağıdaki gibidir.
						</p>
						<p className="text-base md:text-xl leading-normal md:leading-9 font-light">
							Hisse Senedi Fonu:
						</p>
						<ul className="flex flex-col gap-1 list-disc pl-8">
							<StockCartItem
								logo="is-bankasi--big.svg"
								name="BIO: Sürdürülebilirlik Hisse Senedi Fonu"
							/>
							<StockCartItem
								logo="is-bankasi--big.svg"
								name="TAU: Banka Endeksi Hisse Senedi Fonu"
							/>
						</ul>

						<p className="text-base md:text-xl leading-normal md:leading-9 font-light">
							Yabancı Hisse Senedi Fonu:
						</p>
						<ul className="flex flex-col gap-1 list-disc pl-8">
							<StockCartItem
								logo="is-bankasi--big.svg"
								name="TMG: Yabancı Hisse Senedi Fonu"
							/>
							<StockCartItem
								logo="https://storage.fintables.com/media/uploads/fund-management-logos/akportfoy_icon.png"
								name="AFT: Yeni Teknolojiler Yabancı Hisse Senedi Fonu"
							/>
						</ul>

						<p className="text-base md:text-xl leading-normal md:leading-9 font-light">
							Değişken Fonlar:
						</p>
						<ul className="flex flex-col gap-1 list-disc pl-8">
							<StockCartItem
								logo="https://storage.fintables.com/media/uploads/fund-management-logos/istanbul_portfoy.png"
								name="IPB: Birinci Değişken Fon"
							/>
							<StockCartItem
								logo="https://storage.fintables.com/media/uploads/fund-management-logos/strateji_portfoy_icon.png"
								name="AN1: Birinci Değişken Fon"
							/>
							<StockCartItem
								logo="https://storage.fintables.com/media/uploads/fund-management-logos/istanbul_portfoy.png"
								name="IVY: Blockchain Teknolojileri Değişken Fon"
							/>
						</ul>

						<p className="text-base md:text-xl leading-normal md:leading-9 font-light">
							Serbest Fonlar:
						</p>
						<ul className="flex flex-col gap-1 list-disc pl-8">
							<StockCartItem
								logo="is-bankasi--big.svg"
								name="IOG: Gümüş Serbest Fon"
							/>
						</ul>

						<p className="text-base md:text-xl leading-normal md:leading-9 font-light">
							ETF:
						</p>
						<ul className="flex flex-col gap-1 list-disc pl-8">
							<StockCartItem
								logo="spdr-sandp500-etf-tr--big.svg"
								name="SPYG: S&P 500 Growth ETF"
							/>
						</ul>

						<p className="text-base md:text-xl leading-normal md:leading-9 font-light">
							Güncel portföyüm şu şekilde:
						</p>
					</div>

					<Tweet id={"1871619568839663938"} />
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
						src={
							logo.includes("https")
								? logo
								: `https://s3-symbol-logo.tradingview.com/${logo}`
						}
						alt={name}
						height={40}
						width={40}
					/>
				</figure>
				<span className="text-base font-light">{name}</span>
			</li>
		</>
	)
}

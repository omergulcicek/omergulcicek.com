import Container from "@/shared/container"
import { InvestmentFund } from "@/widgets/investment-fund"
import Title from "@/ui/title"

export default function InvestmentFundPage() {
	return (
		<>
			<Container className="mt-10 md:mt-24 max-w-2xl">
				<Title tag="h1">Fon</Title>
				<Title tag="h2">Yatırım fon portföyüm ve ETF</Title>

				<InvestmentFund />
			</Container>
		</>
	)
}

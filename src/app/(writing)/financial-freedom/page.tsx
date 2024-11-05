import Container from "@/shared/container"
import { FinancialFreedomCart } from "@/widgets/financal-freedom"
import Title from "@/ui/title"

export default function FinancialFreedom() {
	return (
		<>
			<Container className="mt-10 md:mt-24 max-w-2xl">
				<Title tag="h1">Finansal Özgürlük</Title>
				<Title tag="h2">Hisse, fon, altın ve BES yatırım portföyüm</Title>
			</Container>

			<FinancialFreedomCart />
		</>
	)
}

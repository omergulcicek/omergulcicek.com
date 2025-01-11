import { Container } from "@/shared/container"
import { FinancialFreedomCart } from "@/widgets/financal-freedom"
import { Title } from "@/ui/title"

export default function FinancialFreedom() {
	return (
		<>
			<Container className="mt-10 md:mt-24 max-w-2xl">
				<Title tag="h1" className="md:mb-4">
					Finansal Özgürlük
				</Title>
				<p className="text-2xl text-neutral-500">
					Hisse, fon, altın, kripto ve BES yatırım portföyüm
				</p>
			</Container>

			<FinancialFreedomCart />
		</>
	)
}

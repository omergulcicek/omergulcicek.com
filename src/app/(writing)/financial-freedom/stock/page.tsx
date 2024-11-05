import Container from "@/shared/container"
import { Stock } from "@/widgets/stock"
import Title from "@/ui/title"

export default function StockPage() {
	return (
		<>
			<Container className="mt-10 md:mt-24 max-w-2xl">
				<Title tag="h1">Hisse</Title>
				<Title tag="h2">Yerli yabancı hisse senetleri, altın ve kripto</Title>

				<Stock />
			</Container>
		</>
	)
}

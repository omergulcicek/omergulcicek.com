import Container from "@/shared/container"
import { PrivatePensionSystemContent } from "@/widgets/private-pension-system"
import Title from "@/ui/title"

export default function PrivatePensionSystem() {
	return (
		<>
			<Container className="mt-10 md:mt-24 max-w-2xl">
				<Title tag="h1">Bireysel Emeklilik Sistemi (BES)</Title>
				<Title tag="h2">Bireysel emeklilik sistemi fon dağılımları</Title>

				<PrivatePensionSystemContent />
			</Container>
		</>
	)
}

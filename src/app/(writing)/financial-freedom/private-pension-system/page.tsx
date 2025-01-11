import { Container } from "@/shared/container"
import { PrivatePensionSystemContent } from "@/widgets/private-pension-system"
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator
} from "@/ui/breadcrumb"
import { Title } from "@/ui/title"

export default function PrivatePensionSystem() {
	return (
		<>
			<Container className="mt-10 md:mt-24 max-w-2xl">
				<Breadcrumb className="mb-8">
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink href="/">Ana Sayfa</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbLink href="/financial-freedom">
								Finansal Özgürlük
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbPage>Bireysel Emeklilik Sistemi</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>

				<Title tag="h1" className="md:mb-4">
					Bireysel Emeklilik Sistemi (BES)
				</Title>
				<p className="text-2xl text-neutral-500">
					Bireysel emeklilik sistemi fon dağılımları
				</p>

				<PrivatePensionSystemContent />
			</Container>
		</>
	)
}

import { Container } from "@/shared/container"
import { Stock } from "@/widgets/stock"
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator
} from "@/ui/breadcrumb"
import { Title } from "@/ui/title"

export default function StockPage() {
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
							<BreadcrumbPage>Hisse Senedi</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>

				<Title tag="h1" className="md:mb-4">
					Hisse Senedi
				</Title>
				<p className="text-2xl text-neutral-500">
					Yerli yabancı hisse senetleri, altın ve kripto
				</p>

				<Stock />
			</Container>
		</>
	)
}

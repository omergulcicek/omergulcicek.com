import { Container } from "@/shared/container"
import { InvestmentFund } from "@/widgets/investment-fund"
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator
} from "@/ui/breadcrumb"
import { Title } from "@/ui/title"

export default function InvestmentFundPage() {
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
							<BreadcrumbPage>Fon ve ETF</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>

				<Title tag="h1">Fon ve ETF</Title>
				<Title tag="h2">Yatırım fon portföyüm ve ETF</Title>

				<InvestmentFund />
			</Container>
		</>
	)
}

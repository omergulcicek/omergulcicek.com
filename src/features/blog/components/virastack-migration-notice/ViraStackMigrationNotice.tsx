import { AlertTriangle } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/ui"

type ViraStackMigrationNoticePropsType = {
	locale: "en" | "tr"
}

const virastackSiteUrlByLocale = {
	en: "https://www.virastack.com/en/",
	tr: "https://www.virastack.com/tr/"
} as const

const copy = {
	en: {
		title: "Organization update",
		bodyBefore: "The package discussed in this article has moved under the ",
		bodyAfter:
			" organization. Up-to-date repository links and setup instructions will be published in a new article soon and linked from this page. Older GitHub or npm links in the post may no longer work."
	},
	tr: {
		title: "Organizasyon güncellemesi",
		bodyBefore: "Bu makalede yer alan paket ",
		bodyAfter:
			" organizasyonuna taşınmıştır. Güncel depo bağlantıları ve kurulum yönergeleri yakında yeni bir makalede yayımlanacak ve bu sayfadan linklenecektir. Metin içindeki eski GitHub veya npm bağlantıları artık çalışmayabilir."
	}
} as const

export function ViraStackMigrationNotice({
	locale
}: ViraStackMigrationNoticePropsType) {
	const t = copy[locale]
	const virastackUrl = virastackSiteUrlByLocale[locale]

	return (
		<Alert variant="destructive" className="mb-6 bg-red-50 text-left">
			<AlertTriangle />
			<AlertTitle>{t.title}</AlertTitle>
			<AlertDescription>
				<p className="m-0 text-left">
					{t.bodyBefore}
					<a
						href={virastackUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="inline font-medium underline underline-offset-2 hover:opacity-90"
					>
						ViraStack
					</a>
					{t.bodyAfter}
				</p>
			</AlertDescription>
		</Alert>
	)
}

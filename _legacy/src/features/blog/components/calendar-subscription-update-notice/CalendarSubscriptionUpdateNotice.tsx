import { AlertTriangle } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/ui"

const projectUrl = "https://takvim-abonelik.vercel.app/"

export function CalendarSubscriptionUpdateNotice() {
	return (
		<Alert variant="destructive" className="mb-6 bg-red-50 text-left">
			<AlertTriangle />
			<AlertTitle>Proje güncellendi</AlertTitle>
			<AlertDescription>
				<p className="m-0 text-left">
					Bu makalede tanıtılan Takvim Abonelik projesi güncellenmiş ve
					geliştirilmiştir. Güncel takvim listesini, abonelik bağlantılarını ve
					yeni arayüzü{" "}
					<a
						href={projectUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="inline font-medium underline underline-offset-2 hover:opacity-90"
					>
						Takvim Abonelik
					</a>{" "}
					sitesinden inceleyebilirsiniz. Metin içindeki eski bağlantılar artık çalışmayabilir.
				</p>
			</AlertDescription>
		</Alert>
	)
}

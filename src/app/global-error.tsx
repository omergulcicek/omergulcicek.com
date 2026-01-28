"use client"

import { useEffect } from "react"

export default function GlobalError({
	error,
	reset
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		console.error("Global error:", error)
	}, [error])

	return (
		<html lang="tr">
			<body>
				<div className="flex min-h-screen flex-col items-center justify-center p-4">
					<div className="max-w-md text-center">
						<h1 className="mb-4 text-2xl font-bold">Kritik bir hata oluştu</h1>
						<p className="mb-4 text-muted-foreground">
							{error.message || "Uygulama yüklenirken bir hata meydana geldi."}
						</p>
						<button
							onClick={reset}
							className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
						>
							Sayfayı yenile
						</button>
					</div>
				</div>
			</body>
		</html>
	)
}


"use client"

import { useEffect } from "react"

import { Container } from "@/shared"
import { Button } from "@/ui"

export default function Error({
	error,
	reset
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		console.error("Page error:", error)
	}, [error])

	return (
		<Container>
			<div className="flex min-h-screen flex-col items-center justify-center">
				<div className="max-w-md text-center">
					<h1 className="mb-4 text-2xl font-bold">Bir hata oluştu</h1>
					<p className="mb-4 text-muted-foreground">
						{error.message || "Beklenmeyen bir hata meydana geldi."}
					</p>
					<Button onClick={reset}>Tekrar dene</Button>
				</div>
			</div>
		</Container>
	)
}


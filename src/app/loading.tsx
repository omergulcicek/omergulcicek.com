import { Container } from "@/shared"

export default function Loading() {
	return (
		<Container>
			<div className="flex min-h-screen items-center justify-center">
				<div className="flex flex-col items-center gap-4">
					<div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
					<p className="text-sm text-muted-foreground">Yükleniyor...</p>
				</div>
			</div>
		</Container>
	)
}


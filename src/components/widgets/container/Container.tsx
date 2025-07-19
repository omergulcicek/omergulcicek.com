export function Container({ children }: { children: React.ReactNode }) {
	return (
		<div className="py-56 gap-48 flex flex-col mx-auto max-w-2xl relative">
			{children}
		</div>
	)
}

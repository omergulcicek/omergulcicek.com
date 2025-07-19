export function Container({ children }: { children: React.ReactNode }) {
	return (
		<div className="py-24 gap-32 flex flex-col mx-auto max-w-2xl relative">
			{children}
		</div>
	)
}

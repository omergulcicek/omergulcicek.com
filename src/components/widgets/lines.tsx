export const BodyLines = () => {
	return (
		<>
			<div className="absolute top-0 left-0 w-3 md:w-10 min-h-full bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 lg:block dark:[--pattern-fg:var(--color-white)]/10 border-r"></div>
			<div className="absolute top-0 right-0 w-3 md:w-10 min-h-full bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 lg:block dark:[--pattern-fg:var(--color-white)]/10 border-l"></div>
		</>
	)
}

export const ArticleLines = () => {
	return (
		<>
			<div className="hidden md:inline-flex absolute -bottom-4 h-px w-[200vw] -left-[100vw] bg-gray-950/5 dark:bg-white/10"></div>
			<div className="hidden md:inline-flex absolute -left-12 top-0 min-h-full w-px bg-gray-950/5 dark:bg-white/10"></div>
			<div className="hidden md:inline-flex absolute -left-2 top-0 min-h-full w-px bg-gray-950/5 dark:bg-white/10"></div>
		</>
	)
}

export const ArticleHeaderLines = () => {
	return (
		<>
			<div className="hidden md:inline-flex absolute top-0 md:top-8 h-px w-[200vw] -left-[100vw] bg-gray-950/5 dark:bg-white/10"></div>
			<div className="hidden md:inline-flex absolute bottom-12 h-px w-[200vw] -left-[100vw] bg-gray-950/5 dark:bg-white/10"></div>
		</>
	)
}

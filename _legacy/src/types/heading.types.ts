export type HeadingTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
export type HeadingProps<T extends HeadingTypes> = React.ComponentProps<T> & {
	as?: T
}

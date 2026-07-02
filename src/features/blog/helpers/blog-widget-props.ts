export function serializeBlogWidgetProps<T>(props: T) {
	return JSON.stringify(props)
}

export function parseBlogWidgetProps<T>(value: string | undefined): T | null {
	if (!value) {
		return null
	}

	try {
		return JSON.parse(value) as T
	} catch {
		return null
	}
}

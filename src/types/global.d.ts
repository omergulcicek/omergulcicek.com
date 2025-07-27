declare global {
	interface Window {
		gtag: (
			command: "event",
			eventName: string,
			parameters: {
				value?: number
				event_label?: string
				non_interaction?: boolean
				[key: string]: unknown
			}
		) => void
	}
}

export {}

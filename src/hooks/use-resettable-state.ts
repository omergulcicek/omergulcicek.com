import { useState } from "react"

/**
 * Local state that returns to `initialValue` whenever `resetKey` changes, without an effect.
 * The stored key is compared during render, so the reset happens in the same render pass.
 */
export function useResettableState<T>(
	initialValue: T,
	resetKey: string
): [T, (next: T | ((previous: T) => T)) => void] {
	const [state, setState] = useState({ key: resetKey, value: initialValue })
	const value = state.key === resetKey ? state.value : initialValue

	const setValue = (next: T | ((previous: T) => T)) => {
		setState({
			key: resetKey,
			value: next instanceof Function ? next(value) : next
		})
	}

	return [value, setValue]
}

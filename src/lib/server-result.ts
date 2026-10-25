/** Server function payload: either data or a safe, user-facing error message — never a raw error. */
export type ServerResult<T> = { data: T; error: null } | { data: null; error: string }

/**
 * Runs server work and converts failures into a safe message.
 * The original error is logged on the server only, so database details never reach the client.
 */
export async function toServerResult<T>(
	work: () => Promise<T>,
	safeMessage: string
): Promise<ServerResult<T>> {
	try {
		return { data: await work(), error: null }
	} catch (error) {
		console.error(safeMessage, error)
		return { data: null, error: safeMessage }
	}
}

/** Unwraps a server result on the caller side; a failure becomes a thrown Error with the safe message. */
export function unwrapServerResult<T>(result: ServerResult<T>): T {
	if (result.error !== null) {
		throw new Error(result.error)
	}

	return result.data
}

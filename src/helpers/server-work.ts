/**
 * Runs server work and rethrows failures with a safe, user-facing message.
 * Thrown messages are serialized to the client, so the original error (database
 * details, stack) is logged on the server only and is not attached as `cause`.
 */
export async function runServerWork<T>(
	work: () => Promise<T>,
	safeMessage: string
): Promise<T> {
	try {
		return await work()
	} catch (error) {
		console.error(safeMessage, error)
		throw new Error(safeMessage)
	}
}

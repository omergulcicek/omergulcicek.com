import type { z } from "zod"

export type ApiErrorKind = "http" | "network" | "timeout" | "schema"

type ApiErrorOptions = { kind: ApiErrorKind; status?: number; cause?: unknown }

/** Every failure of an API call except an abort, with a `kind` the UI can branch on. */
export class ApiError extends Error {
	readonly kind: ApiErrorKind
	readonly status: number | undefined

	constructor(message: string, { kind, status, cause }: ApiErrorOptions) {
		super(message, { cause })
		this.name = "ApiError"
		this.kind = kind
		this.status = status
	}
}

type ApiGetOptions<Schema extends z.ZodType> = {
	/** Parses the response body, so no unchecked data leaves `api/`. */
	schema: Schema
	params?: Record<string, string | number | boolean | undefined>
	signal?: AbortSignal
	timeoutMs?: number
}

const DEFAULT_TIMEOUT_MS = 10_000

/**
 * Request headers. Credentials for the site's own API go here, only for relative
 * URLs: they must never reach absolute (third-party) URLs. None are needed today.
 */
function getHeaders(): HeadersInit {
	return { Accept: "application/json" }
}

function buildUrl(path: string, params: ApiGetOptions<z.ZodType>["params"]) {
	const url = new URL(path, globalThis.location?.origin)

	for (const [key, value] of Object.entries(params ?? {})) {
		if (value !== undefined) {
			url.searchParams.set(key, String(value))
		}
	}

	return url
}

async function get<Schema extends z.ZodType>(
	path: string,
	{
		schema,
		params,
		signal,
		timeoutMs = DEFAULT_TIMEOUT_MS
	}: ApiGetOptions<Schema>
): Promise<z.output<Schema>> {
	const url = buildUrl(path, params)
	const timeoutSignal = AbortSignal.timeout(timeoutMs)
	let response: Response

	try {
		response = await fetch(url, {
			headers: getHeaders(),
			signal: signal ? AbortSignal.any([signal, timeoutSignal]) : timeoutSignal
		})
	} catch (error) {
		if (timeoutSignal.aborted) {
			throw new ApiError(`Request to ${url.host} timed out`, {
				kind: "timeout",
				cause: error
			})
		}

		if (error instanceof DOMException && error.name === "AbortError") {
			throw error
		}

		throw new ApiError(`Could not reach ${url.host}`, {
			kind: "network",
			cause: error
		})
	}

	if (!response.ok) {
		throw new ApiError(`${url.host} answered ${response.status}`, {
			kind: "http",
			status: response.status
		})
	}

	try {
		return schema.parse(await response.json())
	} catch (error) {
		throw new ApiError(`Unexpected response from ${url.host}`, {
			kind: "schema",
			cause: error
		})
	}
}

export const api = { get }

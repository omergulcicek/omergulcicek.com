import {
	createStartHandler,
	defaultRenderHandler
} from "@tanstack/react-start/server"
import type { Register } from "@tanstack/react-router"
import type { RequestHandler } from "@tanstack/react-start/server"

const fetch = createStartHandler(defaultRenderHandler)

export type ServerEntry = { fetch: RequestHandler<Register> }

export function createServerEntry(entry: ServerEntry): ServerEntry {
	return {
		async fetch(...args) {
			return await entry.fetch(...args)
		}
	}
}

export default createServerEntry({ fetch })

import { NextResponse } from "next/server"

export function middleware(request: Request) {
	const requestHeaders = new Headers(request.headers)
	requestHeaders.set("x-server-url", request.url)

	return NextResponse.next({
		request: {
			headers: requestHeaders
		}
	})
}

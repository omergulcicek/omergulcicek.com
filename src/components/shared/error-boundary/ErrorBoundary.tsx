"use client"

import React from "react"

interface ErrorBoundaryProps {
	children: React.ReactNode
	fallback?: React.ComponentType<{ error: Error; reset: () => void }>
}

interface ErrorBoundaryState {
	hasError: boolean
	error: Error | null
}

export class ErrorBoundary extends React.Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props)
		this.state = { hasError: false, error: null }
	}

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return { hasError: true, error }
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.error("ErrorBoundary caught an error:", error, errorInfo)
	}

	reset = () => {
		this.setState({ hasError: false, error: null })
	}

	render() {
		if (this.state.hasError && this.state.error) {
			if (this.props.fallback) {
				const Fallback = this.props.fallback
				return <Fallback error={this.state.error} reset={this.reset} />
			}

			return (
				<div className="flex min-h-screen flex-col items-center justify-center p-4">
					<div className="max-w-md text-center">
						<h1 className="mb-4 text-2xl font-bold">Bir hata oluştu</h1>
						<p className="mb-4 text-muted-foreground">
							{this.state.error.message || "Beklenmeyen bir hata meydana geldi."}
						</p>
						<button
							onClick={this.reset}
							className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
						>
							Tekrar dene
						</button>
					</div>
				</div>
			)
		}

		return this.props.children
	}
}


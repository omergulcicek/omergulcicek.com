/** @type {import('@lhci/cli').Config} */
module.exports = {
	ci: {
		collect: {
			numberOfRuns: 1,
			startServerCommand: "pnpm preview --host 127.0.0.1 --port 4173",
			startServerReadyPattern: "4173",
			url: [
				"http://127.0.0.1:4173/",
				"http://127.0.0.1:4173/blog",
				"http://127.0.0.1:4173/blog/virastack-ai",
				"http://127.0.0.1:4173/about",
				"http://127.0.0.1:4173/projects",
				"http://127.0.0.1:4173/experiences",
				"http://127.0.0.1:4173/services",
				"http://127.0.0.1:4173/bookmarks"
			]
		},
		assert: {
			assertions: {
				"categories:performance": ["warn", { minScore: 0.9 }],
				"categories:accessibility": ["error", { minScore: 0.95 }],
				"categories:best-practices": ["warn", { minScore: 0.95 }],
				"categories:seo": ["error", { minScore: 0.95 }],
				"largest-contentful-paint": ["warn", { maxNumericValue: 2500 }],
				"cumulative-layout-shift": ["warn", { maxNumericValue: 0.1 }],
				"total-blocking-time": ["warn", { maxNumericValue: 200 }]
			}
		},
		upload: {
			target: "filesystem",
			outputDir: "./lighthouse-reports"
		}
	}
}

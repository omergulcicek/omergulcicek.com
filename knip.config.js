/** @type {import('knip').KnipConfig} */
const config = {
  entry: ["src/routes/**/*.{ts,tsx}"],
  project: ["src/**/*.{ts,tsx,js,jsx}"],
  ignore: [
    "src/components/ui/**",
    // Used by features from `virastack add`.
    "src/test/render.tsx"
  ],
  // Features from `virastack add` use these.
  ignoreDependencies: [
    "tailwindcss",
    "tw-animate-css",
    // Loaded by tailwind.css (`@plugin`, `@import`), which knip does not read.
    "@tailwindcss/typography",
    "@fontsource-variable/geist-mono",
    "@hookform/resolvers",
    "zustand",
    "@testing-library/user-event"
  ],
  rules: {
    dependencies: "error",
    exports: "warn",
    types: "warn",
    files: "warn"
  }
}

module.exports = config

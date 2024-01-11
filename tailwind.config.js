/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        background: {
          light: "#fff",
          dark: "#0a0a0a",
        },
        text: {
          light: "#1c1a26",
          dark: "#f1eff9",
        },
      },
    },
    container: {
      center: true,
      padding: "24px",
      screens: {
        sm: "640px",
        md: "728px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}

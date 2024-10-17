/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}", "./src/styles/utils.css"],
  theme: {
    extend: {
      // Font size
      fontSize: {},
      // Font families
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
        figtree: ["Figtree"]
      },
      // Colors
      colors: {
        background: {
          primary: "var(--color-background-primary)"
        }
      },
      // Breakpoints for media queries
      screens: {
        xs: "481px",
        sm: "576.9px",
        md: "768.9px",
        lg: "992.9px",
        xl: "1200.9px",
        "2xl": "1900px"
      }
    },
    plugins: []
  }
}

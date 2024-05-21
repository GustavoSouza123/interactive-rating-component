/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange": "var(--orange)",
        "white": "var(--white)",
        "light-grey": "var(--light-grey)",
        "dark-blue-0": "var(--dark-blue-0)",
        "dark-blue-1": "var(--dark-blue-1)",
        "dark-blue-2": "var(--dark-blue-2)",
        "dark-blue-3": "var(--dark-blue-3)",
      },
      animation: {
        error: 'error 1s linear'
      },
      keyframes: {
        error: {
          '0%': { borderColor: 'transparent' },
          '50%': { borderColor: 'var(--orange)' },
          '100%': { borderColor: 'transparent' }
        }
      },
    },
  },
  plugins: [],
}

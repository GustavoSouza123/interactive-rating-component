/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        primary: "var(--orange)",
        white: "var(--white)",
        lightGrey: "var(--light-grey)",
        darkBlue: "var(--dark-blue)",
        veryDarkBlue: "var(--very-dark-blue)",
      },

    },
  },
  plugins: [],
}

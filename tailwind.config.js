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
        darkBlue1: "var(--dark-blue-1)",
        darkBlue2: "var(--dark-blue-2)",
        darkBlue3: "var(--dark-blue-3)",
      },

    },
  },
  plugins: [],
}

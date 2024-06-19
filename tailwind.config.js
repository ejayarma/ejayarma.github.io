import defaultTheme from 'tailwindcss/defaultTheme';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: "#5BC0BE",
        darkest: "#1C2541",
        dark: "#3A506B",
        mid: "#7E99BB",
        light: "#C7D6E8",
        lightest: "#FFFFFF"
      },
    },
  },
  plugins: [],
}


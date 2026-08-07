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
        sans: ['Inter', 'Montserrat', ...defaultTheme.fontFamily.sans],
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        brand: "#5BC0BE",
        brandBright: "#7DE0DE",
        darkest: "#0B1220",
        dark: "#131D31",
        mid: "#22304D",
        light: "#8FA3C2",
        lightest: "#E8EEF6",
      },
      boxShadow: {
        glow: '0 0 24px rgba(91, 192, 190, 0.25)',
      },
    },
  },
  plugins: [],
}

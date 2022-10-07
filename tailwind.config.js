/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cookie-dark': '#15b981',
        'cookie-medium-dark': '#34d49a',
        'cookie-medium': '#6fe6b7',
        'cookie-medium-light': '#a8f4d0',
        'cookie-light': '#ecfdf5',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'us-dark': '#676b69',
        'us-light': '#edefee',
        'us-accent': '#f0940b',
        'us-mint': '#cbe8d9',
        'us-text': '#7c7478',
        'us-gray': '#d3d3d4',
        'us-silver': '#abacab',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

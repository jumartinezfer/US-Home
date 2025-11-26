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
        'us-text': '#7c7478',
        'us-gray': '#d3d3d4',
        'us-silver': '#abacab',
        'us-mint': '#caecdb',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

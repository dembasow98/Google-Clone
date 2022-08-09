/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // just in time compilation
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

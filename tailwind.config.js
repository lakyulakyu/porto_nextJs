/** @type {import('tailwindcss').Config} */
module.exports = {

purge:['./pages/**/*.js','./components/**/*.js','./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],

darkMode :false,
content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {},
  },
  plugins: [],
}

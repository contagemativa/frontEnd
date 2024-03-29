/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App/View/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
}


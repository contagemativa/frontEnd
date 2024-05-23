/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App/View/**/*.{html,js}",
    "./App/Components/*.{js,jsx}",
    "./App/Components/**/*.{js,jsx}",
    "./App/Components/**/**/*.{js,jsx}"
  ], 
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui")],
  daisyui: {
    themes: [{
      ligth: {
        "primary": "#B8398C",
        "secondary": "#CC74AE",
        "accent": "#37cdbe",
        "neutral": "#3d4451",
        "base-100": "#ffffff"
      }
    }]
  },
}


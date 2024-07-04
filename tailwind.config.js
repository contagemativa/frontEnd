/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./App/View/**/*.{html,js,jsx}",
    "./App/Components/*.{js,jsx}",
    "./App/Components/**/*.{js,jsx}",
    "./App/Components/**/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B8398C",
        primaryHover: "#9f5184",
        secondary: "#CC74AE",
        secondaryHover: "#b3428d",
        accent: "#37cdbe",
        accentHover: "#54b4aa",
        yellowCta: "#e8cc2c",
        yellowCtaHover: "#cfbc50",
        neutral: "#3d4451",
        base100: "#ffffff",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require('tailwindcss-animated')
  ],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#B8398C",
          "primary-focus": "#9f5184",
          "secondary": "#CC74AE",
          "secondary-focus": "#b3428d",
          "accent": "#37cdbe",
          "accent-focus": "#54b4aa",
          "yellowCta": "#e8cc2c",
          "yellowCta-focus": "#cfbc50",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};

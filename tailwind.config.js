/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "url(/assets/asset-background.jpg)",
        // Definición del gradiente con la imagen a la derecha
        "gradient-with-image": "url(/assets/asset-background.jpg)",
      },
      backgroundColor:{
        "principal": "#273244",
        "boton-out-projects": "#3871ff",
        "second":"#3871ff"
      }
    },
  },
  plugins: [],
});
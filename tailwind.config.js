/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./pages/*.html"],
  theme: {
    extend: {
      colors: {
        heroBg: "#DCEAF5",
        button: "rgba(245, 138, 7, 1)",
        paragrph: "rgba(91, 91, 91, 1)",
      },
      backgroundImage: {
        "bx-menu": "url('/images/home_images/bx-menu.svg')",
        ctaBg: "url('/images/home_images/CTA-bg.svg')",
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
    screens: {
      vs: "400px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1320px",
    },
  },
  plugins: [],
};

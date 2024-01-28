/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: {
        peanut: "#FCF7E5",
        cheese: "#F7C544",
        chocolate: "#2A1208",
      },
      font: "#0F0F0F",
      error: "#EC0707",
      access: "#28D464",
      white: "#FFFFFF",
      black: "#0F0F0F",
      gray: {
        300: "#D3D3D3",
        500: "#ACACAC",
      },
    },
    fontFamily: {
      sans: ["SOYOMapleBoldTTF", "sans-serif"],
    },
    fontSize: {
      extraSmall: "10px",
      small: "12px",
      medium: "14px",
      large: "18px",
      extraLarge: "24px",
      superLarge: "28px",
    },
    fontWeight: {
      light: 300,
      regular: 500,
      bold: 700,
    },

    extend: {
      boxShadow: {
        container: "-5px -5px 10px #FFF, 5px 5px 10px #F1E9CC",
        dropPeanut: "-5px -5px 10px #FFF, 5px 5px 8px #F1E9CC",
        innerPeanut: "inset 5px 5px 10px #F1E9CC, inset -5px -5px 10px #FFF",
        dropCheese: "-5px -5px 10px #DCA310, 5px 5px 8px #F3CE6F",
        innerCheese: "inset 5px 5px 10px #F3CE6F, inset -5px -5px 10px #DCA310",
      },
    },
  },
  plugins: [],
}

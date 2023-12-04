/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // safelist: [
  //   "animate-[fade-in_1s_ease-in-out]",
  //   "animate-[fade-in-down_1s_ease-in-out]",
  //   "animate-[drop-in_0.5s]",
  //   "animate-[drop-out_0.5s]",
  // ],
  theme: {
    //override
    screens: {
      xsm: "300px",
      sm: "480px", //min: 480
      md: "768px", //min: 768
      lg: "976px", //min: 976
      xl: "1440px", //min: 1440
    },
    extend: {
      //extends
      colors: {
        fGray: {
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          //e.g. className= "bg-fGray-200"
        },
        fOrange: {
          100: "fba061",
          200: "#fa9148",
          300: "#fa822f",
          400: "#F97316",
        },
        brightRed: "hsl(12, 88%, 59%)",
        brightRedLight: "hsl(12, 88%, 69%)",
        brightRedSupLight: "hsl(12, 88%, 95%)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLightGray: "hsl(13, 100%, 96%)",
        veryLightGray2: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};

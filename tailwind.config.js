import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primarybase: "#749B3F",
        primarybase1: "#749B3F1A",
        primarybase2: "red",
        secondarybase: "#FF6A1A",
        secondarybase100: "red",
        third: "green",
        inputcolor: "black",
        primaryFontColor: "#212337",
        primaryFontColorbase2: "#4A4A52",
      },
      fontFamily: {
        "noto-sans": ['"Noto Sans"', "serif"],
        rubik: ["Rubik", "serif"],
        questrial: ["Questrial", " serif"],
      },
    },
  },
  plugins: [daisyui],
};

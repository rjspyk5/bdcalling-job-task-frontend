import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primarybase: "#749B3F",
        primarybase1: "red",
        primarybase2: "red",
        secondarybase: "red",
        secondarybase100: "red",
        third: "green",
        inputcolor: "black",
        primaryFontColor: "#212337",
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

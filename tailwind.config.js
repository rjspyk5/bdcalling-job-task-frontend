import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primarybase: "red",
        primarybase1: "red",
        primarybase2: "red",
        secondarybase: "red",
        secondarybase100: "red",
        third: "green",
        inputcolor: "black",
      },
    },
  },
  plugins: [daisyui],
};

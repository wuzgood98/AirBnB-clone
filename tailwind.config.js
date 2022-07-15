/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#918e9b",
        dark: "#222",
      },
    },
  },
  plugins: [require("daisyui")],
};
